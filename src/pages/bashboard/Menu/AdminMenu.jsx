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
      address='manage-scholarship' />
      <MenuItem 
      icon={FaUserCog} 
      label='Manage Applied Application' 
      address='manage-Applied-Application' />
      <MenuItem 
      icon={FaUserCog} 
      label='Manage Users' 
      address='manage-Users' />
      <MenuItem 
      icon={FaUserCog} 
      label='Manage Review' 
      address='manage-Reviews' />
    </>
  )
}

export default AdminMenu