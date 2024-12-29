import React from 'react';

interface Event {
  id: string;
  year: number;
  dates: string;
  time: string;
  location: string;
  description: string;
}

const events: Event[] = [
  {
    id: '2024-bar',
    year: 2024,
    dates: "August 26 - 30",
    time: "Daily from 11 AM – 3 PM",
    location: "8:45 & H",
    description: "Bar Open"
  },
  {
    id: '2023-simulator',
    year: 2023,
    dates: "August 28 - September 1",
    time: "Daily from 10:15 AM – 1:15 PM",
    location: "9:15 & E",
    description: "The OG Simulation"
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Events</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-8 border border-orange-500/20 hover:border-orange-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-orange-400">{event.year}</h3>
                  <span className="text-white font-mono">{event.dates}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 font-mono">{event.time}</p>
                  <p className="text-gray-300 font-mono">Location: {event.location}</p>
                  <p className="text-xl text-white">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;