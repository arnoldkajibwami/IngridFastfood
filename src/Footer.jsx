import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"

import "./footer.css"

export default function Footer() {

    return (
        <>
            <footer class="footer_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 footer-col">
                            <div class="footer_contact">
                                <h4>
                                    Contact Us
                                </h4>
                                <div class="contact_link_box">
                                    <a href="">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            Location
                                        </span>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Call +243 999 888 777
                                        </span>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            ingridfasfood@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 footer-col">
                            <div class="footer_detail">
                                <a href="" class="footer-logo">
                                    Ingrid Fast Food
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor It uses a dictionary of over 200 Latin words, combined with
                                </p>
                                <div class="footer_social">
                                    <i className='socialnetwork' style={{ marginLeft: "5px" }}><BiLogoInstagram /></i>
                                    <i className='socialnetwork'><BiLogoFacebook /></i>
                                    <i className='socialnetwork'><BiLogoTwitter /></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 footer-col">
                            <h4>
                                Opening Hours
                            </h4>
                            <p>
                                Everyday
                            </p>
                            <p>
                                8.00 Am - 10.00 Pm
                            </p>
                        </div>
                    </div>
                    <div class="footer-info">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By  
                            <a href="https://auctux.com" style={{marginLeft:"5px"}}>Auctux</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
