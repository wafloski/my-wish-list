'use client';

import { useState } from 'react';
import { useAddWishlistItemMutation } from '@/store/apiSlice';

export default function AddWishForm() {
  const [wish, setWish] = useState('');
  const [addWishlistItem] = useAddWishlistItemMutation();

  const handleAddWish = async () => {
    if (wish.trim() === '') return;

    const newWish = {
      id: Date.now().toLocaleString().replace(/\s+/g, ''),
      name: wish,
    };

    await addWishlistItem(newWish);

    setWish('');
  };

  return (
    <div>
      <h2>Add a Wish</h2>
      <input
        style={{ color: 'black' }}
        type="text"
        value={wish}
        onChange={(e) => setWish(e.target.value)}
        placeholder="Enter your wish"
      />
      <button onClick={handleAddWish}>Add</button>
    </div>
  );
}
