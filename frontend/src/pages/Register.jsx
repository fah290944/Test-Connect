import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import { signupService } from "../services/AuthService";
import { useForm } from 'react-hook-form';
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [openPopupSignup, setOpenPopupSignup] = useState(false);
  const [messageErr, setMessageErr] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password, firstName, lastName, phone } = data;
    signupService(email, password, firstName, lastName, phone)
      .then((res) => {
        setOpenPopupSignup(true);
      })
      .catch((err) => {
        setMessageErr(err?.message);
      });
  };

  const handleClose = () => {
    setOpenPopupSignup(false);
    navigate("/login");
  };


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="register h-max-[100%] h-[100vh] flex justify-center items-center ">
      <div className="bg-[#fff] grid grid-row gap-[20px] sm:w-[500px] w-min-[500px] h-fit px-[25px] py-[20px] sm:py-[45px] sm:px-[45px] text-blue-600 shadow-box rounded-md">
        <h className="pt-[25px] text-[#000] font-[100] text-[24px] sm:text-[34px] ">Sign Up</h>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-row gap-[25px] pt-[30px]">
          <TextField
            label="First Name"
            variant="standard"
            required
            {...register("firstName", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "First name must contain only letters"
              }
            })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
            label="Last Name"
            variant="standard"
            required
            {...register("lastName", {
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "First name must contain only letters"
              }
            })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
          <TextField
            label="Email"
            variant="standard"
            required
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format"
              }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            variant="standard"
            required
            type={showPassword ? 'text' : 'password'}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" }
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Phone"
            variant="standard"
            required
            {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
          <br></br>
          <div className="flex justify-between">
            <Button type="submit" className="btn-sign" sx={{ height: "fit-content" }}>Sign up</Button>
            <Button className="btn-home" component={Link} to="/" sx={{ height: "fit-content" }}>Home</Button>
          </div>
        </form>
        <Popup open={openPopupSignup} handleClose={handleClose}></Popup>
      </div>
    </div>
  )
}

export default Register;
