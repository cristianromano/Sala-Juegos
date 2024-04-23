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
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  item$?: Observable<any[]>;

  private auth: Auth = inject(Auth);

  userFormulario = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private alert: SweetAlert2Module) {}

  ngOnInit(): void {}

  login() {
    signInWithEmailAndPassword(
      this.auth,
      this.userFormulario.get('email')?.value ?? '',
      this.userFormulario.get('password')?.value ?? ''
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: `${error.message} `,
        });
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  }

  registro() {
    this.router.navigate(['/registro']);
  }
}
