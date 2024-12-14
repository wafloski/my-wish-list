'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/wishlistSlice';

export default function AddWish() {
  const [wish, setWish] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (wish.trim() === '') return;

    dispatch(
      addItem({
        id: Date.now().toString(),
        name: wish,
      })
    );

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
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
