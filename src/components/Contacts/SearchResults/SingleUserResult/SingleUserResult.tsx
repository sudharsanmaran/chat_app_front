

import { useDispatch } from "react-redux";
import { UserInfoType } from "../../../../Types";
import { updateSelectedGroup, updateSelectedType, updateSelectedUser } from "../../../../redux-store/slices/ContactsInfoSlice";
import { AppDispatch } from "../../../../redux-store/store";



function SingleUserResult({user}: { user: UserInfoType }) {

    const dispatch: AppDispatch = useDispatch();

    const handleSelectedUser = (user: UserInfoType) => {
        dispatch(updateSelectedUser(user));
      };


    return (
        <div className="single-contact" onClick={() => handleSelectedUser(user)}>
          <div className="group-profile-pic"></div>
          <div className="group-info">
            <div className="-group-name">{user.username}</div>
            <div className="user-about">about...</div>
          </div>
        </div>
      );
}

export default SingleUserResult