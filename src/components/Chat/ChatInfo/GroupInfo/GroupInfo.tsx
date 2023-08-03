import "./GroupInfo.css";
import { shallowEqual, useSelector } from "react-redux";
import { GroupType } from "../../../../Types";
import { RootState } from "../../../../redux-store/store";

function GroupInfo() {
  const selected_group: GroupType | null = useSelector(
    (state: RootState) => state.contactInfo.selected_group,
    shallowEqual
  );

  return (
    <>
      <div className="group-profile-pic"></div>
      <div className="group-profile-container">
        <div className="group-name">{selected_group?.name}</div>
        <div className="group-members">group members</div>
      </div>
    </>
  );
}

export default GroupInfo;
