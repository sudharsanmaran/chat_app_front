import Chat from "../Chat/Chat";
import Contacts from "../Contacts/Contacts";
import Login from "../Login/Login";
import "./Home.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";

function Home() {

  const isAuthenticated = useSelector(
    (state: RootState) => state.userInfo.isAuthenticated
  );


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
