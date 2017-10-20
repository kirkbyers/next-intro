import * as React from 'react';
import * as Fetch from 'isomorphic-unfetch';
import { UrlLike } from 'next';

import { RedditJSON } from '../models';
import { RedditSelfPostComponent } from '../components';

interface Props {
  posts: RedditJSON;
  url: UrlLike;
}

class RedditSelfSub extends React.Component<Props, any> {
  static async getInitialProps(context: UrlLike) {
    const res = await Fetch(`https://www.reddit.com/r/${context.query.r}/.json`).catch(err => console.log(err));
    const payload = await res.json();
    return {
      posts: payload
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts && posts.data.children.map((post, index) => (
          post.data.is_self && <RedditSelfPostComponent post={post.data} key={index} />
        ))}
      </div>
    );
  }
};

export default RedditSelfSub;