import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import 'dotenv/config';
import { signedUrl } from './bucket.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/image', (req, res) => {
  res.send(signedUrl);
});

const port = process.env.PORT = 3001;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));