import { useContext, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const { userRegester } = useContext(AuthContext)
    const [messges, setMessges] = useState(null)
    const navigate = useNavigate()
    
    const handelnewUser = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        userRegester(email, password)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You your accout successfuly!",
                    icon: "success"
                  });
                  navigate("/")

            })
            .catch(erro => {
               setMessges("Your email all rady used ")
            })
            
    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col mt-12 p-0 lg:flex-row-reverse w-full h-[90vh]" style={{backgroundImage:"url(https://i.ibb.co/q7whdzp/img-hotels-country-inn-hotel.jpg)", 
            backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}>

                <div className=" h-full w-full m-0"  style={{ backgroundColor: "rgba(11, 11, 11, 0.60)" }}>
                <h1 className="text-center mt-5 text-white text-4xl font-bold">Wellcome</h1> 
                <p className="text-center text-5xl text-yellow-600 font-bold">Hottel Royella </p>
                <div className="card mx-auto  mt-3 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <h3 className=" text-center font-bold text-3xl mt-2">Please Registar</h3>
                    <form className="card-body " onSubmit={handelnewUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <p className=" text-red-500 text-xl">{messges}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p>You have an account <span className=" text-red-500 hover:underline"><Link to="/login">Please login</Link></span></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
         </div>
    );
};

export default Register;