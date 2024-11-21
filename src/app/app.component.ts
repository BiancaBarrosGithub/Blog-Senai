import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blogSenai';
}
