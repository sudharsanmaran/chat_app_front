import "./ContactsInfo.css";
import {shallowEqual, useSelector } from "react-redux";
import SingleContact from "./SingleContact/SingleContact";
import { RootState } from "../../../redux-store/store";
import { GroupType } from "../../../Types";

function ContactsInfo() {
  const groups: GroupType[] = useSelector(
    (state: RootState) => state.contactInfo.groups, shallowEqual
  );


  return (
    <div className="contact-info">
      {groups.length > 0 && groups.map(group =>{
        return <SingleContact key={group.id} group={group}/>
      })}
    </div>
  );
}

export default ContactsInfo;
