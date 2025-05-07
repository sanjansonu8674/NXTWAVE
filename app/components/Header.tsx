'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Navbar() {
  const router = useRouter();

  const handleUserClick = () => {
    router.push('/signup');
  };

  return (
    <header className="w-full border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Icon / Hamburger */}
        <div className="text-2xl font-bold">
          <button className="text-black">✖</button>
        </div>

        {/* Center Logo and Navigation */}
        <div className="flex flex-col items-center">
          <span className="font-extrabold text-xl">LOGO</span>
          <nav className="flex space-x-6 mt-2 text-sm font-semibold ">
            <Link className='hover:text-green-500' href="#">SHOP</Link>
            <Link className='hover:text-green-500' href="#">SKILLS</Link>
            <Link className='hover:text-green-500' href="#">STORIES</Link>
            <Link className='hover:text-green-500' href="#">ABOUT</Link>
            <Link className='hover:text-green-500' href="#">CONTACT US</Link>
          </nav>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-black text-lg">
          <FaSearch className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
          <FaUser className="cursor-pointer" onClick={handleUserClick} />
          <div className="flex items-center text-sm font-semibold cursor-pointer">
            ENG <IoMdArrowDropdown className="ml-1" />
          </div>
        </div>
      </div>
    </header>
  );
}
