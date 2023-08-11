import React from 'react'
import "../Subscription/SubsStyle.css";
import Line from  "../../assets/Rectangle 2714.svg"
function Subscription({TV, ADS, LAW, Book, Watch}) {
  return (
    <div>
      <section className='left-session'>
                <div className='left-ses1'>
                    <div>
                        <div className='div div1'>Access curated cources worth</div>
                        <div className='div div2'>₹ 18,500 at just <span style={{ color: '#0096FF' }}> ₹99</span> per year!</div>
                        <img src={Line} alt="" className='line' />
                    </div>
                    <div className='left-ses2'>
                        <div>
                            <img src={Book} alt="" className='book' />
                            <div>
                                <strong>100+ </strong> <span> Job relevent cources</span>
                            </div>
                        </div>
                        <div>
                            <img src={Watch} alt="" className='watch' />
                            <div>
                                <strong>20,000</strong><span>Hours of content</span>
                            </div>
                        </div>
                        <div>
                            <img src={TV} alt="" className='tv' />
                            <div>
                                <strong>Exclusive</strong><span>webinar access</span>
                            </div>
                        </div>
                        <div>
                            <img src={LAW} alt="" className='law' />
                            <div>
                                <span>   Scholarship worth</span> <strong>94,500</strong>
                            </div>
                        </div>
                        <div>
                            <img src={ADS} alt="" className='ads' />
                            <div>
                                <strong>Ad Free</strong> <span>learning experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Subscription
