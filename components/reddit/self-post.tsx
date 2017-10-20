import * as React from 'react';

import { RedditPost } from '../../models';

interface Props {
  post: RedditPost;
}

const SelfPostComponent: React.SFC<Props> = (props) => {
  const { post } = props;
  return (
    <div>
      <div>{post.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.selftext_html }} />
    </div>);
}

export default SelfPostComponent;