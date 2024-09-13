import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MyForm } from "./Theme";

const schema = yup.object({
  userName: yup.string().required(),
  password: yup.string().required(),
});
function Form({ setUserName, username }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const name = data.userName;
    setUserName(name);
    setValue("userName", "");
    setValue("password", "");
  }

  return (
    username || (
      <MyForm onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 style={{ color: "white" }}>LOGIN</h1>
        <input
          style={{ position: "relative" }}
          id="username"
          {...register("userName")}
          placeholder="Username"
        />
        {errors.userName && (
          <p style={{ color: "red" }}>{errors.userName.message}</p>
        )}
        <input
          id="password"
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <button type="submit" id="submit">
          SIGN IN
        </button>
      </MyForm>
    )
  );
}

export default Form;
