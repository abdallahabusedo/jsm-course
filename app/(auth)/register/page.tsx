"use client";
import AuthForm from "@/components/forms/AuthForm";
import { RegisterSchema } from "@/lib/validations";
import React from "react";

const Register = () => {
  return (
    <AuthForm
      formType="REGISTER"
      schema={RegisterSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default Register;
