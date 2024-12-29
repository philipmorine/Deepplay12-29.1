import React from 'react';

const Schedule: React.FC = () => {
  const events = [
    {
      time: "10:00 AM",
      title: "Cosmic Meditation",
      description: "Start your day with guided meditation under our stellar dome"
    },
    {
      time: "2:00 PM",
      title: "Space Walk Workshop",
      description: "Learn about astronaut movement and deep playa navigation"
    },
    {
      time: "Sunset",
      title: "Orbital Light Show",
      description: "Experience our immersive light installation as the sun sets"
    },
    {
      time: "10:00 PM",
      title: "Deep Space Sound Journey",
      description: "Late night ambient soundscapes and visual projections"
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Daily Schedule</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <time className="text-orange-400 font-mono text-xl md:w-32">
                  {event.time}
                </time>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;