// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useState } from 'react';
// import { faStripe } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const PaymentForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [paymentError, setPaymentError] = useState('')
//     const [paymentSuccess, setPaymentSuccess] = useState('')
//     const handleSubmit = async (event) => {

//         event.preventDefault();

//         if (!stripe || !elements) {

//             return;
//         }


//         const cardElement = elements.getElement(CardElement);


//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });



//         if (error) {
//             setPaymentError(error.message)
//             setPaymentSuccess(null)
//         } else {
//             setPaymentSuccess(paymentMethod.id)
//             setPaymentError(null)

//         }
//     };

//     return (
//         <div >
//             <form onSubmit={handleSubmit}>
//                 <CardElement />
//                 <div className="d-flex justify-content-start">
//                     <button className="btn btn-secondary btn-lg mt-4" type="submit" disabled={!stripe}>
//                         <FontAwesomeIcon icon={faStripe} />  Pay
//                      </button>
//                 </div>

//             </form>
//             {
//                 paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
//             }
//             {
//                 paymentSuccess && <p style={{ color: 'green' }}>Your Payment Has Been Successfully Paid</p>
//             }
//         </div>
//     );
// };
// export default PaymentForm;