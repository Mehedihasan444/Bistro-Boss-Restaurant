import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable,setDisable] =useState(true)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value); 
    if (validateCaptcha(user_captcha_value)==true) {
         setDisable(false)
     }
     else {
        setDisable(true)
     }
  };

  return (
    <div className="flex justify-between gap-10">
      <div className="flex-1"></div>
      <div className="shadow-md p-5 flex-1">
        <h1 className="text-center font-bold text-2xl">Please Login </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control border p-3 w-5/6"
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
              className="form-control border p-3 w-5/6"
              placeholder="Password"
            />
          </div>

          <div className="mb-3 ">
            <label className="form-label" htmlFor="exampleInputPassword1">
              <LoadCanvasTemplate />
            </label>
            <div className="flex justify-between items-center">
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                className="form-control border p-3 "
                placeholder="Type here"
              />
              <button
                className="btn bg-[#D1A054] text-white"
                onClick={handleValidateCaptcha}
              >
                Validate
              </button>
            </div>
          </div>
          <button type="submit" disabled={disable}  className="btn bg-[#D1A054] text-white w-full ">
            Login
          </button>
        </form>
        <h3 className="text-[#D1A054] font-medium text-center">
          New here? Create a New Account
        </h3>
        <p className="text-center mb-3">Or sign in with </p>
        <div className="flex gap-5 justify-center">
          <button>
            <FaFacebook className="text-4xl " type="" />
          </button>
          <button>
            <FaGoogle className="text-4xl " type=""></FaGoogle>
          </button>
          <button>
            <FaGithub className="text-4xl " type=""></FaGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
