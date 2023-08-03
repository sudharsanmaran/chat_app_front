import { useSelector } from "react-redux";
import { RootState } from "../../../../redux-store/store";

function UserInfo() {
  const selected_user = useSelector(
    (state: RootState) => state.contactInfo.selected_user
  );

  return (
    <>
      <div className="group-profile-pic"></div>
      <div className="group-profile-container">
        <div className="group-name">{selected_user?.username}</div>
        <div className="group-members">about...</div>
      </div>
    </>
  );
}

export default UserInfo;
