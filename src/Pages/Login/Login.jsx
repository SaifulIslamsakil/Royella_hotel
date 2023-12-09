import { useContext, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const { userLogin } = useContext(AuthContext)
    const [messges, setMessges] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    const hanelUserLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogin(email, password)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You your accout successfuly!",
                    icon: "success"
                  });
                  {
                    location.state? navigate(location.state) :navigate("/")
                }
            })
            
            .cecth(error => {
                setMessges("please input valid email and password")
            })

    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col mt-12 p-0 lg:flex-row-reverse w-full h-[90vh]" style={{
                backgroundImage: "url(https://i.ibb.co/q7whdzp/img-hotels-country-inn-hotel.jpg)",
                backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
            }}>

                <div className=" h-full w-full m-0" style={{ backgroundColor: "rgba(11, 11, 11, 0.60)" }}>
                    <h1 className="text-center mt-5 text-white text-4xl font-bold">Wellcome</h1>
                    <p className="text-center text-5xl text-yellow-600 font-bold">Hottel Royella </p>
                    <div className="card mx-auto  mt-3 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <h3 className=" text-center font-bold text-3xl mt-2">Please Login</h3>
                        <form className="card-body " onSubmit={hanelUserLogin}>
                          
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
                            <p>Your need an account <span className=" text-red-500 hover:underline"><Link to="/Register">Please Registar</Link></span></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">LOGIN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;