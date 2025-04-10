import React from 'react';
import { Github, Heart, Coffee } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo logoUrl="https://i.imgur.com/Zbv8Xwb.png" width={50} height={50} />
            <p className="text-gray-600 text-center md:text-left max-w-sm">
              Providing open source tools for savvy shoppers and affiliate marketers. Transparency by the people, for the people.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-orange-500 hover:text-orange-500 transition-colors">Home</a>
              <a href="/about" className="hover:text-orange-500 hover:text-orange-500 transition-colors">About</a>
              <a href="/how" className="hover:text-orange-500 hover:text-orange-500 transition-colors">How it Works</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Support Us</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://github.com/orgs/getBadger/repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:text-orange-500 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://patreon.com/getBadger?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:text-orange-500 transition-colors flex items-center gap-2"
              >
                <Coffee className="w-4 h-4" />
                <span>Patreon</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Badger. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-orange-500" /> by the Badger Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
