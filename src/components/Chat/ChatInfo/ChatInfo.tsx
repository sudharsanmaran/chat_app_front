import { shallowEqual, useSelector } from "react-redux";
import { GroupType } from "../../../Types";
import "./ChatInfo.css";
import { RootState } from "../../../redux-store/store";

function ChatInfo() {
  const selected_group: GroupType | null = useSelector(
    (state: RootState) => state.contactInfo.selected_group, shallowEqual
  );

  return (
    <div className="chat-info-container">
      <div className="group-profile-pic"></div>
      <div className="group-profile-container">
        <div className="group-name">{selected_group?.name}</div>
        <div className="group-members">group members</div>
      </div>
    </div>
  );
}

export default ChatInfo;
