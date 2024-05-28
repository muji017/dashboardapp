import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import * as socketIo from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket!: any
  apiUrl: string = environment.apiUrl
  userSocketConnected!: boolean
  isUserTyping!: boolean
  userId!:string
  constructor() { }

  connectSocket(userId:string){
    console.log(userId,"in socket");
    this.userId=userId
    console.log(userId,"in socket");
    this.socket = socketIo.connect(this.apiUrl)
    
    this.socket.on('connected', () => this.userSocketConnected = true)
    this.socket.on('typing', () => this.isUserTyping = true)
    this.socket.on('stop typing', () => this.isUserTyping = false)
    this.socket.emit('setup', userId)
  }

}
