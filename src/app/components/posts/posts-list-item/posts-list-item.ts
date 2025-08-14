import {
  Component,
  Inject,
  inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { AsyncPipe, CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../store/states/PostState';
import { environment } from '../../../config/environments/environment';
import { ImagePreviewModal } from '../../widgets/image-preview-modal/image-preview-modal';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '../../../config/routes';
import { Store } from '@ngrx/store';
import { selectUser } from '../../../store/features/auth/auth.selector';
import { postsActions } from '../../../store/features/posts/posts.action';
import { CommentsSections } from '../comments-sections/comments-sections';

@Component({
  selector: 'app-posts-list-item',
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    AsyncPipe,
    CommentsSections,
  ],
  templateUrl: './posts-list-item.html',
  styleUrl: './posts-list-item.scss',
})
export class PostListItem {
  @Input() post!: Post;
  modalService = inject(NgbModal);
  private modalRef!: NgbModalRef;
  router = inject(Router);
  route = inject(ActivatedRoute);
  store = inject(Store);
  userProfile$ = this.store.select(selectUser);
  likes = 0;
  newComment = '';
  comments: string[] = [];

  toggleLike() {
    this.likes++;
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment.trim());

      this.userProfile$.subscribe((value) => {
        this.store.dispatch(
          postsActions.commentPost({
            comment: {
              text: this.newComment,
              userId: value?._id,
              postId: this.post.id,
            },
          })
        );
        this.newComment = '';
      });
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

  details() {
    this.router.navigate([Routes.DASHBOARD.POSTS.ADD], {
      relativeTo: this.route,
      queryParams: {
        post: this.post.id,
      },
    });
  }

  onDelete(post: Post) {
    console.log('Delete', post);
    this.store.dispatch(postsActions.deletePost({ id: post.id! }));
  }
}
