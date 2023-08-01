import ContactSearch from "./ContactSearch/ContactSearch";
import "./Contacts.css";
import ContactsInfo from "./ContactsInfo/ContactsInfo";
import UserInfo from "./UserInfo/UserInfo";

function Contacts() {
  return (
    <div className="contacts-container">
      <UserInfo/>
      <ContactSearch/>
      <ContactsInfo/>
    </div>
  );
}

export default Contacts;
