'use client';

import { useGetWishlistQuery, useRemoveWishlistItemMutation } from '@/store/apiSlice';

export default function Wishlist() {
  const { data: wishlist = [], isLoading, error } = useGetWishlistQuery();
  const [removeWishlistItem] = useRemoveWishlistItemMutation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.toString()}</p>;

  if (!wishlist.length) return <p>No data available</p>;

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeWishlistItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}