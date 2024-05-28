# Dashboard Application with realtime chat using websocket

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `ng serve`
4. Need to create backend and database

#Api
1. api/getallusers , For all users res with status 200 and list of user
2. api/login ,For login
3. api/signup
4. api/getallmessages
5. api/makeOnlineUser
6. api/sendmessage
   
# AuthService and gurads
1. `login(credentials: { username: string, password: string })`: Logs in a user and stores the token.
2. `logout()`: Logs out a user and removes the token.
3.  Auth guard for resticted unautherised user
4.  Role guard set privilaged user
  
# Other Features
1. modular architecture
2. ErrorInterceptors for handling errors
3. Global Interceptors
4. Auth guard and Role guard
5. Authentication using jwt
6. Services and Socket.io 
