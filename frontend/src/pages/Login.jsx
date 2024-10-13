import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from "react";
import { loginService } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [messageErr, setMessageErr] = useState('');
  const navigate = useNavigate();
  const {user,setUser} = useAuth()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const onClickLogin = () => {
    loginService(email,password).then((res) => {
      console.log("res ==>", res?.data)
      const { accessToken, refreshToken } = res?.data;
      setUser(res?.data)
      localStorage.setItem('user', JSON.stringify(res?.data));
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate("/");
    }).catch((err) =>{
      setMessageErr(err?.message)
    })
  };


  return (
    <div className="login h-max-[100%] h-[100vh] flex justify-center items-center">
      <div className="bg-[#fff] grid row gap-[20px] sm:w-[500px] w-min-[500px] h-fit px-[25px] py-[20px] sm:py-[45px] sm:px-[45px] text-blue-600 shadow-box rounded-md">
        <h1 className="pt-[25px] text-[#000] font-[100] text-[24px] sm:text-[34px] ">WELCOME</h1>

        <div className="grid row gap-[30px] ">
          <TextField
            id="standard-email-flexible"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl  variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </div>
        <div className="w-full">
          <Button className="btn-login" onClick={onClickLogin} variant="contained" sx={{width: '100%',height: "fit-content", paddingBlock: "8px"}} >Login</Button>
          <div className="text-[#ff0000] pt-[10px]">{messageErr}</div>
        </div>
        <br></br>
        <div className="flex items-center flex-col">
          <div className="forgot-password h-fit">Forgot Password</div>
          <Button component={Link} to="/register" sx={{height: "fit-content"}}>Sign up</Button>
        </div>
      </div>
    </div>
  )
}

export default Login