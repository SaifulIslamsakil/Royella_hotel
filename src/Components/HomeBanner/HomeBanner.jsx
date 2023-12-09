import img1 from "../../assets/Chateau-Monfort-Milan.jpg"
const HomeBanner = () => {
    return (
        <div className="carousel w-full h-screen ">

            <div id="slide1" className="carousel-item relative w-full" style={{ backgroundImage: "url(https://i.ibb.co/TYR1ZB8/7.webp)", backgroundPosition: "center", backgroundSize: "cover" }}>

                <div className="w-full flex flex-col justify-center items-center text-white  text-center space-y-4" style={{ backgroundColor: "rgba(11, 11, 11, 0.60)" }}>

                    <img src="https://i.ibb.co/Q9btgyq/section-shape1.png" alt="" className="w-20" />
                    <h4 className="text-2xl font-semibold">Unique Place And Luxury Hotel</h4>
                    <h1 className="font-bold text-5xl">Life Enjoy Wit The
                        Great Moments</h1>
                    <button className="py-3 px-8 rounded-lg bg-yellow-600 text-white  hover:bg-white hover:text-yellow-600">DISCOVER MORE</button>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full" style={{ backgroundImage: "url(https://i.ibb.co/fnXxT2Q/dining-room.jpg)", backgroundPosition: "center", backgroundSize: "cover" }}>

                <div className="w-full flex flex-col justify-center items-center text-white  text-center space-y-4" style={{ backgroundColor: "rgba(11, 11, 11, 0.60)" }}>

                    <div className="rating rating-md space-x-4">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h4 className="text-2xl font-semibold">Unique Place And Luxury Hotel</h4>
                    <h1 className="font-bold text-5xl">Life Enjoy Wit The
                        Great Moments</h1>
                    <button className="py-3 px-8 rounded-lg bg-yellow-600 text-white  hover:bg-white hover:text-yellow-600">DISCOVER MORE</button>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full" style={{ backgroundImage: `url(${img1})`, backgroundPosition: "center", backgroundSize: "cover" }}>

                <div className="w-full flex flex-col justify-center items-center text-white  text-center space-y-4" style={{ backgroundColor: "rgba(11, 11, 11, 0.60)" }}>

                    <div className="rating rating-md space-x-4">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h4 className="text-2xl font-semibold">Unique Place And Luxury Hotel</h4>
                    <h1 className="font-bold text-5xl">Life Enjoy Wit The
                        Great Moments</h1>
                    <button className="py-3 px-8 rounded-lg bg-yellow-600 text-white  hover:bg-white hover:text-yellow-600">DISCOVER MORE</button>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HomeBanner;