import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllPosts,
  selectPostError,
  selectPostLoading,
} from '../../../store/features/posts/posts.selector';
import { Loader } from '../../widgets/loader/loader';
import { postsActions } from '../../../store/features/posts/posts.action';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { PostListItem } from '../posts-list-item/posts-list-item';
import { SubNavBar } from '../../widgets/sub-nav-bar/sub-nav-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '../../../config/routes';
import { attachErrorModalEffect } from '../../../utils/error-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts-listing',
  imports: [Loader, AsyncPipe, PostListItem, SubNavBar],
  templateUrl: './posts-listing.html',
  styleUrl: './posts-listing.scss',
})
export class PostsListing implements OnInit {
  store = inject(Store);
  loading$ = this.store.select(selectPostLoading);
  posts$ = this.store.select(selectAllPosts);
  router = inject(Router);
  route = inject(ActivatedRoute);
  postError = this.store.selectSignal(selectPostError);
  eroorModalService = inject(NgbModal);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      attachErrorModalEffect(this.postError, this.eroorModalService);
    }
  }
  ngOnInit(): void {
    this.store.dispatch(postsActions.fetchPosts());
  }

  addEntryClicked() {
    this.router.navigate([Routes.DASHBOARD.POSTS.ADD], {
      relativeTo: this.route,
    });
  }

  query($event: string) {
    if ($event && $event.trim() !== '')
      this.store.dispatch(postsActions.queryPosts({ query: $event }));
    else {
      this.store.dispatch(postsActions.fetchPosts());
    }
    console.log($event);
  }
}
