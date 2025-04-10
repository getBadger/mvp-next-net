import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SupportSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-block bg-yellow-100 p-3 rounded-lg mb-4">
                <Heart className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Help us make the web a safer, faster place. Your contributions directly fund development and help us keep Badger free for everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://patreon.com/getBadger" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-red-500 text-white hover:bg-red-600">
                    Support on Patreon
                  </Button>
                </a>
                <a href="https://github.com/orgs/getBadger/repositories" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-100">
                    Star on GitHub
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-xs aspect-square bg-gradient-to-br from-yellow-100 to-teal-100 rounded-full flex items-center justify-center p-8">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-orange-500 mb-2">♥</p>
                    <p className="text-sm text-gray-600">Thank you for your support!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
