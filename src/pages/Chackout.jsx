import { useLoaderData } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ChackoutForm from '../pages/payment/ChackoutForm';
import useAuth from "../hooks/useAuth";

const Chackout = () => {
    const items = useLoaderData()
    const {user}= useAuth()
    
    const { TuitionFees, ApplicationFees, ServiceCharge,ScholarshipName
,        _id, UniversityName, ScholarshipCategory, SubjectCategorey } = items
    const total = parseInt(TuitionFees) + parseInt(ApplicationFees) + parseInt(ServiceCharge)

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
    return (
        <div >
            <div className="capitalize text-center">
            <h2 className="text-3xl capitalize">welcome TO {user?.displayName}</h2>
            <p>application payment info</p>
            <p>you total payment is : ${total}</p>
            </div>
        
            <div className="max-w-[800px] mx-auto mt-6 border p-6">
                <Elements stripe={stripePromise} >
                    <ChackoutForm total={total} id={_id} ScholarshipName={ScholarshipName} SubjectCategorey={SubjectCategorey} ScholarshipCategory={ScholarshipCategory} UniversityName={UniversityName} />
                </Elements>
            </div>


            <div>

            </div>
        </div>
    );
};

export default Chackout;