import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { counterContext } from "./context/context";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CreateAccount from "./components/UserFlow/SignUpLogin/CreateAccount";
import LoginPage from "./components/UserFlow/SignUpLogin/CreateAccountWithValidation";
import NextScreen from "./components/UserFlow/SignUpLogin/NextScreen";
import VerificationCode from "./components/UserFlow/SignUpLogin/VerificationCode";
import Profilebuilding from "./components/UserFlow/SignUpLogin/ProfileBuilding/ProfileForm";
import ProfilePicture from "./components/UserFlow/SignUpLogin/ProfileBuilding/ProfilePicture";
import AdminCreateAccount from "./components/AdminFlow/AdminCreateAccount";
import AdminLogin from "./components/AdminFlow/AdminLogin";
import AdminVerificationCode from "./components/AdminFlow/AdminVerificationCode";
import AdminMain from "./components/AdminFlow/AdminMain";


import Cards from "./components/HomePage/Cards";
import JobPosting from "./components/HomePage/JobPosting";
import MainPage2 from "./components/HomePage2/MainPage2";
import { AdminProvider } from './components/AdminFlow/AdminContextApi/AdminContext';


const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };
  

  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={count}>
      <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
        <Router>
          <AdminProvider> {/* Wrap with AdminProvider */}
            <Routes>
              <Route path="/loginpage" element={<MainPage2 />} />
              <Route path="/" element={<CreateAccount />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/verification" element={<VerificationCode />} />
              <Route path="/next-screen" element={<NextScreen />} />
              <Route path="/profilebuilding" element={<Profilebuilding />} />
              <Route path="/profilepicture" element={<ProfilePicture />} />
              <Route path="/MainPage2" element={<MainPage2 />} />
              
              {/* Admin Flow */}
              <Route path="/admin-create-account" element={<AdminCreateAccount />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-verification-code" element={<AdminVerificationCode />} />
              <Route path="/admin-main" element={<AdminMain />} />

              {/* Job and Cards */}
              <Route path="/cards" element={<Cards onCardClick={handleCardClick} />} />
              <Route path="/job-posting" element={<JobPosting job={selectedJob} />} />
            </Routes>
          </AdminProvider>
        </Router>
      </GoogleOAuthProvider>
    </counterContext.Provider>
  );
};

export default App;
