import { useRef } from "react";
import "./InputMessage.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux-store/store";
import { GroupType } from "../../../Types";

function InputMessage() {
  const content = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  const selected_group: GroupType | null = useSelector(
    (state: RootState) => state.contactInfo.selected_group
  );

  const handleSend = () => {
    const messageContent = content.current?.value;
    if (messageContent) {
      dispatch({
        type: "SEND_WEBSOCKET_MESSAGE",
        payload: {
          type: "group_message",
          content: messageContent,
          group_id: selected_group?.id,
        },
      });

      content.current.value = "";
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSend();
    }
  };

  return (
    <div className="input-message-container">
      <textarea
        className="input-message"
        id="message"
        name="message"
        ref={content}
        placeholder="Type a Message"
        onKeyDown={handleKeyDown}
      ></textarea>
    </div>
  );
}

export default InputMessage;
