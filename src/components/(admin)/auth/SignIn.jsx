import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSignInMutation } from "../../../redux/services/authApi";

const SignIn = () => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [signIn] = useSignInMutation();

  const onSubmit = async (data) => {
    const result = await signIn(data);
    localStorage.setItem("token", result.data.token);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Masukkan email"
            className=""
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Masukkan password"
            className=""
          />

          <button type="submit">Sign In</button>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default SignIn;
