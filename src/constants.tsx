export const BASE_URL: string = "http://0.0.0.0:8002";
export const Groups_URL: string = `${BASE_URL}/chat/api/chat_rooms/`;
export const USER_URL: string = `${BASE_URL}/chat/api/user/`;

export const getMessagesURL = (room_id: string) => {
  return `${BASE_URL}/chat/api/messages/${room_id}`;
};
