import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function NotFound() {

    return (
        <div className="h-[100vh] text-[40px] font-[600] flex flex-col justify-center items-center">
            <div className="pb-[10px]">Page Not Found</div>
            <Button  variant="outlined"  component={Link} to="/">Home</Button>
        </div>
    )
}

export default NotFound 