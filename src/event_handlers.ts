import { AnyAction } from "@reduxjs/toolkit";
import { updateUserInfo } from "./redux-store/slices/UserInfoSlice";
import { reArrangeUserGroup, updateUserGroup } from "./redux-store/slices/ContactsInfoSlice";
import { appendGroupMessage, updateGroupMessages } from "./redux-store/slices/MessageSlice";
import { updateUserResults } from "./redux-store/slices/SearchResults";

export const event_handlers = new Map<string, ((data: CallableFunction) => AnyAction)[]>([
    ['user', [updateUserInfo]],
    ['user_group', [updateUserGroup]],
    ['group_messages', [updateGroupMessages]],
    ['group_message', [appendGroupMessage, reArrangeUserGroup]],
    ['search_users', [updateUserResults]]
  ]);