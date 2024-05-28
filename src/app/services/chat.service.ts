import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageList, UserList, UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) {}
  getAllUsers():Observable<UserList>{
    return this.http.get<UserList>(`${environment.apiUrl}/api/getallusers`);
  }
  getAllMessages(selectedUserId:string):Observable<MessageList>{
    const params = new HttpParams().set('userId', selectedUserId)
    return this.http.get<MessageList>(`${environment.apiUrl}/api/getallmessages`,{params});
  }
  sendMessage(senderId: string, receiverId: string, content: string): Observable<any> {
    const body = { senderId, receiverId, content };
    return this.http.post(`${environment.apiUrl}/api/sendmessage`, body);
  }
}
