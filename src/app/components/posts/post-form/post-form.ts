import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../../../store/states/PostState';
import { Loader } from '../../widgets/loader/loader';
import { FormlyForm } from '@ngx-formly/core';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { selectError } from '../../../store/features/auth/auth.selector';
import { selectPostLoading } from '../../../store/features/posts/posts.selector';
import { isPlatformBrowser } from '@angular/common';
import { attachErrorModalEffect } from '../../../utils/error-modal';
import { fields } from './post.form';
import { SubNavBar } from '../../widgets/sub-nav-bar/sub-nav-bar';
import { TranslateModule } from '@ngx-translate/core';
import { postsActions } from '../../../store/features/posts/posts.action';

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
export class PostForm {
  form = new FormGroup({});
  model: Partial<Post> = {
    title: '',
    text: '',
    comments: [],
  };
  fields = fields;
  private store = inject(Store);
  private modalService = inject(NgbModal);
  loginErrors = this.store.selectSignal(selectError);
  loading$ = this.store.select(selectPostLoading);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      attachErrorModalEffect(this.loginErrors, this.modalService);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(
        postsActions.addPosts({ post: structuredClone(this.model) })
      );
    }
  }
}
