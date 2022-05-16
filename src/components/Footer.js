import React from "react";
import logo from "../assets/logo.png"
import "../styles/Footer.css"


const Footer = () => {

  return (
    <>
    <section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>Learn</h3>
            <a href="#"> Create </a>
            <a href="#"> Collect </a>
        </div>

        <div className="box">
            <h3>Company</h3>
            <a href="#"> Careers </a>
            <a href="#"> Help Center </a>
        </div>

        <div className="box">
            <h3>Connect</h3>
            <a href="#"> Twitter </a>
            <a href="#"> Discord </a>
        </div>

        <div className="box" id="logo-box">
            AI Art
        </div>
 
    </div>

    <div class="credit"> 2022 | all rights reserved</div>

    </section>
    
    </>
  );
};

export default Footer;
