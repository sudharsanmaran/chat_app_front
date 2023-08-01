import Chat from "../Chat/Chat";
import Contacts from "../Contacts/Contacts"
import "./Home.css";


function Home() {

  return (
    <div className="home-container">
      <Contacts/>
      <Chat/>
    </div>
  )
}

export default Home