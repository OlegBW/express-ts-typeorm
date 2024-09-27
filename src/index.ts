import express, { Express, Request, Response } from 'express';

import { dataSource } from './data-source';
import { PORT } from './constants';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ msg: 'Hello, World!' });
});

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(PORT, () => {
      console.log(`App listen on ::${PORT}`);
    });

  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });

