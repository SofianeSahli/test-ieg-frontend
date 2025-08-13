import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../../../store/states/PostState';
import { Loader } from '../../widgets/loader/loader';
import { FormlyForm } from '@ngx-formly/core';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { selectError } from '../../../store/features/auth/auth.selector';
import {
  selectPostById,
  selectPostError,
  selectPostIds,
  selectPostLoading,
} from '../../../store/features/posts/posts.selector';
import { isPlatformBrowser } from '@angular/common';
import { attachErrorModalEffect } from '../../../utils/error-modal';
import { fields } from './post.form';
import { SubNavBar } from '../../widgets/sub-nav-bar/sub-nav-bar';
import { TranslateModule } from '@ngx-translate/core';
import { postsActions } from '../../../store/features/posts/posts.action';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { environment } from '../../../config/environments/environment';

@Component({
  selector: 'app-post-form',
  imports: [
    ReactiveFormsModule,
    FormlyForm,
    Loader,
    SubNavBar,
    TranslateModule,
  ],
  templateUrl: './post-form.html',
  styleUrl: './post-form.scss',
})
export class PostForm implements OnInit {
  form = new FormGroup({});
  model: Partial<Post> = {
    title: '',
    text: '',
    comments: [],
  };
  fields = fields;
  private store = inject(Store);
  private modalService = inject(NgbModal);
  private route = inject(ActivatedRoute);
  loginErrors = this.store.selectSignal(selectPostError);
  loading$ = this.store.select(selectPostLoading);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      attachErrorModalEffect(this.loginErrors, this.modalService);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['post']) {
        const post = params['post'];
        console.log(post);
        this.store
          .select(selectPostById(post))
          .pipe(take(1))
          .subscribe((value) => {
            this.model = structuredClone({
              ...value,
              file: value?.picture ? this.imageUrl(value?.picture) : null,
            });
          });
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      !this.model.id
        ? this.store.dispatch(
            postsActions.addPosts({ post: structuredClone(this.model) })
          )
        : this.store.dispatch(
            postsActions.update({ post: structuredClone(this.model) })
          );
    }
  }

  imageUrl(image: string | File): string {
    if (typeof image === 'string') {
      const baseUrlWithoutApi = environment.apiBaseUrl.replace(/\/api$/, '');

      return baseUrlWithoutApi + image;
    }
    return URL.createObjectURL(image);
  }
}
