import React from 'react';
import { Rocket, Compass, Heart } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Mission</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Rocket className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Cosmic Journey</h3>
            <p className="text-gray-300">
              Experience the intersection of deep space wonder and playa magic
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Compass className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Desert Navigation</h3>
            <p className="text-gray-300">
              Guide wanderers through the cosmic desert landscape
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
            <p className="text-gray-300">
              Create connections that transcend earthly boundaries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;