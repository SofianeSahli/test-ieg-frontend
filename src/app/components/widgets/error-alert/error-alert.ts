import { CommonModule } from '@angular/common';
import { Component, Input, Signal, signal } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-error-alert',
  imports: [CommonModule, TranslateModule],
  templateUrl: './error-alert.html',
  styleUrl: './error-alert.scss',
})
export class ErrorAlert {
  @Input() errors!: string | null;

  constructor(public modal: NgbActiveModal) {}
}
