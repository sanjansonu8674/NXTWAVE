// app/page.tsx or app/HomePage.tsx
'use client';
import { useEffect, useState } from 'react';
import { Product } from './type';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import SectionHeading from './components/SectionHeading';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Recommended');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products
    .filter(product =>
      selectedCategory === 'All' || product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOption === 'Price: Low to High') return a.price - b.price;
      if (sortOption === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Header />
      <SectionHeading />
      <hr className="w-full border-gray-300 mb-4" />

      {/* Main section with sidebar below hr */}
      <div className="flex">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="flex-1 p-4">
          {/* Top bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-gray-600 mb-2 md:mb-0">{filteredProducts.length} ITEMS</p>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-sm font-medium">Sort:</label>
              <select
                id="sort"
                className="border px-2 py-1 rounded"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <hr className="w-full border-gray-300 mb-6" />

          {/* Product grid */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
