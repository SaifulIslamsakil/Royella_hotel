import { Link } from "react-router-dom";


const RoomCard = ({ Room }) => {
    return (

        <div className="card relative bg-white shadow-xl">
            <figure><img src={Room?.img} className="w-full h-80" alt="Shoes" />
                <h2 className=" absolute bg-yellow-600 py-1 px-7 text-white font-semibold text-xl rounded-lg top-5 right-3">${Room.price} | {Room.shpeet}</h2>
                <Link to={`/RoomDetalis/${Room?._id}`}> <button className=" text-center bg-yellow-600 text-white py-4 px-7 absolute left-0 top-[265px]">View Details</button></Link>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-yellow-600">{Room?.name}</h2>
                <p className="text-3xl font-semibold">{Room?.RoomTitle}</p>
                <p className="text-xl m-3 ">{Room?.RoomSizee} SQ.FT/Rooms</p>
                <hr />

                <div className=" flex justify-between mt-4">
                    <img className="w-7" src="https://i.ibb.co/B4MBPwP/feature-1.png" alt="" />
                    <p className=" text-xl ml-4">{Room?.bard}</p>

                    <div className="rating rating-md ">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                </div>
            </div>
        </div>

    )
}


export default RoomCard;