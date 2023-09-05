import React, { useState, useEffect } from 'react';
import './signUp.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

// officialsonu85728@gmail.com 
const OTP = Math.floor(Math.random() * (999999 - 100000)) + 100000;
// alert(OTP)
let sendEmailOrNot = false;

// component
const Emailing = ({ setHomeCss }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-quad',
      delay: 150,
    });
  }, []);

  // mail section 
  const [email, setEmail] = useState("");
  const emailChanged = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailError = emailValue.endsWith("@gmail.com") || (emailValue.endsWith(".com") && emailValue.includes("@"));
    const emailErrorElement = document.getElementById("wrongEmail");

    if (emailError) {
      emailErrorElement.classList.add("displayNone");
      sendEmailOrNot = true;
    }
    else {
      emailErrorElement.classList.remove("displayNone");
      sendEmailOrNot = false;
    }
  }

  // otp section -> verification
  const otpParent = document.getElementById("otpInp");
  const otpInput = document.getElementById("otp");
  const verifyOtp = document.getElementById("verifyOtpButton");
  const wrongOtpMsg = document.getElementById("wrongOtp");
  const rightOtpMsg = document.getElementById("rightOtp");

  // otp sender function
  const sendOTP = () => {

    let emailbody = `
      <h1>Welcome,</h1> <br>
      <h2 id="otp">Your OTP is ${OTP}</h2>
  `;

    const emailUnderSendOtpBtn = document.getElementById("emailUnderSendOtpBtn");
    const emailSended = document.getElementById("otpSendedMsg");

    if (sendEmailOrNot) {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sonupoonia85728@gmail.com",
        Password: "906986001D7FEB378DB6FB45ED458581875B",
        To: email,
        From: "sonupoonia85728@gmail.com",
        Subject: "Email Verification!",
        Body: emailbody
      }).then(
        message => {
          if (message === "OK") {
            emailSended.classList.remove("displayNone");
            emailUnderSendOtpBtn.classList.add("displayNone");

            // otp section
            otpParent.classList.remove("displayNone");
            otpInput.classList.remove("displayNone");
            verifyOtp.classList.remove("displayNone");


          }
          else {
            emailUnderSendOtpBtn.innerText = "OTP Not Sended Due To Some Technical Issue!";
            emailUnderSendOtpBtn.classList.remove("displayNone");
          }
        }
      );
    }
    else {
      emailUnderSendOtpBtn.classList.remove("displayNone");
    }
  }

  const [userOtp, setUserOtp] = useState("");
  const userOtpChanged = (e) => {
    setUserOtp(e.target.value);
  }

  const verifyOTP = () => {
    // OTP verification
    if (userOtp == OTP) {
      wrongOtpMsg.classList.add("displayNone");
      rightOtpMsg.classList.remove("displayNone");

      setTimeout(() => {
        localStorage.setItem("userEmailId", email);
        let completeSignupPage = document.getElementById("completeSignupPage");
        completeSignupPage.classList.add("displayNone");
        let homePageParent = document.getElementById("homePage");
        homePageParent.classList.remove("displayNone");
        setHomeCss("");
      }, 1000);
    }

    else {
      wrongOtpMsg.classList.remove("displayNone");
      rightOtpMsg.classList.add("displayNone");
    }
  }

  return (
    <div id='completeSignupPage'>
      <div id="signupPage">
        <div id='welcomeMsg' data-aos="fade-down">Foody SignUp Page</div>
        <div id="form">
          <div id="emailInp">
            <input type="email" data-aos="fade-right" className='singupInputs' id="email" value={email} onChange={emailChanged} placeholder="Please Enter Your Email iD" />
            <div className='error displayNone' id="wrongEmail">Invalid Email, Please Check And Try Again!</div>
          </div>
          <button onClick={sendOTP} data-aos="fade-left" className='button' id="sendOtpButton">Send OTP</button>
          <div id='otpSendedMsg' className='displayNone'>OTP Sended On <span id='emailId'>{email}</span> Successfully!</div>
          <div id='emailUnderSendOtpBtn' className='displayNone'>Invalid Email, Please Check And Try Again!</div>

          <div id='otpInp' className='displayNone'>
            <input type="text" className='singupInputs displayNone' id="otp" value={userOtp} onChange={userOtpChanged} placeholder="Please Enter Your OTP Here" />
            <div className='error displayNone' id="wrongOtp">Sorry! Wrong OTP, Please Try Again.</div>
            <div className='verified displayNone' id="rightOtp">Hurray! Signup Successfull!</div>
          </div>
          <button className="button displayNone" id="verifyOtpButton" onClick={verifyOTP}>Verify</button>
        </div>
      </div>
    </div>
  )
}

export default Emailing;