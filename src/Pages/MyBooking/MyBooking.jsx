import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import { useState, useEffect } from "react";
import SeeBookingInfo from "../../Components/SeeBookingInfo/SeeBookingInfo";




const MyBooking = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`https://royella-hotel-server.vercel.app/api/v1/MyBooking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user])
    console.log(bookings)

    return (
        <div className="space-y-5">
            <div className="carousel-item relative h-[80vh] w-full" style={{ backgroundImage: `url(https://i.ibb.co/8K8sqMY/featured-image-bedroom-decor-jpeg.webp)`, backgroundPosition: "center", backgroundSize: "cover" }}>

                <div className="w-full flex flex-col justify-center items-center text-white  text-center space-y-4" style={{ backgroundColor: "rgba(11, 11, 11, 0.60)" }}>

                    <div className="rating rating-md space-x-4">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h2 className="text-6xl font-bold">My Booking</h2>
                    <p><span className=" text-yellow-600">HOME </span>/ ROOMS & SUTTES</p>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>User Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        bookings.map(booking => <SeeBookingInfo
                            key={booking._id}
                            booking={booking}
                        ></SeeBookingInfo>)
                       }

                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default MyBooking;