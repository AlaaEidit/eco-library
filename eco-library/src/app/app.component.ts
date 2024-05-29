import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, LoginComponent, BookComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Correction de styleUrl à styleUrls
})
export class AppComponent {
  title = 'eco-library';
}
