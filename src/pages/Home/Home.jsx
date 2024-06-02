
import { BsSearch } from "react-icons/bs";
import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Shared/Container";
import ScholarshipItems from "../../components/Home/ScholarshipItems";
import useScholearShips from "../../hooks/useScholearShips";



const Home = () => {
  const [allScholarShip] =useScholearShips()

  
    return (
        <div>
            <Container>
                <Carousel></Carousel>
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-teal-500">Our Queries</h3>
                    <h2 className="text-5xl">Our Queries Area</h2>
                    <p>Product Information Management  centralizes and manages product data </p>

                </div>
               
                <div id="gridLayout" className="grid grid-cols-3 gap-6 mt-12">
                 
                    {
                        allScholarShip.map(item => <ScholarshipItems
                            key={item._id}
                            item={item}

                        ></ScholarshipItems>)
                    }

                </div>


            </Container>

        </div>
    );
};

export default Home;