import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllPosts,
  selectPostLoading,
} from '../../../store/features/posts/posts.selector';
import { Loader } from '../../widgets/loader/loader';
import { postsActions } from '../../../store/features/posts/posts.action';
import { AsyncPipe } from '@angular/common';
import { PostListItem } from '../posts-list-item/posts-list-item';
import { SubNavBar } from '../../widgets/sub-nav-bar/sub-nav-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '../../../config/routes';

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
