import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../../states/UsersState';
import { PostState } from '../../states/PostState';
import { postAdapter } from './posts.reducer';
import { Post_FEATURE_KEY } from './posts.feature';

export const selectPostState =
  createFeatureSelector<PostState>(Post_FEATURE_KEY);

const { selectAll, selectEntities, selectIds, selectTotal } =
  postAdapter.getSelectors(selectPostState);

export const selectAllPosts = selectAll;
export const selectPostEntities = selectEntities;
export const selectPostIds = selectIds;
export const selectPostTotal = selectTotal;

export const selectPostById = (id: string) =>
  createSelector(selectPostEntities, (entities) => {
    console.log(entities);
    return id ? entities[id] ?? null : null;
  });

export const selectPostLoading = createSelector(
  selectPostState,
  (state) => state.loading
);

export const selectPostError = createSelector(
  selectPostState,
  (state) => state.error
);
