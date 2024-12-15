import express from 'express';
import cors from 'cors';
import todoRoutes from './endpoints/todo';
import wishListRoutes from './endpoints/wishlist';

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());

app.use('/wishlist', wishListRoutes);
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`);
});

