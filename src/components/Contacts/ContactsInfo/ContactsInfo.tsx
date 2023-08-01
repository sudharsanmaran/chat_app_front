import "./ContactsInfo.css";
import {useSelector } from "react-redux";
import SingleContact from "../SingleContact/SingleContact";
import { RootState } from "../../../redux-store/store";
import { GroupType } from "../../../Types";

function ContactsInfo() {
  const groups: GroupType[] = useSelector(
    (state: RootState) => state.contactInfo.groups
  );


  return (
    <div className="contact-info">
      {groups.length && groups.map(group =>{
        return <SingleContact key={group.id} group={group}/>
      })}
    </div>
  );
}

export default ContactsInfo;
