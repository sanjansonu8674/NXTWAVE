'use client';
import React from 'react';

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'men\'s clothing', 'jewelery', 'electronics', 'women\'s clothing'];

  return (
    <aside className="w-64 p-4 border-r hidden lg:block">
      <h3 className="font-semibold mb-4">FILTERS</h3>
      <div className="space-y-4 text-sm">
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            className="w-full border px-2 py-1 rounded"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </aside>
  );
}
