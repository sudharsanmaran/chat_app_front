import "./GroupInfo.css";
import { shallowEqual, useSelector } from "react-redux";
import { GroupType } from "../../../../Types";
import { RootState } from "../../../../redux-store/store";
import { get_receiver_name } from "../../../Contacts/ContactsInfo/SingleContact/SingleContact";

function GroupInfo() {
  const selected_group: GroupType | null = useSelector(
    (state: RootState) => state.contactInfo.selected_group,
    shallowEqual
  );

  const user = useSelector((state:RootState)=> state.userInfo.user);

  return (
    <>
      <div className="group-profile-pic"></div>
      <div className="group-profile-container">
        {selected_group?.is_private ? (
          <>
            <div className="-group-name">
              {get_receiver_name(selected_group, user)}
            </div>
            <div className="group-members">about...</div>
          </>
        ) : (
          <>
            <div className="-group-name">{selected_group?.name}</div>
            <div className="group-members">group members</div>
          </>
        )}
      </div>
    </>
  );
}

export default GroupInfo;
