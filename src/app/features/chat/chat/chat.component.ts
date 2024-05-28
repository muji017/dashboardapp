import { Component } from '@angular/core';
import { Message, MessageList, UserList, UserModel } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  userList:any=[]
  userId:string|null=null
  selectedUser:UserModel|null=null
  messages:any=[]
  sendMsg:string=''
   constructor(
    private chatService:ChatService,
    private socketService:SocketService
   ){}
   ngOnInit(){
    this.getAllUsers()
   }
   getAllUsers(){
    this.userId=localStorage.getItem('userId')
    this.chatService.getAllUsers().subscribe(
      res=>{
        console.log(res);
        this.userList=res.userlist
      },
      err=>{
        console.log(err);
      }
    )
   }
   getAllMessages(userId:string){
     this.chatService.getAllMessages(userId).subscribe(
      res=>{
        this.messages=res.messages
      },
      err=>{
        console.log(err);
      }
     )
   }
  selectUser(user: UserModel){
    console.log(user);
    this.getAllMessages(user._id)
    this.selectedUser=user
   }
   sendMessage(){
    const senderId:string|any=this.userId
    const receiverId:string|any=this.selectedUser
    const content:string|any=this.sendMsg
    this.chatService.sendMessage(senderId, receiverId, content).subscribe(
      res => {
        console.log('Message sent:', res);
        this.sendMsg = ''; 
      },
      err => {
        console.log('Error sending message:', err);
      }
    );
   }
}
