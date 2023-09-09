import React, { useState } from "react";
import "./styles/Login.css";
import {
  View,
  Text,
  HeaderText,
  TextInput,
  Button,
  Link,
} from "../../components";

function Login() {
  // State variables for user email and password
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Function to update the user's email input
  const _updateEmail = (email) => {
    setUserEmail(email.target.value || "");
  };

  // Function to update the user's password input
  const _updatePassword = (password) => {
    setUserPassword(password.target.value || "");
  };

  return (
    <View className="account-pages _lg_container">
      <View className="container _container">
        <View className="justify-content-center row h-full">
          <View className="col-md-8 col-lg-6 col-xl-5 login_c">
            {/* Welcome message */}
            <View className="text-center">
              <HeaderText text="Welcome Back!" level={3} className="lg_title" />
              <Text text="Login to continue to Chax" />
            </View>
            {/* Login form */}
            <View className="card white_container">
              <View className="p-4 card-body">
                <View className="p-3">
                  {/* Email input field */}
                  <TextInput
                    placeholder="Enter your email"
                    value={userEmail}
                    onChange={_updateEmail}
                  />
                  {/* Password input field */}
                  <TextInput
                    placeholder="Enter your password"
                    type="password"
                    value={userPassword}
                    onChange={_updatePassword}
                  />
                  <Text text="Forgot password?" className="_lg_forgot_lk" />
                  {/* Login button */}
                  <Button
                    className="lg_btn"
                    disabled={!userEmail || !userPassword}
                  >
                    <Text text="Login" />
                  </Button>
                </View>
              </View>
            </View>
            {/* Additional text */}
            <View className="text-center _lg_no_ac_c">
              <Text text={`Don't have an account? `} />{" "}
              <Text text="Create one" className="lg_cre_btn" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;
