import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-white mb-8">About</h2>
        <div className="prose prose-invert">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Deep Playa Simulator was inspired by a few veteran burners from NYC & Boston. Now, you don’t need to pedal out to the desert’s edge to feel that infinite expanse. We’ve captured the wonder, connection, and open space right here at camp. With Deep Playa Simulator, the journey comes to you. Escape, explore, and immerse yourself—without ever leaving camp. Come see the playa in a whole new way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;