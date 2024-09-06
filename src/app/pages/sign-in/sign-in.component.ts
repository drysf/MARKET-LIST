import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
})
export class SignInComponent implements OnInit {
	
  	loginForm!: FormGroup;

  constructor(
	private fb: FormBuilder,
	private router: Router,
	private registerService: RegisterService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.registerService.signIn(email, password).subscribe(
        response => {
          console.log(response);
          // Redirection vers la page d'accueil ou autre logique
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
	console.log(this.loginForm.value);
  }
}