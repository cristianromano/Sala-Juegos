import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cuadrados',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './cuadrados.component.html',
  styleUrl: './cuadrados.component.css',
})
export class CuadradosComponent {
  score: number = 0;
  colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
  squareVisible: boolean = true;
  timeoutId: any;
  gameDuration: number = 30000; // 30 segundos
  timeLeft: number = 30; // Tiempo en segundos
  gameOver: boolean = false;
  gameTimerId: any;
  intervalId: any;

  ngOnInit() {
    this.startGame();
  }

  ngOnDestroy() {
    this.clearTimeouts();
  }

  randomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  moveSquare() {
    this.clearTimeout();
    const square = document.getElementById('square');
    const container = document.getElementById('game-container');

    if (square && container && !this.gameOver) {
      const maxWidth = container.clientWidth - square.clientWidth;
      const maxHeight = container.clientHeight - square.clientHeight;

      const randomX = Math.floor(Math.random() * maxWidth);
      const randomY = Math.floor(Math.random() * maxHeight);

      square.style.backgroundColor = this.randomColor();
      square.style.left = `${randomX}px`;
      square.style.top = `${randomY}px`;

      this.squareVisible = true;

      this.timeoutId = setTimeout(() => {
        this.squareVisible = false;
      }, 3000);
    }
  }

  onSquareClick() {
    if (!this.gameOver) {
      this.score++;
      this.moveSquare();
    }
  }

  startGame() {
    this.score = 0;
    this.gameOver = false;
    this.timeLeft = this.gameDuration / 1000;
    this.moveSquare();

    this.intervalId = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);

    this.gameTimerId = setTimeout(() => {
      this.endGame();
    }, this.gameDuration);
  }

  endGame() {
    this.gameOver = true;
    this.clearTimeouts();
    this.squareVisible = false;
  }

  resetGame() {
    this.startGame();
  }

  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  clearTimeouts() {
    this.clearTimeout();
    if (this.gameTimerId) {
      clearTimeout(this.gameTimerId);
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
