import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Firestore,
  collectionData,
  collection,
  getDoc,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { doc } from 'firebase/firestore';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);
  userRegistro = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  registro() {
    const email = this.userRegistro.get('email')?.value || '';
    const password = this.userRegistro.get('password')?.value || '';

    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        addDoc(collection(this.firestore, 'users'), {
          email: this.userRegistro.get('email')?.value,
          fecha: new Date(),
        }).then((docRef) => {
          Swal.fire({
            icon: 'success',
            title: `Usuario:${
              this.userRegistro.get('email')?.value
            } creado con exito! `,
          });
          this.router.navigate(['/home']);
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: `${error.message} `,
        });
      });
  }

  volverLogin() {
    this.router.navigate(['/']);
  }
}
