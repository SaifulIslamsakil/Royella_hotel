import { useEffect } from "react";
import { useState } from "react";

const Facilities = () => {
    const [FacilitiesData, setFacilitiesData] = useState([])
    useEffect(() => {
        fetch("FacilitiesData.json")
            .then(res => res.json())
            .then(data => setFacilitiesData(data))
    }, [])
    console.log(FacilitiesData)
    return (
        <div className=" bg-black flex mt-20 justify-center items-center  ">
            <div className=" max-w-7xl p-3 mx-auto space-y-7">
                <img src="https://i.ibb.co/Q9btgyq/section-shape1.png" className="mx-auto w-20" alt="" />
                <h2 className="text-center text-4xl font-bold text-white">HOTEL’S FACILITIES</h2>
                <p className="lg:w-[700px] text-center mx-auto text-gray-400 text-xl font-semibold">Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-5 gap-5">
                    {
                        FacilitiesData.map(Facilities => <div key={Facilities._id} className="card  border border-yellow-600 rounded-lg p-4  shadow-xl">
                            <figure><img src={Facilities.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h3 className="text-gray-400 text-center text-xl font-bold">{Facilities.name}</h3>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Facilities;