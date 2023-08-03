import Chat from "../Chat/Chat";
import Contacts from "../Contacts/Contacts";
import Login from "../Login/Login";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import { useEffect } from "react";
import { fetchUsersThunk } from "../../redux-store/slices/AllUsersslice";

function Home() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: RootState) => state.userInfo.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUsersThunk())
    }
  },[isAuthenticated]);


  return (
    <div className="home-container">
      {isAuthenticated ? (
        <>
          <Contacts />
          <Chat />
        </>
      ) : (
        <Login/>
      )}
    </div>
  );
}

export default Home;
