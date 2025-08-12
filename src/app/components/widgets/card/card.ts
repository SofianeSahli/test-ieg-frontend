import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card',
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card<Type> {
  @Input() item?: any;
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() icon?: string;
  @Input() content?: string;
  @Input() thubnail: string = "public/images/no-thumbnail.webp"
  @Input() actions?: {
    label: string;
    cssClass: string;
  };
  @Input() routing?: {
    label: string;
    cssClass: string;
    route: string;
  };
  @Output() deleteClicked = new EventEmitter<any>();

}
