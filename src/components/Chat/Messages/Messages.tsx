import "./Messages.css";
import { useDispatch, useSelector } from "react-redux";
import { GroupType, MessageType, UserInfoType } from "../../../Types";
import { RootState } from "../../../redux-store/store";
import { useEffect, useRef } from "react";

function Messages() {
  const dispatch = useDispatch();
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const selected_group: GroupType | null = useSelector(
    (state: RootState) => state.contactInfo.selected_group
  );

  const user: UserInfoType = useSelector(
    (state: RootState) => state.userInfo.user
  );

  const messages = useSelector((state: RootState) => {
    const groupId = selected_group?.id;
    return groupId ? state.Message.group_messages[groupId] || [] : [];
  });

  useEffect(() => {
    if (selected_group) {
      fetchMessages(selected_group.id);
    }
  }, [selected_group]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchMessages = async (selected_group_id: string) => {
    dispatch({
      type: "SEND_WEBSOCKET_MESSAGE",
      payload: {
        type: "fetch_group_messages",
        group_id: selected_group_id,
      },
    });
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className="messages" ref={messagesContainerRef}>
      {messages.length > 0 &&
        messages.map((message: MessageType) => {
          const class_name =
            message.sender === user.id ? "user_message" : "other_message";
          return (
            <div key={message.id} className={`message-container ${class_name}`}>
              {class_name === "other_message" && (
                <div className="other-message-container">
                  <div className="message-profile-pic"></div>
                  <p className="paragraph-container">{message.content}</p>
                </div>
              )}
              {class_name === "user_message" && (
                <p className="paragraph-container">{message.content}</p>
              )}
              <div className="message-time">{message.created_at}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Messages;
