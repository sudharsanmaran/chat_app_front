import { shallowEqual, useSelector } from "react-redux";
import ContactSearch from "./ContactSearch/ContactSearch";
import "./Contacts.css";
import ContactsInfo from "./ContactsInfo/ContactsInfo";
import UserInfo from "./UserInfo/UserInfo";
import { RootState } from "../../redux-store/store";
import SearchResults from "./SearchResults/SearchResults";

function Contacts() {
  const isSearching = useSelector(
    (state: RootState) => state.Configs.configs.isSearching,
    shallowEqual
  );
  return (
    <div className="contacts-container">
      <UserInfo />
      <ContactSearch />
      {isSearching ? <SearchResults /> : <ContactsInfo />}
    </div>
  );
}

export default Contacts;
