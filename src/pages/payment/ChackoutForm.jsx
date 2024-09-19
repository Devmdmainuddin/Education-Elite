import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useCart from "../../hook/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import AddScholarShipForm from "../../components/Dashboard/Form/AddScholarShipForm";
import ApplyScholarshipForm from "../../components/Dashboard/Form/ApplyScholarshipForm";
// import { useNavigate } from "react-router-dom";

const ChackoutForm = ({total,id,ScholarshipName,UniversityName,ScholarshipCategory,SubjectCategorey}) => {
  const [error, setError] = useState()
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId,setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth() || {};
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    if(total > 0){
      axiosSecure.post('/create-payment-intent', { price: total })
      .then(res => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
    }
    
  }, [axiosSecure, total])


  const handleSubmit = async (event) => {

    event.preventDefault()
    if (!stripe || !elements) {

      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message)
      // console.log('[error]', error);
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      }
    })
    if (confirmError) {
      // console.log('confirm error')
    } else {
      // console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        const payment = {
          email:user.email,
          price:total,
          transactionId:paymentIntent.id,
          date:new Date(),
          cartIds:id,
        //   cartIds:carts.map(item => item._id),
        //   menuItemIds:carts.map(item =>item.menuId), 
          status:'panding'

        }
        const res =await axiosSecure.post('/payments',payment)
       
        // refetch()
        if(res.data?.result?.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment successfuly",
            showConfirmButton: false,
            timer: 1500
        });
        // navigat('/dashboard/paymentHistory')
        // console.log('payment saved',res.data); 
        }
      }
    }


  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className=" mt-6 py-2 px-9 bg-[#6eecab] rounded uppercase mx-auto block" >
          Pay
        </button>
        <p className="text-red-500">{error}</p>

      </form>
      {transactionId && <>
    <p className="text-green-600"> your transaction id:{transactionId}
    <h2>user name:</h2>
</p>
<ApplyScholarshipForm id={id} ScholarshipName={ScholarshipName} SubjectCategorey={SubjectCategorey}ScholarshipCategory={ScholarshipCategory} UniversityName={UniversityName} total={total} />
</>}
    </div>
  );
};

export default ChackoutForm;