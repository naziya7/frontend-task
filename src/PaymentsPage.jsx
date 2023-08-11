// import React, { useState } from 'react';

// const PaymentsPage = () => {
//   const [selectedPlan, setSelectedPlan] = useState('basic');
//   const [totalPrice, setTotalPrice] = useState(10);
//   const [discount, setDiscount] = useState(0);

//   const handlePlanClick = (plan) => {
//     setSelectedPlan(plan);

//     // Calculate the total price and discount based on the selected plan
//     let price = 0;
//     let discountAmount = 0;

//     if (plan === 'basic') {
//       price = 10;
//     } else if (plan === 'standard') {
//       price = 15;
//       discountAmount = 5;
//     } else if (plan === 'premium') {
//       price = 20;
//       discountAmount = 10;
//     }

//     setTotalPrice(price);
//     setDiscount(discountAmount);
//   };

//   return (
//     <div>
//       <h1>Payments Page</h1>
//       <div>
//         <h2>Select a Plan:</h2>
//         <div>
//           <button
//             onClick={() => handlePlanClick('basic')}
//             className={selectedPlan === 'basic' ? 'active' : ''}
//           >
//             Basic ($10)
//           </button>
//           <button
//             onClick={() => handlePlanClick('standard')}
//             className={selectedPlan === 'standard' ? 'active' : ''}
//           >
//             Standard ($15)
//           </button>
//           <button
//             onClick={() => handlePlanClick('premium')}
//             className={selectedPlan === 'premium' ? 'active' : ''}
//           >
//             Premium ($20)
//           </button>
//         </div>
//       </div>
//       <div>
//         <h2>Summary:</h2>
//         <p>Selected Plan: {selectedPlan}</p>
//         <p>Total Price: ${totalPrice}</p>
//         {discount > 0 && <p>Discount: ${discount}</p>}
//       </div>
//     </div>
//   );
// };

// export default PaymentsPage;

// import React, { useState } from 'react';

// const PaymentsPage = () => {
//   const [selectedPlan, setSelectedPlan] = useState('basic');
//   const [selectedDuration, setSelectedDuration] = useState('monthly');
//   const [totalPrice, setTotalPrice] = useState(10);
//   const [discount, setDiscount] = useState(0);

//   const handlePlanClick = (plan) => {
//     setSelectedPlan(plan);
//     calculatePrice(plan, selectedDuration);
//   };

//   const handleDurationClick = (duration) => {
//     setSelectedDuration(duration);
//     calculatePrice(selectedPlan, duration);
//   };

//   const calculatePrice = (plan, duration) => {
//     let price = 0;
//     let discountAmount = 0;

//     if (plan === 'basic') {
//       price = 10;
//     } else if (plan === 'standard') {
//       price = 15;
//     } else if (plan === 'premium') {
//       price = 20;
//     }

//     if (duration === 'monthly') {
//       discountAmount = 0;
//     } else if (duration === '3months') {
//       price *= 3;
//       discountAmount = 5;
//     } else if (duration === '6months') {
//       price *= 6;
//       discountAmount = 10;
//     }

//     setTotalPrice(price);
//     setDiscount(discountAmount);
//   };

//   return (
//     <div>
//       <h1>Subscription Page</h1>
//       <div>
//         <h2>Select a Plan:</h2>
//         <div>
//           <button
//             onClick={() => handlePlanClick('basic')}
//             className={selectedPlan === 'basic' ? 'active' : ''}
//           >
//             Basic
//           </button>
//           <button
//             onClick={() => handlePlanClick('standard')}
//             className={selectedPlan === 'standard' ? 'active' : ''}
//           >
//             Standard
//           </button>
//           <button
//             onClick={() => handlePlanClick('premium')}
//             className={selectedPlan === 'premium' ? 'active' : ''}
//           >
//             Premium
//           </button>
//         </div>
//       </div>
//       <div>
//         <h2>Select a Duration:</h2>
//         <div>
//           <button
//             onClick={() => handleDurationClick('monthly')}
//             className={selectedDuration === 'monthly' ? 'active' : ''}
//           >
//             Monthly
//           </button>
//           <button
//             onClick={() => handleDurationClick('3months')}
//             className={selectedDuration === '3months' ? 'active' : ''}
//           >
//             3 Months
//           </button>
//           <button
//             onClick={() => handleDurationClick('6months')}
//             className={selectedDuration === '6months' ? 'active' : ''}
//           >
//             6 Months
//           </button>
//         </div>
//       </div>
//       <div>
//         <h2>Summary:</h2>
//         <p>Selected Plan: {selectedPlan}</p>
//         <p>Selected Duration: {selectedDuration}</p>
//         <p>Total Price: ${totalPrice}</p>
//         {discount > 0 && <p>Discount: ${discount}</p>}
//       </div>
//     </div>
//   );
// };

// export default PaymentsPage;

import React, { useState } from 'react';

const PaymentsPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('6months');
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
    calculateTotalPrice(event.target.value);
  };

  const calculateTotalPrice = (plan) => {
    let discounts = 17;
    let monthPrice = 0;
    let result = 0;
    let month = 0;
    let ans = 0;
    let final = 0;
    if (plan === '12months') {

      month = 12;
      monthPrice = 15;
      result = monthPrice * month;
      ans = Math.floor(result * discounts) / 100;
      final = Math.floor(result - ans)

    } else if (plan === '6months') {
      month = 6
      monthPrice = 25;
      result = monthPrice * month;
      ans = Math.floor(result * discounts) / 100;
      final = Math.floor(result - ans)
    }



    setTotalPrice(final);
  };



  return (
    <div>
      <h1>Subscription Plans</h1>
      <div>
        <label>
          <input
            type="radio"
            value="12months"
            checked={selectedPlan === '12months'}
            onChange={handlePlanChange}
          />
          12 Months - $179
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="6months"
            checked={selectedPlan === '6months'}
            onChange={handlePlanChange}
          />
          6 Months - $149
        </label>
      </div>
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default PaymentsPage;


// import React, { useState } from 'react';

// const PaymentsPage = () => {
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const handlePlanSelect = (plan) => {
//     setSelectedPlan(plan);
//     calculateTotalPrice(plan);
//   };

//   const calculateTotalPrice = (plan) => {
//     // Calculate the total price based on the selected plan and discounts
//     let price = 0;
//     if (plan === '12-month') {
//       price = 179; // Example price for 12-month plan
//     } else if (plan === '3-month') {
//       price = 40; // Example price for 3-month plan
//     }
//     // Apply discounts if applicable
//     if (plan === '12-month') {
//       price *= 0.9; // Apply 10% discount for 12-month plan
//     } else if (plan === '3-month') {
//       price *= 0.95; // Apply 5% discount for 3-month plan
//     }
//     setTotalPrice(price);
//   };

//   return (
//     <div>
//       <h2>Select a Subscription Plan</h2>
//       <div>
//         <SubscriptionPlan
//           plan="12-month"
//           isSelected={selectedPlan === '12-month'}
//           onSelect={handlePlanSelect}
//         />
//         <SubscriptionPlan
//           plan="3-month"
//           isSelected={selectedPlan === '3-month'}
//           onSelect={handlePlanSelect}
//         />
//       </div>
//       <h3>Total Price: ${totalPrice}</h3>
//     </div>
//   );
// };

// const SubscriptionPlan = ({ plan, isSelected, onSelect }) => {
//   return (
//     <div
//       onClick={() => onSelect(plan)}
//       style={{ background: isSelected ? 'lightblue' : 'white', padding: '10px', margin: '10px' }}
//     >
//       <h3>{plan}</h3>
//       <p>Price: ${plan === '12-month' ? 120 : 40}</p>
//       {plan === '12-month' && <p>Discount: 10%</p>}
//       {plan === '3-month' && <p>Discount: 5%</p>}
//     </div>
//   );
// };

// export default PaymentsPage;
