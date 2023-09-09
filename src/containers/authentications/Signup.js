import React, { useState } from "react";
import "./styles/Signup.css"; // Create a new CSS file for your signup screen styles
import {
  View,
  Text,
  HeaderText,
  TextInput,
  Button,
  Link,
} from "../../components";

function Signup() {
  // State variables for user username, email, password, and confirm password
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to update the user's username input
  const _updateUsername = (username) => {
    setUsername(username.target.value || "");
  };

  // Function to update the user's email input
  const _updateEmail = (email) => {
    setUserEmail(email.target.value || "");
  };

  // Function to update the user's password input
  const _updatePassword = (password) => {
    setUserPassword(password.target.value || "");
  };

  // Function to update the user's confirm password input
  const _updateConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword.target.value || "");
  };

  // Function to handle the signup process
  const handleSignup = () => {
    // Add your signup logic here, e.g., sending data to a server
    console.log("Signing up...");
  };

  return (
    <View className="account-pages _lg_container">
      <View className="container _container">
        <View className="justify-content-center row h-full">
          <View className="col-md-8 col-lg-6 col-xl-5 signup_c">
            {/* Update the class name */}
            {/* Welcome message */}
            <View className="text-center">
              <HeaderText
                text="Create an Account!"
                level={3}
                className="lg_title"
              />{" "}
              {/* Update the title */}
              <Text text="Sign up to join Chax" />
            </View>
            {/* Signup form */}
            <View className="card white_container">
              <View className="p-4 card-body">
                <View className="p-3">
                  {/* Username input field */}
                  <TextInput
                    placeholder="Username"
                    value={username}
                    onChange={_updateUsername}
                  />
                  {/* Email input field */}
                  <TextInput
                    placeholder="Email"
                    value={userEmail}
                    onChange={_updateEmail}
                  />
                  {/* Password input field */}
                  <TextInput
                    placeholder="Password"
                    type="password"
                    value={userPassword}
                    onChange={_updatePassword}
                  />
                  {/* Confirm Password input field */}
                  <TextInput
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={_updateConfirmPassword}
                  />
                  {/* Signup button */}
                  <Button
                    className="lg_btn" // You can customize the class name
                    disabled={
                      !username ||
                      !userEmail ||
                      !userPassword ||
                      userPassword !== confirmPassword
                    }
                    onClick={handleSignup}
                  >
                    <Text text="Sign Up" />
                  </Button>
                </View>
              </View>
            </View>
            {/* Additional text */}
            <View className="text-center _lg_no_ac_c">
              <Text text={`Already have an account? `} />{" "}
              <Text text="Login" className="lg_cre_btn" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Signup;
