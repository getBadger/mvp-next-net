'use client';
import React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <header className="font-bold w-full py-4 px-4 md:px-8 bg-white/80 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-bold text-l">
        <Logo logoUrl="https://i.imgur.com/Zbv8Xwb.png" width={50} height={50} />
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-bold text-gray-800 hover:text-orange-500 transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="font-bold text-gray-800 hover:text-orange-500 transition-colors font-medium">
            About
          </Link>
          <a href="/how" className="font-bold text-gray-800 hover:text-orange-500 transition-colors font-medium">
            How it Works
          </a>
          <a 
            href="https://github.com/orgs/getBadger/repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-orange-500 transition-colors font-medium flex items-center gap-1"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </nav>

        <div>
        {/* TODO: Update Button */}
          {/* <Button className="bg-[color:hsl(48 89% 60%)] text-foreground hover:bg-badger-orange hover:text-white transition-colors">
            Join Waitlist
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
