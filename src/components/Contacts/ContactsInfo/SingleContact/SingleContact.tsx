import { useDispatch, useSelector } from "react-redux";
import { GroupType, UserInfoType } from "../../../../Types";
import { updateSelectedGroup } from "../../../../redux-store/slices/ContactsInfoSlice";
import "./SingleContact.css";
import { AppDispatch, RootState } from "../../../../redux-store/store";

export const get_receiver_name = (group: GroupType, user: UserInfoType): string => {
  const receiver = group.users.find((_user: UserInfoType) => {
    return _user.id !== user.id;
  });
  console.log(receiver, "reciver", group);
  return receiver ? receiver.username : ''; // Return the username or an empty string if no receiver is found
};

function SingleContact({ group }: { group: GroupType }) {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state:RootState) => state.userInfo.user)

  const handleSelectedGroup = (group: GroupType) => {
    dispatch(updateSelectedGroup(group));
  };

  return (
    <div className="single-contact" onClick={() => handleSelectedGroup(group)}>
      <div className="group-profile-pic"></div>
      <div className="group-info">
        {group.is_private ? (
          <div className="-group-name">{get_receiver_name(group, user)}</div>
        ) : (
          <div className="-group-name">{group.name}</div>
        )}
        <div className="last-message">last message bla bla...</div>
      </div>
    </div>
  );
}

export default SingleContact;
