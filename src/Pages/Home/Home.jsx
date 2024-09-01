import Contact from "../../Components/Contact";
import OurTeam from "../../Components/OurTeam";
import Augment from "../../Components/HomeComponents/Augment";
import Banner from "../../Components/HomeComponents/Banner";
import Blog from "../../Components/HomeComponents/Blog";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./Home.css";

const Home = () => {
    useDocumentTitle('Home | Sm It Solution')
    return (
        <div>
            <Banner />


            

            
            <Augment />

            {/* Out team */}
            <OurTeam></OurTeam>

            
            <Blog />

            {/* Contact */}
            <Contact></Contact>
        </div>

    );
};

export default Home;