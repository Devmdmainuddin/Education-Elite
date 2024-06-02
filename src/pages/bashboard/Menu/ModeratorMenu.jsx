
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const ModeratorMenu = () => {
  return (
    <>
     
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