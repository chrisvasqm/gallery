import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const port = process.env.PORT = 3001;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));