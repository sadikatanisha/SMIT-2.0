import Contact from "../../Components/Contact";
import Augment from "../../Components/HomeComponents/Augment";
import Banner from "../../Components/HomeComponents/Banner";
import Blog from "../../Components/HomeComponents/Blog";
import OurTeam from "../../Components/HomeComponents/OurTeam";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./Home.css";

const Home = () => {
    useDocumentTitle('Home | Sm It Solution')
    return (
        <div>
            <Banner />



            <SectionTitle title={'Our Process'} description={'Thoughtful digital strategies'} />

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