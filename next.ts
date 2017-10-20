import * as Next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev });

export { app };
