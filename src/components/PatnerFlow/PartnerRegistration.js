import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import createAccountImage from '../../assets/login-image.png';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
});

const  PatnerRegistration = () => (
  <div className="flex flex-col lg:flex-row min-h-screen font-poppins">
    <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
      <img
        src={createAccountImage}
        alt="Create Account"
        className="w-[830px] h-[900px] object-cover rounded-lg"
      />
    </div>
    <div className="flex flex-col items-center justify-center p-8 w-full lg:w-1/2 bg-white">
      <div className="w-full max-w-md flex flex-col justify-center min-h-screen lg:min-h-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Create a Patner account</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-poppins mb-2">Email*</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-poppins mb-2">Password*</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                <p className="text-gray-500 text-sm mt-1">Must be at least 8 characters.</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-blue-600 mb-4"
              >
                Create account
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center text-gray-500 font-poppins font-medium text-base leading-6">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  </div>
);

export default PatnerRegistration;
