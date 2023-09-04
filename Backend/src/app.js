import express from 'express';
import cors from 'cors';
import router from './router';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello All Artists!');
});
