
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
import { FcSettings } from 'react-icons/fc';
const ModeratorMenu = () => {
  return (
    <>
     <MenuItem
        label='Profile'
        address='profile'
        icon={FcSettings}>
      </MenuItem>
      <MenuItem 
      icon={MdHomeWork} 
      label='Manage Scholearships' 
      address='manage-scholarship' 
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='all reviews'
        address='manage-Reviews'
      />
      <MenuItem 
      icon={MdHomeWork} 
      label='all Applied Scholarship' 
      address='manage-Applied-Application' 
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='add Scholarship'
        address='add-scholarship'
      />
    </>
  );
};

export default ModeratorMenu;