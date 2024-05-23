import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChatroomComponent } from '../chatroom/chatroom.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [NavbarComponent, ChatroomComponent, HttpClientModule],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  irCartas() {
    this.router.navigate(['/cartas']);
  }

  irAhorcado() {
    this.router.navigate(['/ahorcado']);
  }

  irPreguntados() {
    this.router.navigate(['/preguntados']);
  }

  irCuadrados() {
    this.router.navigate(['/cuadrados']);
  }
}
