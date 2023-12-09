
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const RoomDetalis = () => {
    const Datas = useLoaderData()
    const ids = useParams()
    const find = Datas.find(Data => Data._id === ids.id)
    const [Avlroms,setAvalroom]= useState(5)
    const count = ()=>{
        setAvalroom(Avlroms-1)
    }
    console.log(Avlroms)

 
    const {_id, RoomTitle, name, bard, price, shpeet, img, RoomSizee, } = find
    return (
        <div className="space-y-20">
            <div id="slide3" className="carousel-item relative h-[80vh] w-full" style={{ backgroundImage: `url(https://i.ibb.co/Kybptx9/Modern-Bedroom-Design.jpg)`, backgroundPosition: "center", backgroundSize: "cover" }}>

                <div className="w-full flex flex-col justify-center items-center text-white  text-center space-y-4" style={{ backgroundColor: "rgba(11, 11, 11, 0.60)" }}>


                    <div className="rating rating-md space-x-4">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h2 className="text-6xl font-bold">ROOM DETAILS</h2>
                    <p><span className=" text-yellow-600">HOME </span>/ ROOMS & SUTTES</p>
                </div>
            </div>

            <div className="flex max-w-7xl  mx-auto gap-5 p-3 m">
                <img className="w-3/5  mx-auto border-[20px] border-gray-200" src={img} alt="" />

                <div className="bg-gray-200  px-20 py-9 space-y-4">
                    <h1 className="text-4xl font-semibold mb-5">Booking</h1>
                    <div className="bg-white px-14 py-5 rounded-lg text-xl ">
                        <p>Check In -04 Oct, 2023</p>
                    </div>
                    <div className="bg-white text-xl px-10 py-5 rounded-lg">
                        <p>Check Out -10 Oct, 2023</p>
                    </div>
                    <div className="bg-white text-xl px-14 py-5 rounded-lg">
                        <p>Adult -02</p>
                    </div>
                    <div className="bg-white text-xl px-14 py-5 rounded-lg">
                        <p>Childreen -02</p>
                    </div>

                </div>
            </div>
            <div className="flex max-w-7xl space-y-10 mx-auto gap-10 p-3 m">
                <div className="space-y-4 text-xl flex-1 ">
                    <h3 className=" text-yellow-600 font-semibold">{name}</h3>
                    <h2 className="text-4xl font-bold">{RoomTitle}</h2>
                    <p className="text-justify">Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe extend state of the art benefits via web-enabled value. Completely fabricate extensible infomediaries rather than reliable e-services. Dramatically whiteboard alternative</p>
                    <p>Conveniently fashion pandemic potentialities for team driven technologies. Proactively orchestrate robust systems rather than user-centric vortals. Distinctively seize top-line e-commerce with premier intellectual capital. Efficiently strategize goal-oriented</p>

                    <div className="flex gap-20 ">
                        <div className="">
                            <h3 className="text-4xl font-bold text-yellow-600">Check In</h3>
                            <ul className="list-disc pt-5 space-y-2">
                                <li>Check-in from 9:00 AM - anytime</li>
                                <li>
                                    Early check-in subject to availability
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-yellow-600">Check Out</h3>
                            <ul className="list-disc pt-5 space-y-2">
                                <li>Check-out before noon</li>
                                <li>
                                    Check-out from 9:00 AM - anytime
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h4 className="text-4xl font-bold">House Rules</h4>
                        <p>Professionally deliver fully researched scenarios with turnkey communities. Competently unleash empowered applications without seamless data. Uniquely underwhelm quality outsourcing before transparent relationships. Efficiently enhance diverse relationships whereas leveraged</p>

                    </div>
                    <div className="space-y-5">
                        <h3 className="font-bold text-4xl">Childreen & Extra Beds</h3>
                        <p>Applications without seamless data. Uniquely underwhelm quality outsourcing before transparent relationships. Efficiently enhance diverse relationships whereas leveraged new house cafe.</p>
                        <ul className="list-disc space-y-2">
                            <li>Quickly generate bricks-and-clicks</li>
                            <li>Interactively cultivate visionary platforms</li>
                            <li>Energistically envisioneer resource</li>
                            <li>Uniquely restore turnkey paradigms</li>
                        </ul>
                    </div>
                </div>
                <div className=" w-1/3 gap-5 space-y-4 ml-4">

                    <h3 className=" text-2xl font-bold">Amenities</h3>
                    <div className=" flex gap-3">
                        <img className="w-9" src="https://i.ibb.co/B4MBPwP/feature-1.png" alt="" />
                        <h5 className="text-xl font-semibold">2 - 5 Persons</h5>
                    </div>
                    <hr />
                    <div className=" flex gap-3">
                        <img className="w-9" src="https://i.ibb.co/B4MBPwP/feature-1.png" alt="" />
                        <h5 className="text-xl font-semibold">2 - 5 Persons</h5>
                    </div>
                    <hr />
                    <div className=" flex gap-3">
                        <img className="w-9" src="https://i.ibb.co/B4MBPwP/feature-1.png" alt="" />
                        <h5 className="text-xl font-semibold">2 - 5 Persons</h5>
                    </div>
                    <hr />
                    <div className=" flex gap-3">
                        <img className="w-9" src="https://i.ibb.co/B4MBPwP/feature-1.png" alt="" />
                        <h5 className="text-xl font-semibold">2 - 5 Persons</h5>
                    </div>
                    <hr />
                    <div className=" flex gap-3">
                        <img className="w-9" src="https://i.ibb.co/B4MBPwP/feature-1.png" alt="" />
                        <h5 className="text-xl font-semibold">{bard}</h5>
                    </div>
                    <hr />
                    <div className=" flex gap-3">
                        <img className="w-9" src="https://i.ibb.co/B4MBPwP/feature-1.png" alt="" />
                        <h5 className="text-xl font-semibold">{RoomSizee}</h5>
                    </div>
                    <hr />
                    <h2 className="   font-semibold text-3xl text-yellow-600 rounded-lg">Price: ${price} | {shpeet}</h2>
                    <Link to={Avlroms >=0 ? `/UserInfo/${_id}` :""}>
                        <button onClick={count}  className="w-full m-3 uppercase text-xl font-bold  bg-yellow-600 rounded-lg py-4  text-white  "> book now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default RoomDetalis;