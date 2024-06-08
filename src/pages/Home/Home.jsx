
// import { BsSearch } from "react-icons/bs";
import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Shared/Container";
import ScholarshipItems from "../../components/Home/ScholarshipItems";
import useScholearShips from "../../hooks/useScholearShips";
import ContactUs from "../contactus/ContactUs";
import { useState } from "react";
import { Link } from "react-router-dom";
import Testimonial from "../../components/pages/Testimonial";
import { Helmet } from "react-helmet-async";
import Partners from "../../components/pages/Partners";
import AdditionalInfo from "../../components/pages/AdditionalInfo";



const Home = () => {
    const [dataLength, setDataLength] = useState(6);
    const [allScholarShip] = useScholearShips()


    return (
        <div>
            <Helmet>
                <title>Education Elite | Home </title>
            </Helmet>
            <Container>
                <Carousel></Carousel>
                <div className="text-center ">

                    <h2 className="text-3xl mt-12">Top Scholarship</h2>
                    <p className="mt-3 w-1/2 mx-auto">From educators to nonprofit professionals, the Event Scholarship Program provides a unique opportunity for leaders to further enhance their skills </p>

                </div>

                <div id="gridLayout" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                    {
                        allScholarShip.slice(0, dataLength).map(item => <ScholarshipItems
                            key={item._id}
                            item={item}

                        ></ScholarshipItems>)
                    }

                </div>
                <div className="flex justify-center items-center">
                    <Link to='/allscholarship' className="py-2 px-6 bg-green-300 rounded inline-block mx-auto  text-center mt-8 capitalize"> show all </Link>
                </div>
                <AdditionalInfo></AdditionalInfo>
                <div>
                    <ContactUs></ContactUs>
                </div>
                <Testimonial></Testimonial>

                <Partners></Partners>
            </Container>

        </div>
    );
};

export default Home;