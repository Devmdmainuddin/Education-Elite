
import { Link } from "react-router-dom";
import Container from "../../components/Shared/Container";
import logo from '../../assets/logo-12.png'
const Footer = () => {
    return (
  

<footer className="bg-white">
  <Container>
  <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
    <div className="lg:flex lg:items-start lg:gap-8">
      

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
        
        <div className="">
        <Link to='/' className="flex items-center">
              <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='60'
                height='60'
                className=' rounded-full'
              />
              <span className="text-2xl font-bold text-gray-900 capitalize">education elite</span>
            </Link>
                  

          <div>
            

            <p className="mt-4 text-gray-500">
            We believe that education should be affordable and accessible to all...
            </p>
          </div>
        </div>

       
        <div className="">
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
           

            <li>
            <Link to='/allscholarship' className="text-gray-700 transition hover:text-teal-500"> all scholarship </Link>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-teal-500"> apply scholarship </a>
            </li>

            
          </ul>
        </div>

        <div className="">
          <p className="font-medium text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:text-teal-500"> About </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-teal-500"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-teal-500"> Accounts Review </a>
            </li>
          </ul>
        </div>

        <div className="">
          <p className="font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:text-teal-500"> Contact </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-teal-500"> FAQs </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-teal-500"> Live Chat </a>
            </li>
          </ul>
        </div>


       
      </div>
      
    </div>
   
    <div className="mt-8 border-t border-gray-100 pt-8">
      <div className="flex justify-center gap-x-8">
        <p className="text-xs text-gray-500">&copy; 2024. <span className="text-teal-500" >Education Elite</span>. All rights reserved.</p>
  <div className="flex gap-x-1"> <div className="w-[2px] h-[20px] bg-slate-400"></div><div className="w-[2px] h-[20px] bg-slate-400"></div>
    </div>  
        <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </Container>

</footer>
    );
};

export default Footer;