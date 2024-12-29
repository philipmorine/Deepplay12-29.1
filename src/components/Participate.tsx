import React from 'react';
import { Users, Gift, Wrench } from 'lucide-react';

const Participate: React.FC = () => {
  return (
    <section id="participate" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">How to Participate</h2>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Join the Crew</h3>
            <p className="text-gray-300 text-center">
              Become part of our cosmic family. We're looking for passionate individuals to help create and maintain our space.
            </p>
          </div>
          
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
            <div className="flex justify-center mb-6">
              <Gift className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Contribute</h3>
            <p className="text-gray-300 text-center">
              Share your skills, art, or resources. Every contribution helps make our cosmic vision a reality.
            </p>
          </div>
          
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
            <div className="flex justify-center mb-6">
              <Wrench className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Build & Create</h3>
            <p className="text-gray-300 text-center">
              Help us construct and maintain our installations. No experience necessary, just bring your enthusiasm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participate;