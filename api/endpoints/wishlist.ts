import { Request, Response, Router } from 'express';

const router = Router();

interface Wish {
  id: string;
  name: string;
}

let wishlist: Wish[] = [];

router.get('/', (req: Request, res: Response) => {
  res.json(wishlist);
});

router.post('/', (req: Request, res: Response) => {
  const { id, name }: Wish = req.body;

  wishlist.push({ id, name });
  res.status(201).json({ message: 'Wish added successfully', wishlist });
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  wishlist = wishlist.filter((wish) => wish.id !== id);
  res.json({ message: 'Wish removed successfully', wishlist });
});

export default router;