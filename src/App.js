import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/SigninScreen/SignIn";
import PreSignUp from "./components/PreSignUpScreen/PreSignUp";
import VerifyEmailOTP from "./components/VerifyEmailOTPScreen/VerifyEmailOTP";
import VerifyPhoneOTP from "./components/VerifyPhoneOTPScreen/VerifyPhoneOTP";
import SignUp from "./components/SignUpScreen/SignUpScreen";
import VerifyPhoneNumber from "./components/VerifyPhoneNumberScreen/VerifyPhoneNumber";
import ForgotPassword from "./components/ForgotPasswordScreen /ForgotPassword";
import CreateNewPassword from "./components/CreateNewPasswordScreen/CreateNewPassword";
import Pricing from "./components/PricingScreen/Pricing";
import SetupPayment from "./components/SetupPaymentScreen/SetupPayment";
import SelectBroker from "./components/SelectBrokerScreen/SelectBroker";
import ForgotPasswordVeriftOTP from "./components/ForgotPasswordVerifyOTPScreen/ForgotPasswordVerifyOTP";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/preSignUp" element={<PreSignUp />} />
        <Route path="/verifyEmailOTP" element={<VerifyEmailOTP />} />
        <Route path="/verifyPhoneOTP" element={<VerifyPhoneOTP />} />
        <Route
          path="/forgotPasswordVerifyOTP"
          element={<ForgotPasswordVeriftOTP />}
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/verifyPhoneNumber" element={<VerifyPhoneNumber />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/createNewPassword" element={<CreateNewPassword />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/setupPayment" element={<SetupPayment />} />
        <Route path="/selectBroker" element={<SelectBroker />} />
      </Routes>
    </div>
  );
}

export default App;
