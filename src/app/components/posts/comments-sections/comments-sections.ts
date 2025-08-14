import { Component, Input } from '@angular/core';
import { Comment } from '../../../store/states/PostState';
import { DatePipe } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../config/environments/environment';

@Component({
  selector: 'app-comments-sections',
  imports: [DatePipe, TranslateModule],
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0px',
          overflow: 'hidden',
          opacity: 0,
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          overflow: 'hidden',
          opacity: 1,
        })
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ],
  templateUrl: './comments-sections.html',
  styleUrl: './comments-sections.scss',
})
export class CommentsSections {
  @Input() comments?: Array<Comment>;
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  imageUrl(image: string): string {
    if (typeof image === 'string') {
      const baseUrlWithoutApi = environment.apiBaseUrl.replace(/\/api$/, '');

      return baseUrlWithoutApi + image;
    }
    return URL.createObjectURL(image);
  }
}
