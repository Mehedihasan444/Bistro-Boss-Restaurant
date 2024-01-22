import { useEffect, useState } from "react";

import {loadCaptchaEnginge,LoadCanvasTemplate,validateCaptcha} from "react-simple-captcha";
import loginImg from "../../assets/others/authentication2.png";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import {  useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { login } = useAuth();
const navigate = useNavigate()
const location =  useLocation();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

// console.log("test",location.state)
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((userCredential) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(location?.state || "/")
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${errorMessage}`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("error code:", errorCode, "errorMessage :", errorMessage);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div className="flex justify-between gap-10 items-center h-screen max-w-6xl mx-auto">
      <div className="flex-1 hidden sm:inline-block">
        <img src={loginImg} alt="" className="" />
      </div>
      <div className="shadow-md p-10 flex-1">
        <h1 className="text-center font-bold text-2xl">Please Login </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control border p-3  w-full"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control border p-3  w-full"
              placeholder="Password"
            />
          </div>

          <div className="mb-3 ">
            <label className="form-label" htmlFor="exampleInputPassword1">
              <LoadCanvasTemplate />
            </label>
            <div className="flex justify-between items-center">
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                className="form-control border p-3  w-full"
                placeholder="Type here"
              />
            
            </div>
          </div>
          <button
            type="submit"
            disabled={disable}
            className="btn bg-[#D1A054] text-white w-full "
          >
            Login
          </button>
        </form>
        <h3 className="text-[#D1A054] font-medium text-center mt-2">
          New here? <a href="/signUp">Create a New Account</a>
        </h3>
        <p className="text-center mb-3">Or sign in with </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
