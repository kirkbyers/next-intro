import { RedditPost } from './reddit-post';

export interface RedditJSON {
  kind: string;
  data: {
    children: { kind: string, data: RedditPost }[]
  }
}