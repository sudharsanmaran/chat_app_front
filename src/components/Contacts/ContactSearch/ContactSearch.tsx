import { ChangeEvent, useRef, useState } from "react";
import "./ContactSearch.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateIsSearching } from "../../../redux-store/slices/ConfigsSlice";
import { RootState } from "../../../redux-store/store";

function ContactSearch() {
  const isSearching = useSelector(
    (state: RootState) => state.Configs.configs.isSearching,
    shallowEqual
  );
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const timerIdRef = useRef<any| null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
    }

    timerIdRef.current = setTimeout(() => {
      dispatch({
        type: "SEND_WEBSOCKET_MESSAGE",
        payload: {
          type: "search_users",
          search_query: query,
        },
      });
    }, 500);
  };

  const handleInputFocus = () => {
    dispatch(updateIsSearching(true));
  };

  const handleInputBlur = () => {
    dispatch(updateIsSearching(false));
    inputRef.current.value = '';
  };

  return (
    <div className="contact-search-container">
      <div className="contact-search">
        <input
          ref={inputRef}
          className="search-input"
          placeholder="Search"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      {isSearching && <button onClick={handleInputBlur}>X</button>}
      </div>
    </div>
  );
}

export default ContactSearch;
