import { Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Profile() {

    const {user,setUser} = useAuth()

    const handleLogout = () => {
        localStorage.clear()
        setUser(null)
    };

    return (
        <div className="bg-profile">
            <div className="item-profile text-[16px]">{user?.firstName} {user?.lastName}</div>
            <div onClick={handleLogout} className="item-profile">ออกจากระบบ</div>
        </div>
    )
}

export default Profile 