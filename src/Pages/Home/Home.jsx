// import Augment from "../../Components/HomeComponents/Augment";
import Banner from "../../Components/HomeComponents/Banner";
import Blog from "../../Components/HomeComponents/Blog";
import CountIngDiv from "../../Components/HomeComponents/CountIngDiv";
import HomeContact from "../../Components/HomeComponents/HomeContact";
import OurTeam from "../../Components/HomeComponents/OurTeam"
import ServiceSection from "../../Components/HomeComponents/ServiceSection";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./Home.css";

const Home = () => {
    useDocumentTitle('Home | Sm It Solution')
    return (
        <div>
            <Banner />


            <ServiceSection />

            {/* Dynamic countup number */}
            <CountIngDiv></CountIngDiv>

            {/* Out team */}
            <OurTeam></OurTeam>


            <Blog />

            {/* Contact */}
            <HomeContact></HomeContact>


        </div>

    );
};

export default Home;