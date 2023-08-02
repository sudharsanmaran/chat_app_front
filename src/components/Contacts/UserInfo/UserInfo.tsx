import "./UserInfo.css";
import { UserInfoType } from "../../../Types";
import { RootState } from "../../../redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import { updateToken } from "../../../redux-store/slices/UserInfoSlice";

function UserInfo() {
  const dispatch = useDispatch()
  const user: UserInfoType = useSelector(
    (state: RootState) => state.userInfo.user
  );

  return (
    <div className="user-info-container">
      <div className="user-profile-pic"></div>
      <div className="user-info">
        <div className="user-name">
          <h3>{user.username}</h3>
        </div>
        <div className="user-about">about</div>
      </div>
      <button onClick={()=>dispatch(updateToken({'accessToken': '', 'refreshToken': '', 'isAuthenticated': false}))}>logout</button>
    </div>
  );
}

export default UserInfo;
