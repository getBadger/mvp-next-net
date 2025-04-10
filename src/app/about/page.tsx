
import React from 'react';
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';


const About = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-badger-orange">Badger</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Providing open source tools for savvy shoppers and affiliate marketers. Transparency by the people, for the people.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Badger was born out of a desire to bring transparency to the online shopping and marketing experience. As tech-savvy users ourselves, we recognized the need for tools that empower shoppers and affiliate marketers with clear, honest information about the digital marketplace.
              </p>
              <br />
              <p>
                We set out to build open source tools that put control back in the hands of the people. Our team of transparency advocates and digital marketing experts came together to create Badger - a suite of tools that provides insights, optimizes experiences, and ensures fairness in the digital economy.
              </p>

            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Badger.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-badger-yellow/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-badger-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency First</h3>
                <p className="text-muted-foreground">
                  We believe in complete transparency. Every tool we build prioritizes honest and clear information for both shoppers and affiliate marketers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-badger-deepOrange/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-badger-deepOrange" />
                </div>
                <h3 className="text-xl font-bold mb-2">Open Source Power</h3>
                <p className="text-muted-foreground">
                  We&apos;re committed to open source development. Badger tools are engineered to be accessible, customizable, and community-driven.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-badger-teal/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community-Centered</h3>
                <p className="text-muted-foreground">
                  By the people, for the people. Every decision is made with our community of users in mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 center">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The passionate people behind Badger who are dedicated to transparency in the digital marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Team member cards would go here */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image src="https://i.imgur.com/xgshOou.jpeg" alt="Diego Rameriz" width={24} height={24} className=" w-24 h-24 rounded-full mb-4" />
            <h3 className="font-bold text-lg">Diego Rameriz</h3>
              <p className="text-badger-orange">Co-Founder</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Image src="https://i.imgur.com/mSwPqeS.jpeg" width={24} height={24} alt="Naquan Smith" className=" w-24 h-24 rounded-full mb-4" />
              <h3 className="font-bold text-lg">Naquan Smith</h3>
              <p className="text-badger-orange">Co-Founder</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-badger-deepOrange/20 mb-4"></div>
              <h3 className="font-bold text-lg">Mercio Collins</h3>
              <p className="text-badger-orange">Lead Developer</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-badger-deepOrange/20 mb-4"></div>
              <h3 className="font-bold text-lg">Katherine Reed</h3>
              <p className="text-badger-orange">UX Designer</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
