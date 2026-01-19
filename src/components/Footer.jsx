import React from "react";

import '../style/Footer.css';
import '../style/mobile.css';

function Footer() {
    return (
        <>
            <section className="footer-main-section" id="footer">
                <div className="container">

                    <div className="footer-first-div">
                        LET'S CONNECT WITH ME
                    </div>

                    <a href="" className="footer-first-a-tag">
                        vishal676570@gmail.com
                    </a>

                    <div className="footer-second-div">
                        <div className="footer-second-inner-div">

                            <div className="footer-second-inner1-div">
                                <div className="footer-second-inner1-inner-div">
                                    <p className="footer-second-inner1-inner-p">
                                        Great! We're excited to hear from you and let's start something special togerter. call us for any inquery.
                                    </p>

                                    <div className="footer-second-inner1-inner1-div">
                                        <a href="https://hostwebs.site/CZHiD1">Baghana, Indore, India</a>
                                        <a href="tel:9294885826">+91-9294885826</a>
                                        <a href="mailto:vishal676570@gmail.com">vishal676570@gmail.com</a>
                                    </div>

                                    <div className="footer-second-inner1-inner2-div">
                                        <a href="https://wa.me/9294885826">WHATSAPP</a>
                                        <a href="https://facebook.com">FACEBOOK</a>
                                        <a href="https://linkedin.com">LINKDIN</a>
                                        <a href="https://twitter.com">TWITTER</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="footer-second-inner1-div">
                                <form action="">
                                    <div className="footer-form-div1">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="footer-form-div2">
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="footer-form-div3">
                                        <input type="Subject" placeholder="Subject" />
                                    </div>
                                    <div className="footer-form-div4">
                                        <textarea name="textarea" rows="5" placeholder="Message"/>
                                    </div>
                                    <div className="footer-form-div5">
                                        <div className="footer-form-inner-div5">
                                            <button type="submit" className="footer-form-submit-button">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="footer-third-div">
                        <div className="footer-third-inner-div">
                            <p className="footer-third-inner-p">
                                © 2025. All rights reserved
                            </p>
                            <a href="" className="footer-third-inner-a">Back To Top</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
