import { useEffect } from "react";


const PrivateSupplierManagerStaff = ({history})=>{

    useEffect(()=>{
        if(!localStorage.getItem("authTokenStaff")){  //push a user if he already logged in
            history.push("/staff-supplierM");
        }

    } , [history])  //dependency array

    const logoutHandler = ()=>{
        localStorage.removeItem("authTokenStaff");
        history.push("/staff-login-supplierM");
    }

    return(

            <div style={{backgroundColor:"green" , color : "white"}}>
                <img src="thaulla1.png" style={{width:"60px"}}/>
                <button onClick = {logoutHandler} style={{float:"right"}} className="btn btn-warning"><i class="fa fa-reply-all" aria-hidden="true"></i> Logout</button>
                <marquee width="100%" direction="left" >
                <i class="fa fa-heartbeat" aria-hidden="true"></i> Welcome to the Supplier Management System
                </marquee>
            </div>

    )

}

export default PrivateSupplierManagerStaff;
