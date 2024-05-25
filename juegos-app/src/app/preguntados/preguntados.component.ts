import { Component } from '@angular/core';

import { PreguntasService } from '../../services/preguntas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css',
})
export class PreguntadosComponent {
  preguntas: any;
  currentQuestionIndex = 0;
  selectedAnswer: string | null = null;
  isAnswered = false;
  showResult = false;
  constructor(private preguntasService: PreguntasService) {}

  ngOnInit(): void {
    this.preguntasService.getPreguntas().subscribe((data) => {
      this.preguntas = data.preguntas;
    });
  }

  nextQuestion() {
    if (this.preguntas.length === this.currentQuestionIndex + 1) {
      this.currentQuestionIndex = 0;
    } else {
      this.currentQuestionIndex++;
    }
    this.selectedAnswer = null;
    this.showResult = false;
    this.isAnswered = false;
  }

  checkAnswer() {
    this.isAnswered = true;
    const currentQuestion = this.preguntas[this.currentQuestionIndex];
    if (this.selectedAnswer === currentQuestion.correct_answer) {
      this.showResult = true;
    } else {
      this.showResult = true;
    }
  }
}
