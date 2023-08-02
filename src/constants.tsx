export const BASE_URL: string = "http://192.168.5.111:8002";
export const Groups_URL: string = `${BASE_URL}/chat/api/chat_rooms/`;
export const USER_URL: string = `${BASE_URL}/chat/api/user/`;
export const REFRESH_TOKEN_URL: string = `${BASE_URL}/chat/api/token/refresh/`;
export const TOKEN_URL: string = `${BASE_URL}/chat/api/token/`;

export const getMessagesURL = (room_id: string) => {
  return `${BASE_URL}/chat/api/messages/${room_id}`;
};
