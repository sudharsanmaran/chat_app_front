import { AnyAction } from "@reduxjs/toolkit";
import { updateUserInfo } from "./slices/UserInfoSlice";
import { reArrangeUserGroup, updateUserGroup } from "./slices/ContactsInfoSlice";
import { appendGroupMessage, updateGroupMessages } from "./slices/MessageSlice";

export const event_handlers = new Map<string, ((data: CallableFunction) => AnyAction)[]>([
    ['user', [updateUserInfo]],
    ['user_group', [updateUserGroup]],
    ['group_messages', [updateGroupMessages]],
    ['group_message', [appendGroupMessage, reArrangeUserGroup]],
  ]);