import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css',
})
export class BioComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  irHome() {
    this.route.navigate(['/home']);
  }
}
