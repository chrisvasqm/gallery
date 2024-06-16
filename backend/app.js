import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import images from './routes/images.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/image', images);

const port = process.env.PORT = 3001;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));