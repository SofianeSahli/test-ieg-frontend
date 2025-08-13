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
  on(postsActions.update, (state, action) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(postsActions.addPostSuccess, (state, { post }) => {
    return postAdapter.addOne(post, {
      ...state,
      loading: false,
    });
  }),
  on(postsActions.updateSuccess, (state, { post }) => {
    return postAdapter.upsertOne(post, {
      ...state,
      loading: false,
    });
  }),
  on(postsActions.deletePostSuccess, (state, { id }) => {
    return postAdapter.removeOne(id, {
      ...state,
      loading: false,
    });
  }),
  on(postsActions.deletePost, (state, action) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(postsActions.commentPostSuccess, (state, { comment }) => {
    // Find the post entity
    const post = state.entities[comment.postId!];
    if (!post) return state; // post not found, return unchanged state

    let updatedComments;

    if (!comment.parentId) {
      // Root-level comment, append to post.comments
      updatedComments = [...(post.comments || []), comment];
    } else {
      // Nested comment, recursively add to correct parent comment
      const addReplyToComments = (comments: any[]): any[] => {
        return comments.map((c) => {
          if (c._id === comment.parentId) {
            return {
              ...c,
              comments: [...(c.comments || []), comment],
            };
          } else if (c.comments?.length) {
            return {
              ...c,
              comments: addReplyToComments(c.comments),
            };
          } else {
            return c;
          }
        });
      };

      updatedComments = addReplyToComments(post.comments || []);
    }

    // Update post with new comments
    const updatedPost = {
      ...post,
      comments: updatedComments,
    };

    // Use adapter to update entity in state
    return postAdapter.updateOne(
      {
        id: updatedPost.id!,
        changes: updatedPost,
      },
      state
    );
  })
);
