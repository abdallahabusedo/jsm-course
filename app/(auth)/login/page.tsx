"use client";
import AuthForm from "@/components/forms/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth.action";
import { LoginSchema } from "@/lib/validations";
import React from "react";

const Login = () => {
  return (
    <AuthForm
      formType="LOGIN"
      schema={LoginSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={signInWithCredentials}
    />
  );
};

export default Login;
