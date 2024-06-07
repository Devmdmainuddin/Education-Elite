import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { FcSettings } from 'react-icons/fc'

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUserCog}
        label='adminHome'
        address='/dashboard' />
      <MenuItem
        label='Profile'
        address='profile'
        icon={FcSettings}>
      </MenuItem>

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