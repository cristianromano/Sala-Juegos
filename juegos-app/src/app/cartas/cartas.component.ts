import { Component } from '@angular/core';
import { CardserviceService } from '../../services/cardservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
  ],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css',
})
export class CartasComponent {
  constructor(private cardService: CardserviceService) {}
  puntos: number = 0;
  baraja: any;
  cartasArray: any;
  cartaUno: any;
  cartaDos?: any = {
    image: 'https://www.deckofcardsapi.com/static/img/back.png',
  };

  ngOnInit(): void {
    this.cardService.getDeck().subscribe((data) => {
      this.baraja = data;
      this.cardService.drawCard(this.baraja.deck_id).subscribe((data) => {
        this.cartasArray = data;
        this.cartaUno = this.cartasArray.cards[0];
        console.log(this.cartaUno);
      });
    });
  }

  drawCardMayor() {
    this.cardService.drawCard(this.baraja.deck_id).subscribe((data) => {
      this.cartaDos = data.cards[0];

      if (this.valorCarta(this.cartaDos) > this.valorCarta(this.cartaUno)) {
        this.cartaUno = this.cartaDos;
        this.puntos++;
        this.cartaDos = {
          image: 'https://www.deckofcardsapi.com/static/img/back.png',
        };
      } else {
        this.puntos = 0;
      }
    });
  }

  drawCardMenor() {
    this.cardService.drawCard(this.baraja.deck_id).subscribe((data) => {
      this.cartaDos = data.cards[0];

      if (this.valorCarta(this.cartaDos) < this.valorCarta(this.cartaUno)) {
        this.cartaUno = this.cartaDos;
        this.puntos++;

        this.cartaDos = {
          image: 'https://www.deckofcardsapi.com/static/img/back.png',
        };
      } else {
        this.puntos = 0;
      }
    });
  }

  valorCarta(carta: any) {
    switch (carta.value) {
      case 'ACE':
        return 14;
      case 'KING':
        return 13;
      case 'QUEEN':
        return 12;
      case 'JACK':
        return 11;
      default:
        return carta.value;
    }
  }
}
