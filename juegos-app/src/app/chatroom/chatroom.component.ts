import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  collectionData,
  collection,
  Firestore,
  addDoc,
  query,
  orderBy,
} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatroom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.css',
})
export class ChatroomComponent {
  auth: Auth = inject(Auth);
  firestore: Firestore = inject(Firestore);
  mensajes: any[] = [];
  mensaje: string = '';
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const refImg = collection(this.firestore, 'chats');
    const q = query(refImg, orderBy('fecha', 'asc'));

    collectionData(q).subscribe((data) => {
      this.mensajes = data;
    });
  }

  enviarMensaje(): void {
    if (this.mensaje.trim()) {
      const now = new Date();

      addDoc(collection(this.firestore, 'chats'), {
        fecha: now,
        mensaje: this.mensaje,
        nombre: this.auth.currentUser?.email,
      });

      this.mensaje = '';
    }
  }

  scrollDown() {
    setTimeout(() => {
      const messageContainer =
        this.elRef.nativeElement.querySelector('#flush-collapseOne');
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }, 0);
  }
}
