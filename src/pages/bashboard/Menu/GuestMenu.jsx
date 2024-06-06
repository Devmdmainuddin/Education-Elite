import { BsFingerprint } from 'react-icons/bs'
// import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './/MenuItem'
import { FcSettings } from 'react-icons/fc'

// import useRole from '../../../hooks/useRole'

const GuestMenu = () => {
  // const [role] = useRole()
  return (
    <>
    <MenuItem
        label='Profile'
        address='profile'
        icon={FcSettings}>
      </MenuItem>
      <MenuItem
        icon={BsFingerprint}
        label='My Application'
        address='my-application'
      />
      <MenuItem
        icon={BsFingerprint}
        label='My Reviews'
        address='my-reviews'
      />
      


      {/* {role === 'guest' && (
        <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
        </div>
      )} */}

    </>
  )
}

export default GuestMenu