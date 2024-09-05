import { Component } from '@angular/core';
import { FooterComponent } from "../../layout/footer/footer.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
