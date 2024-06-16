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

app.use('/api/images', (_, res) => {
  const images = [
    'wallpaper-1.jpg',
    'wallpaper-2.jpg',
    'wallpaper-3.jpg',
    'wallpaper-4.jpg',
    'wallpaper-5.jpg',
    'wallpaper-6.jpg',
  ];

  const imageUrls = images.map(image => getSignedUrl(image));

  res.send(imageUrls);
})

const port = process.env.PORT = 3001;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));