import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import createAccountImage from '../../../assets/login-image.png';
import googleIcon from '../../../assets/Google-icon.png';
import facebookIcon from '../../../assets/Facebook-icon.png';
import appleIcon from '../../../assets/Apple-icon.png';


const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row min-h-screen font-poppins">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img
          src={createAccountImage}
          alt="Create Account"
          className="w-[830px] h-[900px] object-cover rounded-lg "
        />
      </div>
      <div className="flex flex-col items-center justify-center p-8 w-full lg:w-1/2 bg-white">
        <div className="w-full max-w-md flex flex-col justify-center min-h-screen lg:min-h-full">
          <h1 className="text-2xl font-semibold mb-6 text-center">Create an account</h1>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                navigate('/next-screen');
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-blue-600 mb-4"
                >
                  Get Started
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex items-center my-4">
            <hr className="w-full border-t border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="w-full border-t border-gray-300" />
          </div>
          <button className="w-full bg-white text-gray-800 p-3 rounded-lg border border-gray-300 hover:bg-gray-100 mb-4 flex items-center justify-center">
            <span className="mr-2">
              <img src={googleIcon} alt="Google" className="h-5 w-5" />
            </span>
            <span className="font-poppins font-semibold text-base leading-6">Sign Up with Google</span>
          </button>
          <button className="w-full bg-white text-gray-800 p-3 rounded-lg border border-gray-300 hover:bg-gray-100 mb-4 flex items-center justify-center">
            <span className="mr-2">
              <img src={facebookIcon} alt="Facebook" className="h-5 w-5" />
            </span>
            <span className="font-poppins font-semibold text-base leading-6">Sign Up with Facebook</span>
          </button>
          <button className="w-full bg-white text-gray-800 p-3 rounded-lg border border-gray-300 hover:bg-gray-100 mb-4 flex items-center justify-center">
            <span className="mr-2">
              <img src={appleIcon} alt="Apple" className="h-5 w-5" />
            </span>
            <span className="font-poppins font-semibold text-base leading-6">Sign Up with Apple</span>
          </button>
          <p className="text-center text-gray-500 font-poppins font-medium text-base leading-6">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CreateAccount;
