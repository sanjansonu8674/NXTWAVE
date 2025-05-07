// app/components/ProductCard.tsx
'use client';
import { Product } from '../type';
import LikeButton from './LikeButton';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border p-4 rounded relative shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-2"
      />
      <h2 className="text-sm font-semibold line-clamp-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>

      {/* Like Button on top-right */}
      <div className="absolute top-2 right-2">
        <LikeButton />
      </div>
    </div>
  );
}
