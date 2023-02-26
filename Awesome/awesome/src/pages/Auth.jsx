import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import signin from '../Images/signin.PNG'
import { Button,Center, Text } from "@chakra-ui/react";
import OtpInput from "otp-input-react";
import { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {auth} from './firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { Context } from "../Context/Context";

const Auth = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const value=useContext(Context);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        value.login();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000,style:{marginTop:'300px'} }}/>
        <div id="recaptcha-container"></div>
        {user ? (
          <Navigate to='/'/> 
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <img src={signin} alt="" />
            {showOTP ? (
              <>
              
                <div style={{paddingLeft:'120px'}}>
              <Text my={5}>Enter OTP here</Text>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                  
                ></OtpInput></div>
                <button
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-black rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <Button  onClick={onOTPVerify} width={'527px'} bgGradient='linear(to-r, rgb(234, 63, 92), rgb(147, 7, 147))' color='white'marginTop={10} mb={300}>Verify</Button>
                </button>
              </>
            ) : (
              <>
                
                <Text my={5}>Verify your phone number</Text>
                <PhoneInput country={"in"} value={ph} onChange={setPh} inputStyle={{width:'527px'}}/>
                <button
                  
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-black rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <Button onClick={onSignup} width={'527px'} bgGradient='linear(to-r, rgb(234, 63, 92), rgb(147, 7, 147))' color='white'marginTop={10} mb={300}>Send OTP</Button>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Auth;