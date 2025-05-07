'use client';
import { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="text-xl text-red-500"
      aria-label="Like"
    >
      {liked ? '❤️' : '🤍'}
    </button>
  );
}
