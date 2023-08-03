import { shallowEqual, useSelector } from "react-redux";
import { UserInfoType } from "../../../Types";
import { RootState } from "../../../redux-store/store";
import "./SearchResults.css";
import SingleUserResult from "./SingleUserResult/SingleUserResult";

function SearchResults() {
  const users: UserInfoType[] = useSelector(
    (state: RootState) => state.SearchResult.users,
    shallowEqual
  );
  return (
    <div className="search-result-container">
      {users.length > 0 ?
        users.map((user) => {
          return <SingleUserResult key={user.id} user={user} />;
        }) : <div>No Users Found!</div>}
    </div>
  );
}

export default SearchResults;
