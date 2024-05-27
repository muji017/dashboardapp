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
    message:string;
    role:string;
    token:string;
}
