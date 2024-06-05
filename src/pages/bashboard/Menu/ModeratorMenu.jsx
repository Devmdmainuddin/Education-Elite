
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const ModeratorMenu = () => {
  return (
    <>
     
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