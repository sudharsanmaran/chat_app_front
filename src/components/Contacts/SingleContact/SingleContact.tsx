import { useDispatch } from 'react-redux';
import { GroupType } from '../../../Types'
import { updateSelectedGroup } from '../../../redux-store/slices/ContactsInfoSlice'
import './SingleContact.css'
import { AppDispatch } from '../../../redux-store/store';

function SingleContact({group}:{group: GroupType}) {
  const dispatch: AppDispatch = useDispatch();
  
  const handleSelectedGroup = (group: GroupType) => {
    dispatch(updateSelectedGroup(group))
  }

  return (
    <button className="single-contact" onClick={()=>handleSelectedGroup(group)}>{group.name}</button>
  )
}

export default SingleContact