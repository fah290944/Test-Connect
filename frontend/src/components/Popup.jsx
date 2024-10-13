import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import React from "react";

function Popup({open, handleClose = () =>{}}) {

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent >
                Sign up completed successfully!
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popup 