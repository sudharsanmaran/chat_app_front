import { useSelector } from 'react-redux';
import { GroupType } from '../../../Types';
import './ChatInfo.css'
import { RootState } from '../../../redux-store/store';

function ChatInfo() {
  const selected_group: GroupType | null= useSelector(
    (state: RootState) => state.contactInfo.selected_group
  );

  return (
    <div className='chat-info-container'>{selected_group?.name}</div>
  )
}

export default ChatInfo