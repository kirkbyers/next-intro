import * as Express from 'express';

import { app } from './next';
import { postRoute, redditRoute } from './masked-routes';

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = Express();

    server.get('/p/:id', postRoute);
    server.get('/r/:subReddit', redditRoute);

    server.get('*', (req, res) => handle(req, res));

    server.listen('3000', (err: any) => {
      if (err) {
        throw err;
      }
      console.log('Server listing at http://localhost:3000');
    });

  })
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  });