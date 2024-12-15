'use client';

import { useGetWishlistQuery, useRemoveWishlistItemMutation } from '@/store/apiSlice';

export default function Wishlist() {
  const { data: wishlist = [], isLoading, error } = useGetWishlistQuery();
  const [removeWishlistItem] = useRemoveWishlistItemMutation();

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    const errorMessage =
      'status' in error
        ? `Error ${error.status}: ${(error.data as any)?.message || 'Unknown error'}`
        : error.message || 'Unknown error';
    return <p>{errorMessage}</p>;
  }

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