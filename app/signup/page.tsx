'use client';
import { useRouter } from 'next/navigation';
import React from 'react'; 

export default function SignUpPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/signIn');
    };

    const handleLogin = () => {
        router.push('/signIn');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
                <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-center mt-4 text-gray-600">
                    Already have an account?{' '}
                    <button
                        onClick={handleLogin}
                        className="text-black font-medium hover:underline"
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}
