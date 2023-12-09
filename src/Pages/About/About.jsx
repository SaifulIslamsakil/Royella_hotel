import img1 from "../../assets/about-thumb.png"


const About = () => {
    return (
        <div>
            <div className="carousel-item relative h-[80vh] w-full" style={{ backgroundImage: `url(https://i.ibb.co/8K8sqMY/featured-image-bedroom-decor-jpeg.webp)`, backgroundPosition: "center", backgroundSize: "cover" }}>

                <div className="w-full flex flex-col justify-center items-center text-white  text-center space-y-4" style={{ backgroundColor: "rgba(11, 11, 11, 0.60)" }}>

                    <div className="rating rating-md space-x-4">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h2 className="text-6xl font-bold">About</h2>
                    <p><span className=" text-yellow-600">HOME </span>/ ROOMS & SUTTES</p>
                </div>
            </div>

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
        </div>
    );
};

export default About;