import * as React from 'react';

import { UrlLike } from 'next/link'

const PostPage: React.SFC<{ url: UrlLike }> = (props) => (
  <div>
    <p>This is the {props.url.query.title}</p>
  </div>
)

export default PostPage;