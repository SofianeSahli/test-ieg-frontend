import { createAction, props } from '@ngrx/store';
import { Post } from '../../states/PostState';

export const postsActions = {
  fetchPosts: createAction('[API] fetch posts'),
  fetchPostssSuccess: createAction(
    '[API] fetch posts success',
    props<{ posts: Array<Post> }>()
  ),
  failure: createAction('[API] post failure', props<{ errors: string }>()),
  queryPosts: createAction('[API] Query posts', props<{ query: string }>()),
  addPosts: createAction('[API] create Post', props<{ post: Partial<Post> }>()),
  addPostSuccess: createAction(
    '[API] createPost success',
    props<{ post: Post }>()
  ),
};
