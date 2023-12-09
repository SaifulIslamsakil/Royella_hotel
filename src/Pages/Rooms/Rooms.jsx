import { Link, useLoaderData } from "react-router-dom";
import img1 from "../../assets/Chateau-Monfort-Milan.jpg"
import { useState } from "react";
import RoomCard from "../../Components/RoomCard/RoomCard";
const Rooms = () => {
    const [sort,setSort]= useState(false)
    const [HightPrices , setHightPrice] = useState(null)

    const RoomCardData = useLoaderData()
    console.log(RoomCardData)

    const handelLowToHight = ()=>{
        const numAscending = [...RoomCardData].sort((a, b) => a?.price - b?.price);
        setHightPrice(numAscending)
       setSort(true)
    }
   const handelHightTolow =() =>{

    const numDescending = [...RoomCardData].sort((a, b) => b.price - a.price);
        setHightPrice(numDescending)
       setSort(true)
   }

    return (
        <div>
            <div id="slide3" className="carousel-item relative h-[80vh] w-full" style={{ backgroundImage: `url(${img1})`, backgroundPosition: "center", backgroundSize: "cover" }}>

                <div className="w-full flex flex-col justify-center items-center text-white  text-center space-y-4" style={{ backgroundColor: "rgba(11, 11, 11, 0.60)" }}>

                    <div className="rating rating-md space-x-4">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h2 className="text-6xl font-bold">ROOMS & SUTTES</h2>
                    <p><span className=" text-yellow-600">HOME </span>/ ROOMS & SUTTES</p>
                </div>
            </div>
            <div className="bg-slate-300 pt-20 space-y-5">
                <div>
                    <img className="w-20 mx-auto" src="https://i.ibb.co/Q9btgyq/section-shape1.png" alt="" />
                    <h3 className="text-center  text-4xl font-bold ">ROYELLA’S ROOMS & SUITES</h3>
                    <p className="text-center text-xl mx-auto md:w-[700px]">Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling</p>
                </div>


                <div className=" p-10 max-w-7xl mx-auto space-y-4 ">
                    <div className=" space-y-5 space-x-3">
                    <button  onClick={handelLowToHight}  className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white rounded-lg px-5 py-2 font-bold text-center">Low price</button>
                    <button onClick={handelHightTolow} className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white rounded-lg px-5 py-2 font-bold text-center">Hight price</button>
                    </div>
                    <div className=" mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {sort? HightPrices?.map(Room => <RoomCard
                        key={Room._id}
                        Room={Room}
                        ></RoomCard>) : RoomCardData?.map(Room => <RoomCard
                            key={Room?._id}
                            Room={Room}
                            ></RoomCard>)}
                    </div>
                </div>
                </div>
            </div>

   

    );
};

export default Rooms;