export interface signupModel{
    name:string;
    username:string;
    password:string;
}

export interface ModelLogin{
    username:string;
    password:string;
}

export interface ResponseModelLogin{
    userId:string;
    message:string;
    role:string;
    token:string;
}
export interface UserModel{
    _id:string;
    name:string;
    username:string;
    password:string;
    isOnline:boolean;
}
export interface UserList{
    userlist:UserModel[]
}
export interface Message{
    _id?:string;
    roomId?:string;
    content?:string;
    senderId:string;
    receiverId:string;
    imageUrl?:string
}
export interface MessageList{
    messages:Message
}

export interface chatRoom{
    _id:string
    senderId:any
    receiverId:any
}

export interface chatRooms extends chatRoom{
    chatRooms:chatRoom[]
}

