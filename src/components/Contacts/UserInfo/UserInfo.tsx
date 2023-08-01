import './UserInfo.css'
import { UserInfoType } from '../../../Types';
import { RootState } from '../../../redux-store/store';
import { useSelector } from 'react-redux';

function UserInfo() {
  const user: UserInfoType = useSelector(
    (state: RootState) => state.userInfo.user
  );


  return (
    <h3 className='user-info-container'>{user.username}</h3>
  )
}

export default UserInfo