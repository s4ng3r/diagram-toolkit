import { Component, Input } from '@angular/core';
import { CardType } from './card.interfaces';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() type: CardType | string = CardType.FILLED;

  cardType = 'card-elevated';
}
