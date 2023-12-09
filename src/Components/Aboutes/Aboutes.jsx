
import img1 from "../../assets/about-thumb.png"
const Aboutes = () => {
    return (
        <div className="lg:flex items-center p-5 gap-10">

            <div className="flex-1 ">
                <img src={img1} alt="" className="w-3/4 mx-auto" />
            </div>
            <div className="flex-1 space-y-4 mt-4 ">
                <p className="text-xl  text-yellow-600">LUXURY HOTEL AND RESORT</p>
                <h3 className="text-4xl font-semibold lg:w-[500px]">LUXURY BEST HOTEL IN CITY
                    CALIFORNTA, USA</h3>
                <p className="text-xl text-gray-400">Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe Compellingly create premier open data through economically.</p>
                <div className=" md:flex gap-32 mt-5">
                    <div> 
                        <h4 className=" text-6xl font-bold text-yellow-600 mb-3">250 + </h4>
                        <p className="text-xl font-semibold text-gray-400">Luxury Rooms</p>
                    </div>
                    <div>
                        <h4 className=" text-6xl font-bold text-yellow-600 mb-3"> 4.9 </h4>
                        <p className="text-xl font-semibold text-gray-400">Coustomer Ratings</p>
                    </div>
                   
                </div>
                <button className="px-6 py-4 rounded-lg bg-yellow-600 text-white hover:bg-white hover:text-yellow-600 hover:border hover:border-yellow-600">About More</button>
            </div>
        </div>
    );
};

export default Aboutes;