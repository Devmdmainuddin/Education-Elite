import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import ChackoutForm from "./ChackoutForm";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
    return (
        <div>
            <h2>payment page</h2>
            <Elements stripe={stripePromise} >
                {/* <ChackoutForm /> */}
            </Elements>
        </div>
    );
};

export default Payment;