import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem 
      icon={FaUserCog} 
      label='Profile' 
      address='dashboard/profile' />
      <MenuItem 
      icon={FaUserCog} 
      label='Add Scholarship' 
      address='add-scholarship' />
      <MenuItem 
      icon={FaUserCog} 
      label='Manage Scholearships' 
      address='manage-scholearships' />
      <MenuItem 
      icon={FaUserCog} 
      label='Manage Applied Application' 
      address='applied-scholarship' />
      <MenuItem 
      icon={FaUserCog} 
      label='Manage Users' 
      address='manage-Users' />
      <MenuItem 
      icon={FaUserCog} 
      label='Manage Review' 
      address='manage-Review' />
    </>
  )
}

export default AdminMenu