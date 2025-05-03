import LoginForm from "../components/About/LoginForm";
import SignUpForm from "../components/About/SignUpForm";
import React, { useState } from "react";

const AccountPage = () => (
    <div>
      <h1>Account</h1>
      <LoginForm />
      <SignUpForm />
    </div>
  );
  
  export default AccountPage;