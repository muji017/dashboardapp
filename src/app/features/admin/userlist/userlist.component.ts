import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserList, UserModel } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  searchQuery!: string;
  dataSource: MatTableDataSource<UserModel> = new MatTableDataSource<UserModel>();
  displayedColumns: string[] = ['name', 'role'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  userId!: string | null;

  constructor(private service: ChatService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userId = localStorage.getItem('userId');
    this.service.getAllUsers().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res.userlist;
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      }
    );
  }
}
