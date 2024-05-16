import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChatroomComponent } from '../chatroom/chatroom.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [NavbarComponent, ChatroomComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
