import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: 'sign-in.component.html',
  styleUrl: 'sign-in.component.css',
})
export class SignInComponent {}  //implements OnInit {
//   registerForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {
//     this.registerForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }


//   ngOnInit(): void {}

//   onSubmit(): void {
//     if (this.registerForm.valid) {
//       const formData = this.registerForm.value;

//       this.http.post('', formData).subscribe(
//         (response) => {
//           console.log('Utilisateur créé avec succès:', response);
//           this.router.navigate(['/home']);
//         },
//         (error) => {
//           console.error('Erreur lors de la création de l’utilisateur:', error);
//         }
//       );
//     }
//   }

