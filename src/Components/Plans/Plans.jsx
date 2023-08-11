import React from 'react'
import "../Plans/PlansStyle.css";
function Plans({totalPrice, handlePlanChange, selectedPlan, RadioButton, Clock, Razorpay}) {
  return (
    <div>
           <section className='right-session'>
                <div className='header'>
                    <div className='head1'>
                        <strong>1</strong>
                        <p>Sign Up</p>
                    </div>
                    <div className='head2'>
                        <strong>2</strong>
                        <p>Subscribe</p>
                    </div>
                </div>

                <div className='subs'>
                    Select your subcription plan
                </div>
                <div className='plans'>
                    <p className='offer'>Offer expired</p>
                    <div className='child expired'>
                        <input type="radio" name="" id="" disabled checked />
                        <div className='childs '>
                            <span className='exp'>12 Months Subscription</span>
                            <div >
                                <span className='total exp'>Total</span> <strong className='exp'>99</strong>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                    <span className=' exp'>₹8 </span><span className=' exp'>/mo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='recom'>Recommended</p>
                    <div className='child'>
                        {/* <input type="radio" name="" id="" value="12month" checked={selectedPlan === "12month"} onChange={handlePlanChange} /> */}
                        <img src={RadioButton} alt="" />
                        <div className='childs'>
                            <p>12 Months Subscription</p>
                            <div>
                                <span className='total'>Total </span> <strong>176</strong>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                    <p className='rup'>₹15</p> <span className='mon'>/mo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='child'>
                        <input type="radio" name="radio-group" id="" value="6month" checked={selectedPlan === "6month"} onChange={handlePlanChange} />
                        <div className='childs'>
                            <p>6 Months Subscription</p>
                            <div>
                                <span className='total'>Total </span> <strong>149</strong>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                    <p className='rup'>₹25</p> <span className='mon'>/mo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='child'>
                        <input type="radio" name="" className='input' id="" value="3month" checked={selectedPlan === "3month"} onChange={handlePlanChange} />
                        <div className='childs'>
                            <p>3 Months Subscription</p>
                            <div>
                                <span className='total'>Total </span> <strong>99</strong>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                    <p className='rup'>₹33 </p><span className='mon'>/mo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='subs-plans'>
                        <div className='subs-child'>
                            <p>Subscription Fee</p>
                            <span>₹18,500</span>
                        </div>
                        <div className='subs-child1'>
                            <div className='subs-child1-p'>
                                <p>Limited time offer</p>
                                <span>-₹18,401</span>
                            </div>
                            <div className='subs-child-p1'>
                                <img src={Clock} alt="" />
                                <p>Offer Valid till 25th March 2023</p>
                            </div>
                        </div>

                        <div className='total-price'>
                            <div className='total-price-1'>
                                <strong>Total</strong>
                                <span>(lncl. of 18% GST)</span>
                            </div>
                            <strong className='price'>₹{totalPrice}</strong>
                        </div>
                    </div>

                    <div className='buttons'>
                        <button className='cancle'>CANCLE</button>
                        <button className='proceed'>PROCEED TO PAY</button>
                    </div>
                    <img src={Razorpay} alt="" className='raz' />
                </div>
            </section>
    </div>
  )
}

export default Plans
