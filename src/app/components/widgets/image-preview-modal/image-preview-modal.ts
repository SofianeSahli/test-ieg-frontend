import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-preview-modal',
  imports: [],
  templateUrl: './image-preview-modal.html',
  styleUrl: './image-preview-modal.scss',
})
export class ImagePreviewModal {
  @Input() imageUrl: string | null = null;
  constructor(public modal: NgbActiveModal) {}

  close() {
    this.modal.close();
  }
}
