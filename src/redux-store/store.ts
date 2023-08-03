import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactInfoReducer from "./slices/ContactsInfoSlice";
import userInfoReducer from "./slices/UserInfoSlice";
import messageReducer from "./slices/MessageSlice";
import allUserReducer from "./slices/AllUsersslice";
import ConfigsReducer from "./slices/ConfigsSlice";
import SearchResultReducer from "./slices/SearchResults";
import createSocketMiddleware from "./WebSocketMiddleware";

const socketMiddleware = createSocketMiddleware;

export const store = configureStore({
  reducer: {
    contactInfo: contactInfoReducer,
    userInfo: userInfoReducer,
    Message: messageReducer,
    AllUsers: allUserReducer,
    Configs: ConfigsReducer,
    SearchResult: SearchResultReducer,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(logger, socketMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
