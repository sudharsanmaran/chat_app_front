import "./Chat.css";
import ChatInfo from "./ChatInfo/ChatInfo";
import InputMessage from "./InputMessage/InputMessage";
import Messages from "./Messages/Messages";

function Chat() {
  return (
    <div className="chat-container">
      <ChatInfo />
      <Messages/>
      <InputMessage/>
    </div>
  );
}

export default Chat;
