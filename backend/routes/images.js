import { Router } from 'express';
import { getSignedUrl } from '../bucket';

const router = Router();

router.get('/:file', (req, res) => {
  const { file } = req.params;
  if (!file) return res.status(400).send('Must provide a file');

  res.send(getSignedUrl(file));
});

router.get('/', (_, res) => {
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
});

export default router;