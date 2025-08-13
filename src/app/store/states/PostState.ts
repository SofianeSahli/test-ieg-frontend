import { EntityState } from '@ngrx/entity';
import { User } from './UsersState';

export interface Tag {
  id: string;
  name: string;
  slug?: string;
}

export interface Comment {
  id?: string;
  user?: User | string;
  userId?: string;
  text: string;
  createdAt?: string;
  parentId?: string;
  postId?: string;
}

export interface Post {
  _id?: string;
  id?: string;
  title: string;
  text: string;
  picture?: string | File;
  user?: User | null;
  userId?: string;
  tags?: Tag[] | string[];
  likesCount?: number;
  likes?: string[];
  comments: any;
  createdAt?: string;
}

export interface PostState extends EntityState<Post> {
  selectedPostState: string | null;
  loading: boolean;
  error: string | null;
}
