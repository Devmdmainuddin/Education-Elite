import { useLoaderData } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ChackoutForm from '../pages/payment/ChackoutForm';

const Chackout = () => {
    const items = useLoaderData()
    const { TuitionFees, ApplicationFees, ServiceCharge ,_id ,UniversityName,ScholarshipCategory,SubjectCategorey } = items
    const total = parseInt(TuitionFees) + parseInt(ApplicationFees) + parseInt(ServiceCharge)

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
    return (
        <div>
            <h2>chackout page</h2>
            <p>{items.TuitionFees}</p>
            <p>{items.ApplicationFees}</p>
            <p>{items.ServiceCharge}</p>
            <p>{total}</p>
            <h2>payment</h2>

            <Elements stripe={stripePromise} >
                <ChackoutForm total={total} id={_id} SubjectCategorey={SubjectCategorey}ScholarshipCategory={ScholarshipCategory} UniversityName={UniversityName} />
            </Elements>

            <div>

            </div>
        </div>
    );
};

export default Chackout;