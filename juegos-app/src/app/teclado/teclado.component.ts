import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css',
})
export class TecladoComponent {
  @Input() juegoActivo: boolean = false;
  @Input() letraEquivocada: any;
  @Output() letterSelected = new EventEmitter<string>();

  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  selectLetter(letter: string): void {
    this.letterSelected.emit(letter);
  }

  isLetterDisabled(letter: string): boolean {
    return this.letraEquivocada.includes(letter);
  }
}
