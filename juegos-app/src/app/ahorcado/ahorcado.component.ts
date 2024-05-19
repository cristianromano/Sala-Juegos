import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TecladoComponent } from '../teclado/teclado.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [NavbarComponent, TecladoComponent, CommonModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css',
})
export class AhorcadoComponent {
  letraEquivocada: string[] = [];
  private words: string[] = ['ANGULAR', 'JAVASCRIPT', 'HANGMAN', 'DEVELOPER'];
  private selectedWord: string = '';
  displayedWord: string[] = [];
  incorrectGuesses: number = 0;
  maxIncorrectGuesses: number = 6;
  currentImage?: string = '';
  message?: string = '';
  gameActive: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame(): void {
    this.selectedWord =
      this.words[Math.floor(Math.random() * this.words.length)];
    this.displayedWord = Array(this.selectedWord.length).fill('_');
    this.incorrectGuesses = 0;
    this.updateHangmanImage();
    this.message = '';
  }

  onLetterSelected(letter: string): void {
    let correctGuess = false;

    for (let i = 0; i < this.selectedWord.length; i++) {
      if (this.selectedWord[i] === letter) {
        this.displayedWord[i] = letter;
        correctGuess = true;
      }
    }

    if (!correctGuess) {
      this.letraEquivocada.push(letter);
      this.incorrectGuesses++;
      this.updateHangmanImage();
    }

    this.checkGameStatus();
  }

  updateHangmanImage(): void {
    this.currentImage = `assets/hangman${this.incorrectGuesses}.png`;
  }

  checkGameStatus(): void {
    if (this.displayedWord.join('') === this.selectedWord) {
      this.message = 'Ganaste!';
      this.gameActive = false;
    } else if (this.incorrectGuesses >= this.maxIncorrectGuesses) {
      this.message = `Perdiste! la palabra era ${this.selectedWord}`;
      this.gameActive = false;
    }
  }

  startGame(): void {
    this.startNewGame();
    this.letraEquivocada = [];
    this.gameActive = true;
  }
}
