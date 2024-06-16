import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import 'dotenv/config';
import { getSignedUrl } from './bucket.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/image/:file', (req, res) => {
  const { file } = req.params;
  if (!file) return res.status(400).send('Must provide a file');

  res.send(getSignedUrl(file));
});

const port = process.env.PORT = 3001;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));