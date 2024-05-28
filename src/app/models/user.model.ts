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
