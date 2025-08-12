import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { UsersState, User } from '../../states/UsersState';
import { Post, PostState } from '../../states/PostState';
import { postsActions } from './posts.action';

export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: (post: Post) => (post.id !== undefined ? post.id : post._id!),
});

export const initialState: PostState = postAdapter.getInitialState({
  selectedPostState: null,
  loading: false,
  error: null,
});
export const postReducer = createReducer(
  initialState,
  on(postsActions.fetchPostssSuccess, (state, { posts }) => {
    return postAdapter.setAll(posts, {
      ...state,
      loading: false,
    });
  }),
  on(postsActions.failure, (state, { errors }) => ({
    ...state,
    loading: false,
    error: errors,
  })),
  on(postsActions.addPosts, (state, action) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(postsActions.addPostSuccess, (state, { post }) => {
    return postAdapter.addOne(post, {
      ...state,
      loading: false,
    });
  })
);
