import { useEffect, useState } from "react";


const RoomSection = () => {
    const [RoomsData, setRoomData] = useState([])
    useEffect(() => {
        fetch("https://royella-hotel-server.vercel.app/api/v1/Room-Card-Data")
            .then(res => res.json())
            .then(data => setRoomData(data))
    }, [])
    console.log(RoomsData)
    return (
        <div className="bg-gray-200 lg:flex justify-center items-center flex-col hidden  mb-20">
            <div className="lg:w-3/4 mx-auto  bg-black relative border-t-8 -top-14 p-10  border-t-yellow-600 grid grid-cols-2 lg:grid-cols-5 text-white " >
                <div className="border-r-2 border-yellow-600 p-5">
                    <p >Check In</p>
                    <input className="bg-black text-white" type="date" name="" id="" />
                </div>
                <div className="border-r-2 border-yellow-600 p-5">
                    <p >Check out</p>
                    <input className="bg-black text-white" type="date" name="" id="" />
                </div>
                <div className="border-r-2 border-yellow-600 p-5">
                    <p >Rooms</p>
                    <select name="" id="" className="bg-black text-white">
                        <option value="">01 Rooms</option>
                        <option value="">02 Rooms</option>
                        <option value="">03 Rooms</option>
                        <option value="">04 Rooms</option>
                    </select>
                </div>
                <div className="p-5">
                    <p >Guests</p>
                    <select name="" id="" className="bg-black text-white">
                        <option value="">02 Adult, 2 Child</option>
                        <option value="">02 Adult, 1 Child</option>
                        <option value="">03 Adult, 4 Child</option>
                        <option value="">04 Adult, 3 Child</option>
                    </select>
                </div>
                <div className=" flex justify-center items-center mb-3">
                    <button className=" py-4 px-7 rounded-lg text-center bg-yellow-600 text-white">Book Now</button>
                </div>
            </div>


            <div>
                <div className=" text-center mt-5 p-6 space-y-3">
                    <img className="w-20 mx-auto" src="https://i.ibb.co/Q9btgyq/section-shape1.png" alt="" />
                    <h2 className="text-4xl font-bold">ROYELLA’S ROOMS & SUITES</h2>
                    <p className="lg:w-[700px] mx-auto text-gray-600 text-xl text-center">Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling</p>
                </div>

                <div className="max-w-7xl p6 gap-5 mx-auto my-20 grid lg:grid-cols-3">
                    {RoomsData.map(Room => <div key={Room._id} className="card relative bg-white shadow-xl">
                        <figure><img src={Room.img} className="w-full h-80" alt="Shoes" />
                        <h2 className=" absolute bg-yellow-600 py-1 px-7 text-white font-semibold text-xl rounded-lg top-5 right-3">${Room.price} | {Room.shpeet}</h2>
                        <button className=" text-center bg-yellow-600 text-white py-4 px-7 absolute left-0 top-[265px]">View Details</button>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-yellow-600">{Room.name}</h2>
                            <p className="text-3xl font-semibold">{Room.RoomTitle}</p>
                            <p className="text-xl m-3 ">{Room.RoomSizee} SQ.FT/Rooms</p>
                            <hr />

                            <div className=" flex justify-between mt-4">
                                <img className="w-7" src="https://i.ibb.co/B4MBPwP/feature-1.png" alt="" />
                                <p className=" text-xl ml-4">{Room.bard}</p>

                                <div className="rating rating-md ">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default RoomSection;