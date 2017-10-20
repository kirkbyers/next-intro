import * as React from 'react';
import * as Fetch from 'isomorphic-unfetch';
import { UrlLike } from 'next';

import { RedditJSON } from '../models';
import { RedditSelfPostComponent } from '../components';

interface Props {
  posts: RedditJSON;
  url: UrlLike;
}

const RedditSelfSub: any = (props: Props) => {
  console.log(props);
  return (
    <div>
      {props.posts.data.children.map((post, index) => (
        post.data.is_self && <RedditSelfPostComponent post={post.data} key={index} />
      ))}
    </div>
  );
};

RedditSelfSub.getInitialProps = async function (context: UrlLike) {
  const res = await Fetch(`https://www.reddit.com/r/${context.query.r}.json`);
  const payload = await res.json();
  console.log(payload);
  return {
    posts: payload
  }
}

export default RedditSelfSub;