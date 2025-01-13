"use client";
import AuthForm from "@/components/forms/AuthForm";
import { LoginSchema } from "@/lib/validations";
import React from "react";

const Login = () => {
  return (
    <AuthForm
      formType="LOGIN"
      schema={LoginSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default Login;
