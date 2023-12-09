
const Offer = () => {
    return (
        <div className="mx-auto max-w-7xl p-10 mt-20 space-y-4">
            <p className="text-xl text-yellow-600">OFFERS</p>
            <h3 className=" text-4xl font-bold ">ROYELLA’S LIMITED PERIOD <br />
                BEST OFFERS</h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-55">
                <div>
                   <div className="relative">
                    <img className="w-96 " src="https://i.ibb.co/nsvpFSh/offers-4.jpg" alt="" />
                    <button className=" absolute top-5  bg-yellow-600 text-white py-3 px-6 hover:border hover:border-yellow-600 hover:bg-white hover:text-yellow-600">25% off</button>
                   </div>
                   <div className="space-y-4">
                    <h4 className="text-center text-2xl font-bold">Doubble Suite Rooms</h4>
                   </div>
                </div>
                <div>
                   <div className="relative">
                    <img className="w-96" src="https://i.ibb.co/YyLv8BT/offers-2.jpg" alt="" />
                    <button className=" absolute top-5 bg-yellow-600 text-white py-3 px-6 hover:border hover:border-yellow-600 hover:bg-white hover:text-yellow-600">25% off</button>
                   </div>
                   <div className="space-y-4">
                    <h4 className="text-center text-2xl font-bold">Suprior Bed Rooms</h4>
                   </div>
                </div>
                <div>
                   <div className="relative">
                    <img className="w-96" src="https://i.ibb.co/vcvH9bf/offers-3.jpg" alt="" />
                    <button className=" absolute top-5 bg-yellow-600 text-white py-3 px-6 hover:border hover:border-yellow-600 hover:bg-white hover:text-yellow-600">25% off</button>
                   </div>
                   <div className="space-y-4">
                    <h4 className="text-center text-2xl font-bold ">Delux Family Rooms</h4>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;