import * as React from 'react';

import Link from 'next/link';

const menuLinks = [
  {
    label: 'About',
    href: '/about',
    as: '/about'
  },
  {
    label: 'My Post 1',
    href: '/post?title=My Post 1',
    as: '/p/my post 1'
  }
];

const IndexPage: React.SFC<{}> = () => (
  <div>
    <ul>
      {menuLinks.map((link, index) => (
        <li key={index}>
          <Link as={link.as} href={link.href}>
            <a>{link.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default IndexPage;
