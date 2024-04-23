import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAlert, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbAlert],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'juegos-app';
  active = 1;
}
