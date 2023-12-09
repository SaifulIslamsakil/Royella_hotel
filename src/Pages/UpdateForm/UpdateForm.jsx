import axios from "axios";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";


const UpdateForm = () => {
    const {user} = useContext(AuthContext)
    const ida = useParams()
    const datas = useLoaderData()
    const find = datas.find(data => data._id === ida.id)
    const {_id,  price } = find
    
    const handleUpdateInfo =(event)=>{
        event.preventDefault()
        const form = event.target;
        const userName = form.Name.value;
        const userEmail = form.Email.value;
        const userAddress = form.Address.value;
        const nid = form.NID.value;
        const price = form.Price.value
        const CheckIn = form.CheckIN.value;
        const CheckOut = form.CheckOut.value;
        form.reset()
        const info = {
            userName,
            userEmail,
            userAddress,
            nid,
            price,
            CheckIn,
            CheckOut
        }

        axios.put(`https://royella-hotel-server.vercel.app/api/v1/update/${_id}`,info)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: "Good job!",
                    text: "You infomaction successfuly update!",
                    icon: "success"
                  });
            }
        })
    }
    
    return (
        <div className="min-h-screen p-6 bg-gray-100 items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
            <div>
                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div className="text-gray-600">
                            <p className="text-2xl font-bold">Additional INFO</p>
                            <p>Please fill out all the fields.</p>
                        </div>

                        <div className="lg:col-span-2">

                            <form onSubmit={handleUpdateInfo} >

                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5 ">
                                        <label >Name</label>
                                        <input type="text" name="Name" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label >Email</label>
                                        <input type="text" name="Email" defaultValue={user.email}readOnly id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>
                                    <div className="md:col-span-5">
                                        <label >Short Address</label>
                                        <input type="text" name="Address" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>

                                    <div className="md:col-span-3">
                                        <label >NID NO / Passpors NO</label>
                                        <input type="text" name="NID" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label>Price</label>
                                        <input type="text" name="Price" defaultValue={price} readOnly id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label>Check IN Date</label>
                                        <input type="date" name="CheckIN" data-date-format="DD MMMM YYYY" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />


                                    </div>

                                    <div className="md:col-span-2">
                                        <label >Check Out Date</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input type="date"  name="CheckOut" id="" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />

                                        </div>
                                    </div>



                                    <div className="md:col-span-5">
                                        <div className="inline-flex items-center">
                                            <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                            <label className="ml-2">My billing address is different than above.</label>
                                        </div>
                                    </div>
                                    <div className="md:col-span-5 text-right">
                                        <div className="inline-flex items-end">

                                            <input type="submit" value="Apply Now" id="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UpdateForm;