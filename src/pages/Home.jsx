import React from "react";
import { useEffect, useState } from "react";

import logo from '../assets/logo.png';

import '../style/Home.css';
import '../style/mobile.css';
import lineImage from '../assets/half-arrow.png';
import profileImage from '../assets/banner-profile.png';

import aboutImage from '../assets/about-v1.png';
import arrowImage from '../assets/arrow-down.png';
import skill1 from '../assets/skill1.png';
import skill2 from '../assets/skill2.png';
import skill3 from '../assets/skill3.png';
import skill4 from '../assets/skill4.png';
import skill5 from '../assets/skill5.png';
import skill6 from '../assets/skill6.png';
import skill7 from '../assets/skill7.png';


import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Home() {

    const texts = [
        "Web Developer",
        "Frontend Developer",
    ];

    const speed = 70;
    const deleteSpeed = 70;
    const delay = 500;

    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const currentText = texts[textIndex];

        let timeout;

        if (!isDeleting) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }, speed);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }, deleteSpeed);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);




    /* menu function logic  */

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>

            {/* hero section  */}
            <section id="home" className="hero-section">
                <div className="hero-section-main-div">
                    <div className="hero-inner-section-div">

                        {/* first div for desktop */}
                        <div className="hero-section-inner-first-div">

                            <div className="hero-section-logo">
                                <img src={logo} alt="vishal" />
                            </div>

                            <div className="hero-section-menus">
                                <ul>
                                    <li> <span
                                        onClick={() => {
                                            const el = document.getElementById('home');
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        Home</span>
                                    </li>
                                    <li> <span
                                        onClick={() => {
                                            const el = document.getElementById('about');
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    >About Me</span></li>
                                    <li> <span onClick={() => {
                                        const el = document.getElementById('education');
                                        if (el) {
                                            el.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}>Experience</span></li>

                                    <li><span onClick={() => {
                                        const el = document.getElementById("education");
                                        if (el) {
                                            el.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }} >My Work</span></li>

                                    <li> <span onClick={() => {
                                        const el = document.getElementById("skills");
                                        if (el) {
                                            el.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }} >Skills</span></li>

                                    <li><span onClick={() => {
                                        const el = document.getElementById("footer");
                                        if (el) {
                                            el.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }} >Connect With Me</span></li>

                                </ul>
                            </div>

                        </div>

                       
                        {/* first div for mobile */}

                        <div className="hero-section-mobile-main">
                            <div className="hero-section-mobile-first">
                                <img src={logo} alt="Vishal" />
                            </div>
                            <div className="hero-section-mobile-second">
                                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                         {menuOpen && (
                            <div className="mobile-menu">
                                <ul>
                                    <li onClick={() => setMenuOpen(false)}>Home</li>
                                    <li onClick={() => setMenuOpen(false)}>About</li>
                                    <li onClick={() => setMenuOpen(false)}>Services</li>
                                    <li onClick={() => setMenuOpen(false)}>Contact</li>
                                </ul>
                            </div>
                        )}


                        {/* second div for middle content and heading  */}
                        <div className="hero-section-second-div">
                            <span className="hero-available-to-work">Availbale to work</span>
                            <span className="hero-section-name" id="typewriter">Hi, I’m Vishal Choudhary</span>
                            <h1 id="typewriter"> {displayText}</h1>
                            <div className="hero-section-line-plus-content">
                                <img src={lineImage} alt="line" className="lineImages" />
                                <p>I specialize in building scalable web applications using modern technologies like React, MERN stack, Shopify, and WordPress.</p>
                            </div>
                            <div className="hero-section-counter-main">
                                <div className="hero-section-counter-inner-first">
                                    <span className="first-counter-span">1.5</span>
                                    <span className="second-counter-span">Year Of<br></br>Experience</span>
                                </div>
                                <div className="hero-section-counter-inner-first">
                                    <span className="first-counter-span">40+</span>
                                    <span className="second-counter-span">Live<br></br>Project</span>
                                </div>
                                <div className="hero-section-counter-inner-first">
                                    <span className="first-counter-span">15+</span>
                                    <span className="second-counter-span">work <br></br>with client</span>
                                </div>
                            </div>
                        </div>

                        {/* third div for profile with image */}
                        <div className="hero-section-third-div">
                            <div className="hero-section-third-inner-div">
                                <div className="hero-section-profile">
                                    <span className="profile-inner-span">Profile : </span>
                                </div>
                                <div className="hero-section-profile-image">
                                    <img src={profileImage} alt="" />
                                </div>
                                <span className="hero-profile-email-span">+91-9294885826</span>
                                <div className="hero-section-social-main">
                                    <ul className="hero-section-social-icons">
                                        <li><a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><FaFacebook /></a></li>
                                        <li><a href="https://wa.me/9294885826" rel="noopener noreferrer" target="_blank"><FaWhatsapp /></a></li>
                                        <li><a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a></li>
                                    </ul>
                                </div>

                                <div className="hero-section-download-button">
<<<<<<< HEAD
                                    <a href="https:google.com" rel="noopener noreferrer" className="hero-section-download-cv-button">Download CV</a>
=======
                                    <a href="https://google.com" rel="noopener noreferrer" className="hero-section-download-cv-button">Download CV</a>
>>>>>>> a098d6a4871f43f1e75bbfe1cca94da4bef2c9a2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us section */}
            <section className="about-section-main-section" id="about">
                <div className="container">
                    <div className="about-section-main-div">
                        <div className="about-section-inner-div">
                            <span className="about-section-first-span">About Me</span>
                            <h3 className="about-section-first-heading3">
                                <span className="about-section-second-span">A dedicated Software Developer focused on building scalable, </span>
                                user-friendly web applications and continuously learning new technologies to deliver impactful solutions.
                            </h3>
                        </div>
                    </div>

                    <div className="about-section-second-div">
                        <div className="about-section-second-inner-div">
                            <div className="about-section-inner-third-inner-div">
                                <img src={aboutImage} alt="" className="about-section-main-image" />
                            </div>
                        </div>
                        <div className="about-section-third-inner-div">
                            <div className="about-section-third-inner2-div">
                                <div className="about-section-third-inner3-div">
                                    <h2 className="about-section-first-heading2">
                                        Building Scalable <br></br>
                                        <span className="about-section-third-span">
                                            Web Solutions
                                        </span>
                                    </h2>
                                </div>
                                <div className="about-section-fourth-inner-div">
                                    <div className="about-section-fourth-inner2-div">
                                        <a href="https://google.com" rel="noopener noreferrer" className="about-section-first-a-tag">
                                            <img src={arrowImage} alt="" className="about-section-line-image" />
                                        </a>
                                        <div className="about-section-fifth-div">
                                            <p className="about-section-first-p-tag">
                                                I am a Software Developer experienced in building scalable web applications using React, MERN stack, Shopify, and WordPress, with 35+ projects, 15+ clients, and a passion for continuous learning.
                                            </p>
                                            <a href="" className="about-section-second-a-tag">
                                                <span className="about-section-fourth-span">
                                                    <i className="about-section-first-i-tag">
                                                    </i>
                                                    <span className="about-section-fifth-span">
                                                        About Me
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Education Section */}
            <section className="Education-main-section" id="education">
                <div className="container">
                    <div className="education-first-div">
                        <span className="education-first-span">Timeline Period</span>
                        <h2 className="education-first-h2">
                            my Work Experience And<br></br>
                            <span className="education-second-span">
                                My Education
                            </span>
                        </h2>
                    </div>

                    <div className="education-third-div">

                        <div className="education-fourth-div">

                            <div className="education-fifth-div">
                                <div className="education-fifth-inner-div">
                                    <i></i>
                                </div>
                                <div className="education-fifth-inner-div">
                                    <i></i>
                                </div>
                                <div className="education-fifth-inner-div">
                                    <i></i>
                                </div>
                            </div>

                        </div>

                        <div className="education-sixth-div">
                            <div className="education-sixth-inner1-div">
                                <div className="education-sixth-inner2-div">
                                    <div className="education-sixth-inner3-div">
                                        <h4 className="education-first-h4">
                                            <a href="https://google.com" rel="noopener noreferrer"> Associate Software Developer,TechInfini</a>
                                        </h4>
                                        <span className="education-third-span">
                                            (Sep. 2025 - Present)
                                        </span>
                                    </div>
                                    <p className="education-first-p">
                                        Currently working as an Associate Software Developer, contributing to scalable web applications and enhancing performance using modern development practices and technologies.
                                    </p>
                                </div>
                                <div className="education-sixth-inner2-div">
                                    <div className="education-sixth-inner3-div">
                                        <h4 className="education-first-h4">
                                            <a href="https://google.com" rel="noopener noreferrer"> Website Developer, Appzeto</a>
                                        </h4>
                                        <span className="education-third-span">
                                            (Jan. 2025 - Aug. 2025)
                                        </span>
                                    </div>
                                    <p className="education-first-p">
                                        Worked as a Website Developer, delivering responsive web solutions, handling 15+ clients directly, and contributing to multiple live projects using modern web technologies.
                                    </p>
                                </div>
                                <div className="education-sixth-inner2-div">
                                    <div className="education-sixth-inner3-div">
                                        <h4 className="education-first-h4">
                                            <a href="https://google.com" rel="noopener noreferrer">Full Stack Developer, Logical Softech</a>
                                        </h4>
                                        <span className="education-third-span">
                                            (Sep. 2024 - dec. 2024)
                                        </span>
                                    </div>
                                    <p className="education-first-p">
                                        Worked as a MERN Stack Developer intern, gaining hands-on experience in building and maintaining full-stack web applications using modern technologies.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="education-fourth1-div">

                            <div className="education-fifth-div">
                                <div className="education-fifth-inner-div">
                                    <i></i>
                                </div>
                                <div className="education-fifth-inner-div">
                                    <i></i>
                                </div>
                                <div className="education-fifth-inner-div">
                                    <i></i>
                                </div>
                            </div>

                        </div>

                        <div className="education-sixth-div">
                            <div className="education-sixth-inner1-div">
                                <div className="education-sixth-inner2-div">
                                    <div className="education-sixth-inner3-div">
                                        <h4 className="education-first-h4">
                                            <a href="https://google.com" rel="noopener noreferrer" >Graduation in computer Science</a>
                                        </h4>
                                        <span className="education-third-span">
                                            (2021 - 2025)
                                        </span>
                                    </div>
                                    <p className="education-first-p">
                                        I completed my B.Tech in Computer Science and Engineering from Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore. (with 7.5 CGPA)
                                    </p>
                                </div>
                                <div className="education-sixth-inner2-div">
                                    <div className="education-sixth-inner3-div">
                                        <h4 className="education-first-h4">
                                            <a href="https://google.com" rel="noopener noreferrer" > Senior Secondary </a>
                                        </h4>
                                        <span className="education-third-span">
                                            (2020-2021)
                                        </span>
                                    </div>
                                    <p className="education-first-p">
                                        Completed my 12th in Mathematics from Gaurav Vaibhav H. S. School, Indore, with 68.2%.
                                        Developed strong analytical, logical thinking, and problem-solving skills
                                    </p>
                                </div>
                                <div className="education-sixth-inner2-div">
                                    <div className="education-sixth-inner3-div">
                                        <h4 className="education-first-h4">
                                            <a href="https://google.com" rel="noopener noreferrer" >Secondary </a>
                                        </h4>
                                        <span className="education-third-span">
                                            (2018-2019)
                                        </span>
                                    </div>
                                    <p className="education-first-p">
                                        Completed my 10th in Mathematics from Indore Public School,Sanwer, Indore (with 67.2%)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 
                        <div className="education-eight-div">
                            <div className="education-eight-inner-div">

                                <div className="education-eight-inner1-div">
                                    <div className="education-eight-inner-inner1-div">
                                        <h4>
                                            <a href="">B.Tech,Svvv Indore</a>
                                        </h4>
                                        <span>
                                            (2021-2025)
                                        </span>
                                    </div>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    </p>
                                </div>

                                <div className="education-eight-inner2-div">
                                    <div className="education-eight-inner-inner1-div">
                                        <h4>
                                            <a href="">Senior Secondary,Indore</a>
                                        </h4>
                                        <span>
                                           (2020-2021)
                                        </span>
                                    </div>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    </p>
                                </div>

                                <div className="education-eight-inner3-div">
                                    <div className="education-eight-inner-inner1-div">
                                        <h4>
                                            <a href="">Secondary school, Sanwer</a>
                                        </h4>
                                        <span>
                                            (2018-2019)
                                        </span>
                                    </div>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skill-main-section show" id="skills">
                <div className="container">

                    <div className="skill-first-div">
                        <span className="skill-first-div-first-span">
                            Professional Skills
                        </span>
                        <h2 className="skill-first-div-first-h2">
                            Technical Skills & Expertise in Modern<br></br>
                            <span className="skill-first-div-second-span">
                                Web Development
                            </span>
                        </h2>
                    </div>

                    <div className="skill-second-div">

                        {/* skills 1 div */}
                        <div className="skill-second-inner-div">
                            <div className="skill-second-inner1-div">
                                <div className="skill-second-inner2-div">
                                    <div className="skill-second-inner3-div">
                                        <img src={skill1} alt="" />
                                    </div>
                                    <div className="skill-second-inner3-1-div">
                                        <span className="skill-second-inner3-1-div-span">
                                            HTML
                                        </span>
                                        <div className="skill-second-inner3-1-inner-div">
                                            <h3 className="skill-second-inner3-1-div-h3">
                                                <span className="skill-second-inner3-1-inner-span1">
                                                    <div className="skill-second-inner3-1-2-div">
                                                        <span className="skill-second-inner3-1-span2">95</span>
                                                        <span className="skill-second-inner3-1-span3">%</span>
                                                    </div>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* skill 2 div */}
                        <div className="skill-second-inner-div">
                            <div className="skill-second-inner1-div">
                                <div className="skill-second-inner2-div">
                                    <div className="skill-second-inner3-div">
                                        <img src={skill2} alt="" />
                                    </div>
                                    <div className="skill-second-inner3-1-div">
                                        <span className="skill-second-inner3-1-div-span">
                                            CSS
                                        </span>
                                        <div className="skill-second-inner3-1-inner-div">
                                            <h3 className="skill-second-inner3-1-div-h3">
                                                <span className="skill-second-inner3-1-inner-span1">
                                                    <div className="skill-second-inner3-1-2-div">
                                                        <span className="skill-second-inner3-1-span2">90</span>
                                                        <span className="skill-second-inner3-1-span3">%</span>
                                                    </div>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skill 3 div */}
                        <div className="skill-second-inner-div">
                            <div className="skill-second-inner1-div">
                                <div className="skill-second-inner2-div">
                                    <div className="skill-second-inner3-div">
                                        <img src={skill3} alt="" />
                                    </div>
                                    <div className="skill-second-inner3-1-div">
                                        <span className="skill-second-inner3-1-div-span">
                                            JavaScript
                                        </span>
                                        <div className="skill-second-inner3-1-inner-div">
                                            <h3 className="skill-second-inner3-1-div-h3">
                                                <span className="skill-second-inner3-1-inner-span1">
                                                    <div className="skill-second-inner3-1-2-div">
                                                        <span className="skill-second-inner3-1-span2">70</span>
                                                        <span className="skill-second-inner3-1-span3">%</span>
                                                    </div>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skill 4 Div */}
                        <div className="skill-second-inner-div">
                            <div className="skill-second-inner1-div">
                                <div className="skill-second-inner2-div">
                                    <div className="skill-second-inner3-div">
                                        <img src={skill4} alt="" />
                                    </div>
                                    <div className="skill-second-inner3-1-div">
                                        <span className="skill-second-inner3-1-div-span">
                                            React
                                        </span>
                                        <div className="skill-second-inner3-1-inner-div">
                                            <h3 className="skill-second-inner3-1-div-h3">
                                                <span className="skill-second-inner3-1-inner-span1">
                                                    <div className="skill-second-inner3-1-2-div">
                                                        <span className="skill-second-inner3-1-span2">80</span>
                                                        <span className="skill-second-inner3-1-span3">%</span>
                                                    </div>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* skill 5 div */}
                        <div className="skill-second-inner-div">
                            <div className="skill-second-inner1-div">
                                <div className="skill-second-inner2-div">
                                    <div className="skill-second-inner3-div">
                                        <img src={skill5} alt="" />
                                    </div>
                                    <div className="skill-second-inner3-1-div">
                                        <span className="skill-second-inner3-1-div-span">
                                            Shopify
                                        </span>
                                        <div className="skill-second-inner3-1-inner-div">
                                            <h3 className="skill-second-inner3-1-div-h3">
                                                <span className="skill-second-inner3-1-inner-span1">
                                                    <div className="skill-second-inner3-1-2-div">
                                                        <span className="skill-second-inner3-1-span2">77</span>
                                                        <span className="skill-second-inner3-1-span3">%</span>
                                                    </div>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skill 6 div */}
                        <div className="skill-second-inner-div">
                            <div className="skill-second-inner1-div">
                                <div className="skill-second-inner2-div">
                                    <div className="skill-second-inner3-div">
                                        <img src={skill6} alt="" />
                                    </div>
                                    <div className="skill-second-inner3-1-div">
                                        <span className="skill-second-inner3-1-div-span">
                                            WooCommerce
                                        </span>
                                        <div className="skill-second-inner3-1-inner-div">
                                            <h3 className="skill-second-inner3-1-div-h3">
                                                <span className="skill-second-inner3-1-inner-span1">
                                                    <div className="skill-second-inner3-1-2-div">
                                                        <span className="skill-second-inner3-1-span2">81</span>
                                                        <span className="skill-second-inner3-1-span3">%</span>
                                                    </div>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skill 7 Div */}
                        <div className="skill-second-inner-div">
                            <div className="skill-second-inner1-div">
                                <div className="skill-second-inner2-div">
                                    <div className="skill-second-inner3-div">
                                        <img src={skill7} alt="" />
                                    </div>
                                    <div className="skill-second-inner3-1-div">
                                        <span className="skill-second-inner3-1-div-span">
                                            Wordpress
                                        </span>
                                        <div className="skill-second-inner3-1-inner-div">
                                            <h3 className="skill-second-inner3-1-div-h3">
                                                <span className="skill-second-inner3-1-inner-span1">
                                                    <div className="skill-second-inner3-1-2-div">
                                                        <span className="skill-second-inner3-1-span2">85</span>
                                                        <span className="skill-second-inner3-1-span3">%</span>
                                                    </div>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;
