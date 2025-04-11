'use client'

import React from 'react';
import Navbar from './components/Navbar';
import WaitlistForm from './components/WaitlistForm';
import ThreeDModel from './components/ThreeDModel';
import HowItWorks from './components/HowItWorks';
// import StatsSection from './components/StatsSection';
import DemoSection from './components/DemoSection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
// import { ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-teal-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-6">
                <span className="text-orange-600 font-medium">Coming Soon!</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4 py-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Increase Affiliate Sales with <span className="text-orange-500">Badger</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-5xl">
                Badger helps affiliate marketers and influencers reach a broader audience and earn more sales commissions.
              </p>

              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full max-w-5xl">
                <div className="w-full lg:w-1/2">
                  <WaitlistForm />
                </div>
                {/* <div className="w-full lg:w-1/2">
                   <ThreeDModel /> 
                </div> */}
              </div>
            </div>


          
              
              <p className="mt-4 text-sm text-gray-600">
                {/* Join 10,000+ early adopters. Be the first to know when we launch. */}
              </p>
            
            
            
            </div>
          </div>
          
          {/* <div className="flex justify-center mt-16">
            <a href="#stats" className="animate-bounce flex flex-col items-center text-gray-600 hover:text-orange-500 transition-colors">
              <span className="mb-2">Learn More</span>
              <ArrowDown className="w-5 h-5" />
            </a>
          </div> */}
        </div>
      </section>
      
      {/* Stats Section */}
      <section id="stats">
        {/* <StatsSection /> */}
      </section>
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Demo Section */}
      <DemoSection />
      
      {/* Support Section */}
      <SupportSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
