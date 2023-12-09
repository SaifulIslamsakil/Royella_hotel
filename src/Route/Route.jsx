import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layOut/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Rooms from "../Pages/Rooms/Rooms";
import MyBooking from "../Pages/MyBooking/MyBooking";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import RoomDetalis from "../Pages/RoomDetalis/RoomDetalis";
import UserInfo from "../Pages/UserInfo/UserInfo";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateForm from "../Pages/UpdateForm/UpdateForm";
import Erro from "../Pages/Error/Erro";
// import Contact from "../Pages/Contact/Contact";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Erro></Erro>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"About",
                element:<About></About>
            },
            {
                path:"Rooms",
                element:<Rooms></Rooms>,
                loader: ()=> fetch("https://royella-hotel-server.vercel.app/api/v1/Room-Card-Data")
            },
            {
                path:"RoomDetalis/:id",
                element:<PrivateRoute><RoomDetalis></RoomDetalis></PrivateRoute>,
                loader: ()=> fetch(`https://royella-hotel-server.vercel.app/api/v1/Room-Card-Data`)
            },
            {
                path:"UserInfo/:id",
                element:<UserInfo></UserInfo>,
                loader: ()=> fetch(`https://royella-hotel-server.vercel.app/api/v1/Room-Card-Data`)
            },
            {
                path:"My-Booking",
                element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
            },
            {
                path:"Register",
                element:<Register></Register>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"updateform/:id",
                element:<PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>,
                loader:()=>fetch("https://royella-hotel-server.vercel.app/api/v1/myBooking")
            },
           
        ]
    }
])

export default Router