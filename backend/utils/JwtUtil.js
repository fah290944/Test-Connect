const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtGenerate = (user) => {
    const accessToken = jwt.sign(
      { email: user.email , firstName: user.firstName, lastName: user.lastName, phone: user.phone,id: user.id  },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10s", algorithm: "HS256" }
    )
  
    return accessToken
  }
  
  const jwtRefreshTokenGenerate = (user) => {
    const refreshToken = jwt.sign(
      { email: user.email , firstName: user.firstName, lastName: user.lastName, phone: user.phone,id: user.id  },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d", algorithm: "HS256" }
    )
  
    return refreshToken
  }

  module.exports = {
    jwtGenerate,
    jwtRefreshTokenGenerate
  };