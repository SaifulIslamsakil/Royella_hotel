import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";


const Navbar = () => {
    const {userLogOut , user}= useContext(AuthContext)
    const hanelLogOut = ()=>{
        userLogOut()
        .then(res =>{
            Swal.fire({
                title: "Good job!",
                text: "You your accout successfuly!",
                icon: "success"
              });
        })
        .cetch(erro => {
            console.log(erro)
        })
    }
    const manu = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-yellow-600 text-white  " : "hover:text-yellow-600"
            }>
                Home

            </NavLink>
        </li>
        <li>
            <NavLink to="About" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-yellow-600 text-white   " : "hover:text-yellow-600"
            }>
                About

            </NavLink>
        </li>
        <li>
            <NavLink to="Rooms" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-yellow-600 text-white  " : "hover:text-yellow-600"
            }>
                Rooms

            </NavLink>
        </li>
        <li>
            <NavLink to="My-Booking" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-yellow-600 text-white  " : "hover:text-yellow-600"
            }>
                My-Booking

            </NavLink>
        </li>
        {user? "": <li>
            <NavLink to="Register" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-yellow-600 text-white  " : "hover:text-yellow-600"
            }>
                Register

            </NavLink>
        </li>}
       
        {user?     
        <li>
            <NavLink onClick={hanelLogOut} to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-yellow-600 text-white  " : "hover:text-yellow-600"
            }>
                logOut

            </NavLink>
        </li>:<li>
            <NavLink to="login" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-yellow-600 text-white  " : "hover:text-yellow-600"
            }>
                login

            </NavLink>
        </li>
         }
    
    </>
    return (
        <div className="navbar py-5 md:px-10 text-white z-10  " style={{backgroundColor:"rgba(11, 11, 11, 0.70)"}}>
            <div className="navbar-start max-w-7xl mx-auto ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {manu}
                    </ul>
                </div>
               <img src="https://i.ibb.co/PQxygjP/logo-1.png" className="w-52" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-sm font-semibold ">
                    {manu}
                </ul>
            </div>
            <div className="navbar-end hidden lg:block">
                <button className=" py-3 px-5 bg-yellow-600 text-white text-center font-semibold rounded-lg">BOOKING ONLINE</button>
            </div>
        </div>
    );
};

export default Navbar;