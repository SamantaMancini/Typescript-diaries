import express from 'express';
import diaryRouter from './routes/diares';
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diares', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});