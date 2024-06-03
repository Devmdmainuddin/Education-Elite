import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import ChackoutForm from "./ChackoutForm";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
    return (
        <div className="w-[300px]">
            <h2>payment page</h2>
            <div>
                
            </div>
            <Elements stripe={stripePromise} >
                {/* <ChackoutForm /> */}
            </Elements>
        </div>
    );
};

export default Payment;