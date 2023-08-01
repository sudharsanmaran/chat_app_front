import { useDispatch } from "react-redux";
import { GroupType } from "../../../Types";
import { updateSelectedGroup } from "../../../redux-store/slices/ContactsInfoSlice";
import "./SingleContact.css";
import { AppDispatch } from "../../../redux-store/store";

function SingleContact({ group }: { group: GroupType }) {
  const dispatch: AppDispatch = useDispatch();

  const handleSelectedGroup = (group: GroupType) => {
    dispatch(updateSelectedGroup(group));
  };

  return (
    <div className="single-contact" onClick={() => handleSelectedGroup(group)}>
      <div className="group-profile-pic"></div>
      <div className="group-info">
        <div className="-group-name">{group.name}</div>
        <div className="last-message">last message fdlbnfdjbn fd nbvfdhn</div>
      </div>
    </div>
  );
}

export default SingleContact;
