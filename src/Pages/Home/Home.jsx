import Aboutes from "../../Components/Aboutes/Aboutes";
import Facilities from "../../Components/Facilities/Facilities";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Offer from "../../Components/Offer/Offer";
import RoomSection from "../../Components/RoomsSection/RoomSection";


const Home = () => {
    return (
        <div >
             <HomeBanner></HomeBanner>
             <RoomSection></RoomSection>
             <Aboutes></Aboutes>
             <Facilities></Facilities>
             <Offer></Offer>

            </div>
    );
};

export default Home;