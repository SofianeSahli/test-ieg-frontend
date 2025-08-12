import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { postReducer } from './posts.reducer';
import * as POST_EFFECT from './posts.effect';
export const Post_FEATURE_KEY = 'posts';

export const providePostFeature = () => [
  provideState(Post_FEATURE_KEY, postReducer),
  provideEffects(POST_EFFECT),
];
