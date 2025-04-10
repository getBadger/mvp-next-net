
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoSection from '../components/DemoSection';

const How = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="text-badger-orange">Badger</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Providing open source tools for savvy shoppers and affiliate marketers. Transparency by the people, for the people.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />
      
      
      
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default How;
