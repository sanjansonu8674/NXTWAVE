'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SignInPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" required placeholder="Email" className="border p-2" />
        <input type="password" required placeholder="Password" className="border p-2" />
        <button className="bg-black text-white py-2">Login</button>
      </form>
    </div>
  );
}
