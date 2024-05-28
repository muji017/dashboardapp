import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import * as socketIo from "socket.io-client";
import { chatRooms } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket!: any
  apiUrl: string = environment.apiUrl
  userSocketConnected!: boolean
  isUserTyping!: boolean
  userId!:string
  constructor(
    private http:HttpClient
  ) { }

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
  makeOnline(userId: string, status: boolean): Observable<chatRooms> {
    let payload = { status, userId }
    return this.http.patch<chatRooms>(`${this.apiUrl}/api/makeOnlineUser`, payload)
  }

  public userTyping(roomId: any) {
    if (!this.userSocketConnected) return
    if (!this.isUserTyping) {
      this.isUserTyping = true
      this.socket.emit('typing', roomId)
      this.socket.on('typing progress', (roomId: string) => {

      })
     }
 }

}
