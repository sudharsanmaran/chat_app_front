
export type UserInfoType = {
    id: string;
    last_login: string;
    is_superuser: boolean;
    username: string;
    is_staff: boolean;
    created_at: string;
    updated_at: string;
    groups: string[];
    user_permissions: string[];
}


export type GroupType = {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    users: string[];
}

export type MessageType = {
    id: string;
    chat_room: string;
    sender: string;
    content: string;
    created_at: string;
    updated_at: string;
}
