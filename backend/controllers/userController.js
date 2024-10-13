const bcrypt = require("bcrypt");
const connectAPI = require("../config/db");
const jwt = require("jsonwebtoken");
const { jwtGenerate, jwtRefreshTokenGenerate } = require("../utils/JwtUtil");
require("dotenv").config();

const saltRounds = 10;

const registerUser = (req, res) => {
    const { email, password, firstName, lastName, phone } = req.body;
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

    if (!email || !password || !firstName || !lastName || !phone) {
        res.status(400).json({ message: "Missing Parameter" });
        return;
    }
    if (!emailRegex.test(email)) {
        res.status(400).json({ message: "Invalid Email" });
        return;
    }
    if (password.length < 6) {
        res
            .status(400)
            .json({ message: "Password must be at least 6 characters long" });
        return;
    }
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        res.status(400).json({ message: "Name must contain only letters" });
        return;
    }
    if (!phoneRegex.test(phone)) {
        res.status(400).json({ message: "Phone number must be 10 digits" });
        return;
    }

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            const sql =
                "INSERT INTO user (email, password, first_name, last_name, phone) VALUES (?,?,?,?,?)";
            connectAPI.execute(
                sql,
                [email, hash, firstName, lastName, phone],
                (err, result) => {
                    if (err) {
                        res.status(500).json({ message: err.message });
                        return;
                    }
                    res.status(200).json({
                        message: "Insert Data Successfully",
                        data: { email, firstName, lastName, phone },
                    });
                }
            );
        });
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Missing Parameter" });
        return;
    }

    const sql = "SELECT * FROM user WHERE email = ?";
    const sqlUpdateToken = "UPDATE user SET token = ? WHERE email = ?";

    connectAPI.execute(sql, [email], (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }

        if (result.length < 1) {
            res.status(400).json({ message: "User not Found" });
            return;
        }

        bcrypt.compare(password, result[0].password, (err, isMatch) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }
            if (isMatch) {
                const access_token = jwtGenerate(result[0]);
                const refresh_token = jwtRefreshTokenGenerate(result[0]);

                connectAPI.execute(sqlUpdateToken, [refresh_token, email], (errUpdate, resultUpdate) => {
                    if (errUpdate) {
                        res.status(500).json({ message: errUpdate.message });
                        return;
                    }
                    res.status(200).json({
                        message: "Login Success",
                        data: {
                            email: result[0].email,
                            firstName: result[0].first_name,
                            lastName: result[0].last_name,
                            phone: result[0].phone,
                            accessToken: access_token,
                            refreshToken: refresh_token,
                        },
                    });
                })

            } else {
                res.status(400).json({ message: "Email or Password not Correct" });
            }
        });
    });
};

const getUsers = (req, res) => {
    const sql = "SELECT * FROM user";
    connectAPI.execute(sql, (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }
        res.status(200).json({
            message: "Data retrieved successfully",
            data: result,
        });
    });
};

const refreshToken = (req, res) => {
    const {token} = req.body

    if(!token){
        res.status(400).json({ message: "Missing Parameter" });
        return;
    }


    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Expired" })
            return;
        }
        const sql = "SELECT email, first_name, last_name, phone FROM user WHERE token = ?";
        connectAPI.execute(sql, [token],(err, result) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }
            if(result.length){
                const access_token = jwtGenerate(result[0]);
                const refresh_token = jwtRefreshTokenGenerate(result[0]);
                const sqlUpdateToken = "UPDATE user SET token = ? WHERE email = ?";

                connectAPI.execute(sqlUpdateToken, [refresh_token, result[0].email], (errUpdate, resultUpdate) => {
                    if (errUpdate) {
                        res.status(500).json({ message: errUpdate.message });
                        return;
                    }
                    res.status(200).json({
                        data: {
                            accessToken: access_token,
                            refreshToken: refresh_token,
                        },
                    });
                    return;
                })
            }else{
                res.status(401).json({ message: "Expired" })
                return;
            }
           
            
        });
    })
    

}

module.exports = {
    registerUser,
    loginUser,
    getUsers,
    refreshToken
};
