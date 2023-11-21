import React from 'react'
import Image3 from './images/f6.png'
import BackgroundAll from "./Background";
import About from './About';
import MenuContent from './MenuContent';
import Specialities from './Specialities';
import { NavLink } from 'react-router-dom';
import BackToTOP from './Backontop';
import { useNavigate } from 'react-router-dom';
import WhatsappPop from './WhatsappPop';

export default function Home() {

    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    return (
        <>
            <BackgroundAll />
            <WhatsappPop />
            {/* Special Offers*/}
            <div class="offer_section layout_padding-bottom">
                <div class="offer_container">
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src={Image3} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Pizza Day on  <br />Friday
                                        </h5>
                                        <h6>
                                            <span>20%</span> Off
                                        </h6>
                                        <a href="/contact">
                                            Order Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 ">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src={Image3} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Roll's Day on Monday
                                        </h5>
                                        <h6>
                                            <span>15%</span> Off
                                        </h6>
                                        <a href="/contact">
                                            Order Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={BackToTOP} className="m-3 backtotop bg-dark" >
                <button className="buttonfooter">
                    <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
            </div>
            <Specialities />

            <div className='d-flex justify-content-center mt-3 mb-5'>
                <button className="buttonorange">
                    <NavLink to="/menu" style={{ textDecoration: "none", color: "white" }}>Go To Our Menu</NavLink>
                </button>
            </div>
        </>
    );
}