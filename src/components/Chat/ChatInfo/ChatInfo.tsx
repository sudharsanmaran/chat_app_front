import { shallowEqual, useSelector } from "react-redux";
import "./ChatInfo.css";
import GroupInfo from "./GroupInfo/GroupInfo";
import { RootState } from "../../../redux-store/store";
import UserInfo from "./UserInfo/UserInfo";

function ChatInfo() {
  const selected_type = useSelector(
    (state:RootState) => state.contactInfo.selected_type, shallowEqual
  )

  return (
    <div className="chat-info-container">
      {selected_type === 'group' &&  <GroupInfo />}
      {selected_type === 'user' &&  <UserInfo />}
    </div>
  );
}

export default ChatInfo;
