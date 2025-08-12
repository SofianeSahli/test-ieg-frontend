import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../store/states/PostState';
import { environment } from '../../../config/environments/environment';
import { ImagePreviewModal } from '../../widgets/image-preview-modal/image-preview-modal';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts-list-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './posts-list-item.html',
  styleUrl: './posts-list-item.scss',
})
export class PostListItem {
  @Input() post!: Post;
  modalService = inject(NgbModal);
  private modalRef!: NgbModalRef;

  likes = 0;
  newComment = '';
  comments: string[] = [];

  toggleLike() {
    this.likes++;
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment.trim());
      this.newComment = '';
    }
  }

  imageUrl(image: string | File): string {
    if (typeof image === 'string') {
      const baseUrlWithoutApi = environment.apiBaseUrl.replace(/\/api$/, '');

      return baseUrlWithoutApi + image;
    }
    return URL.createObjectURL(image);
  }

  openImageModal() {
    if (typeof this.post!.picture === 'string') {
      this.modalRef = this.modalService.open(ImagePreviewModal, {
        centered: true,
        size: 'md',
      });

      this.modalRef.componentInstance.imageUrl = this.imageUrl(
        this.post!.picture
      );
    }
  }
}
