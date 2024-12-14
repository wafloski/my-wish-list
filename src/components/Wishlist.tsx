'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import { useDispatch } from 'react-redux';
import { removeItem } from '@/store/wishlistSlice';

export default function Wishlist() {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  if (wishlist.length === 0) {
    return <p>Your wishlist is empty!</p>;
  }

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}