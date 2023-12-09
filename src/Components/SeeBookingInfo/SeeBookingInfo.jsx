import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";



const SeeBookingInfo = ({ booking }) => {
    const {_id, img, userName, userAddress, CheckIn, RoomTitle, CheckOut, price } = booking
   
    // console.log(carrentDate == "11/09/2023")
    // console.log(carrentDate)
    

    const handelCancelBooking = () => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`https://royella-hotel-server.vercel.app/api/v1/delete/${_id}`)
                    .then(res=>{
                        console.log(res.data)
                    })
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        
    }

    return (
        <tr >
            <th>
                <label>
                    <button onClick={handelCancelBooking} className="py-2 px-4 bg-yellow-600 text-white text-center rounded-lg hover:border hover:border-yellow-600 hover:text-yellow-600 hover:bg-white">Cancel booking</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{RoomTitle}</div>
                        <div className="text-sm opacity-50">{userAddress}</div>
                    </div>
                </div>
            </td>
            <td>
                {CheckIn}
                <br /> 
                <p>to</p>
                <span >{CheckOut}</span>
            </td>
            <td>{userName}</td>
            <td>${price}</td>
            <th>
                <Link to={`/updateform/${_id}`}><button className="py-2 px-4 bg-yellow-600 text-white text-center rounded-lg hover:border hover:border-yellow-600 hover:text-yellow-600 hover:bg-white">update info</button></Link>
            </th>
        </tr>
    );
};

export default SeeBookingInfo;