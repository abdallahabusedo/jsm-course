"use client";
import AuthForm from "@/components/forms/AuthForm";
import { signUpWithCredentials } from "@/lib/actions/auth.action";
import { RegisterSchema } from "@/lib/validations";
import React from "react";

const Register = () => {
  return (
    <AuthForm
      formType="REGISTER"
      schema={RegisterSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={signUpWithCredentials}
    />
  );
};

export default Register;
