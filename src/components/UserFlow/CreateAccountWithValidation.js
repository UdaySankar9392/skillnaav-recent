import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import loginImage from "../../assets/login-image.png";
import { GoogleLogin } from "@react-oauth/google";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = (response) => {
    // Handle Google login response here
    console.log(response);
    navigate("/verification"); // Adjust this to your desired path
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-poppins">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img
          src={loginImage}
          alt="Login"
          className="w-[830px] h-[900px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-8 w-full lg:w-1/2 bg-white">
        <div className="w-full max-w-md flex flex-col justify-center min-h-screen lg:min-h-full">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Login to your account
          </h1>
          <h2 className="text-1xl mb-6 w-360px h-4 text-center">
            Welcome back! Please enter your details
          </h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                navigate("/MainPage2"); // Navigate to verification code screen
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <label className="inline-flex items-center">
                    <Field
                      type="checkbox"
                      name="rememberMe"
                      className="form-checkbox"
                    />
                    <span className="ml-2 text-gray-600">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-purple-500 hover:underline"
                  >
                    Forgot password
                  </Link>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-blue-600 mb-4"
                >
                  Sign In
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex items-center my-4">
            <hr className="w-full border-t border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="w-full border-t border-gray-300" />
          </div>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={(error) => console.log(error)}
            theme="filled_blue"
            logoAlignment="left"
            className="w-full bg-white text-gray-800 p-3 rounded-lg border border-gray-300 hover:bg-gray-100 mb-4 flex items-center justify-center"
          />
          <p className="text-center text-gray-500 font-poppins font-medium text-base leading-6">
            Don't have an account?{" "}
            <Link
              to="/next-screen"
              className="text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
