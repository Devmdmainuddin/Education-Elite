
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
import { FcSettings } from 'react-icons/fc';
const ModeratorMenu = () => {
  return (
    <>
      <MenuItem
        label='Profile'
        address='dashboard/profile'
        icon={FcSettings} />
      <MenuItem 
      icon={MdHomeWork} 
      label='Manage Scholearships' 
      address='manage-scholearships' 
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='all reviews'
        address='reviews'
      />
      <MenuItem 
      icon={MdHomeWork} 
      label='all Applied Scholarship' 
      address='applied-scholarship' 
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