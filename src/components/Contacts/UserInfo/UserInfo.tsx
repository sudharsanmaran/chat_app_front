import "./UserInfo.css";
import { UserInfoType } from "../../../Types";
import { RootState } from "../../../redux-store/store";
import { useSelector } from "react-redux";

function UserInfo() {
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
    </div>
  );
}

export default UserInfo;
