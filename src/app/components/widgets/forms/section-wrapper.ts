import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'formly-section-wrapper',
  standalone: true,
  template: `
    <div class="section-wrapper">
      <div class="section-header">
        @if(props.label) {
        <span class="section-title">{{ props.label | translate }}</span>
        }
        <hr />
      </div>
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
  styles: [
    `
      .section-wrapper {
        margin: 16px 0;
        padding: 24px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;
      }

      .section-header {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 16px;
        margin-bottom: 20px;
        flex-wrap: nowrap;
      }

      .section-title {
        font-weight: 700;
        font-size: 20px;
        margin: 0;
        padding: 0;
        white-space: nowrap;
        color: #333;
      }

      .section-header hr {
        width: 100%;
        flex-grow: 1;
        border: none;
        border-top: 2px solid #333;
        margin: 0;
        opacity: 0.3;
      }
    `,
  ],
  imports: [TranslateModule],
})
export class SectionWrapper extends FieldWrapper {}
