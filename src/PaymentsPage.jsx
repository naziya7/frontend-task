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