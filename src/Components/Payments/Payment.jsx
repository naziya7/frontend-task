import React, { useState } from 'react'
import "../Payments/Style.css"
import Edyoda from "../../assets/EDYODA.svg"
import Arrow from "../../assets/Icon Chevron Down.png"
import SearchIcon from "../../assets/Search Icon.svg"
import Book from "../../assets/Icon.svg"
import Watch from "../../assets/Icon (3).png"
import TV from "../../assets/Icon.png"
import LAW from "../../assets/Icon (2).png"
import ADS from "../../assets/Icon (4).png"
import Clock from "../../assets/Icon Clock.svg"
import Razorpay from "../../assets/Razorpay Icon.svg"
import RadioButton from "../../assets/Radio Button.svg"
import Plans from '../Plans/Plans'
import Subscription from '../Subscription/Subscription'
function Payment() {
    const [selectedPlan, setSelectedPlan] = useState('6months');
    const [totalPrice, setTotalPrice] = useState(149);

    const handlePlanChange = (event) => {
        setSelectedPlan(event.target.value);
        calculateTotalPrice(event.target.value)
    }
    const calculateTotalPrice = (plan) => {
        let discounts = 17;
        let monthPrice = 0;
        let result = 0;
        let month = 0;
        let ans = 0;
        let final = 0;
        if (plan === '6month') {

            month = 6;
            monthPrice = 25;
            result = monthPrice * month;
            ans = Math.floor(result * discounts) / 100;
            final = Math.floor(result - ans)

        }
        else if (plan === '3month') {
            month = 3
            monthPrice = 33;
            result = monthPrice * month;
            ans = Math.floor(result * discounts) / 100;
            final = Math.floor(result - ans)
        }
        else if (plan === '12month') {
            month = 12
            monthPrice = 15;
            result = monthPrice * month;
            ans = Math.floor(result * discounts) / 100;
            final = Math.floor(result - ans)
        }
        setTotalPrice(final);
    }
    return (
        <div className='container'>
            <nav>
                <div className='navbar'>
                    <div className='left-nav'>
                        <img src={Edyoda} alt="" className='edyoda' />
                        <p>Cources <img src={Arrow} alt="" /></p>
                        <p>Programs <img src={Arrow} alt="" /></p>
                    </div>

                    <div className='right-nav'>
                        <img src={SearchIcon} alt="" />
                        <p>Log in</p>
                        <button>JOIN NOW</button>
                    </div>
                </div>
            </nav>

            <Subscription Book={Book} LAW={LAW} TV={TV} ADS={ADS} Watch={Watch} />

            <Plans totalPrice={totalPrice} handlePlanChange={handlePlanChange} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} RadioButton={RadioButton} Clock={Clock} Razorpay={Razorpay} />


        </div>
    )
}

export default Payment
