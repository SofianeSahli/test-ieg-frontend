import { createAction, props } from '@ngrx/store';
import { Comment as IComment, Post } from '../../states/PostState';

export const postsActions = {
  fetchPosts: createAction('[API] fetch posts'),
  fetchPostssSuccess: createAction(
    '[API] fetch posts success',
    props<{ posts: Array<Post> }>()
  ),
  deletePost: createAction('[API] DELETE Post', props<{ id: string }>()),
  deletePostSuccess: createAction(
    '[API] DELETE Post Success',
    props<{ id: string }>()
  ),
  update: createAction('[API] update Post', props<{ post: Partial<Post> }>()),
  updateSuccess: createAction('[API] update Success', props<{ post: Post }>()),
  failure: createAction('[API] post failure', props<{ errors: string }>()),
  queryPosts: createAction('[API] Query posts', props<{ query: string }>()),
  addPosts: createAction('[API] create Post', props<{ post: Partial<Post> }>()),
  addPostSuccess: createAction(
    '[API] createPost success',
    props<{ post: Post }>()
  ),
  commentPost: createAction(
    '[API] comment Post',
    props<{ comment: IComment }>()
  ),
  commentPostSuccess: createAction(
    '[API] comment Post Success',
    props<{ comment: IComment }>()
  ),
};
