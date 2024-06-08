import { Link } from "react-router-dom";
import ModeratorMenu from './bashboard/Menu/ModeratorMenu'
import { GrLogout } from "react-icons/gr";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import GuestMenu from "./bashboard/Menu/GuestMenu";
import AdminMenu from './bashboard/Menu/AdminMenu'
import useRole from "../hooks/useRole";
import logo from'../assets/logo-12.png'
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import { AiOutlineBars } from "react-icons/ai";

const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)
    const [role, isloading] = useRole()
    if (isloading) return <LoadingSpinner />

    const handleToggle = () => {
      setActive(!isActive)
    }
    return (
        <>
      
        <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
          <div>
            <div className='block cursor-pointer p-4 font-bold'>
              <Link to='/' className="flex items-center">
                <img
                  src={logo}
                  alt='logo'
                  width='60'
                  height='60'
                 className="rounded-full"
                />
                Education-Elite
              </Link>
            </div>
          </div>
  
          <button
         onClick={handleToggle}
            className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
          >
            <AiOutlineBars className='h-5 w-5' />
          </button>
        </div>
  
        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-12  md:space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
            }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#a2f3ba35] mx-auto'>
                <Link to='/'>
                  <img
                    // className='hidden md:block'
                    // src='https://i.ibb.co/4ZXzmq5/logo.png'
                    src={logo}
                    alt='logo'
                    width='100'
                    height='100'
                  />
                </Link>
              </div>
            </div>
  
         
            <div className='flex flex-col justify-between flex-1 mt-6'>
          
              <nav>
                {role === 'user' && <GuestMenu/>}
                {role === 'moderator' && <ModeratorMenu/>}
                {role === 'admin' && <AdminMenu/>}
              </nav>
            </div>
          </div>
  
          <div>
         
            <button
              onClick={logOut}
              className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
              <GrLogout className='w-5 h-5' />
  
              <span className='mx-4 font-medium'>Logout</span>
            </button>
            
          </div>
        </div>
      </>
    );
};

export default Sidebar;