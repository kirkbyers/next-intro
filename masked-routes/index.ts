import { Request, Response } from 'express';

import { app } from '../next';

export function postRoute(req: Request, res: Response) {
  const actualPage = '/post'; // pages/post
  const queryParams = { title: req.params.id };
  app.render(req, res, actualPage, queryParams);
}

export function redditRoute(req: Request, res: Response) {
  const actualPage = '/reddit-self-sub';
  const queryParams = { r: req.params.subReddit };
  app.render(req, res, actualPage, queryParams);
}
