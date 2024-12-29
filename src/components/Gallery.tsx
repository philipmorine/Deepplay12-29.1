import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200",
      alt: "Night sky installation"
    },
    {
      url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200",
      alt: "Deep space nebula projection"
    },
    {
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200",
      alt: "Interactive light display"
    },
    {
      url: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1200",
      alt: "Sacred geometry patterns"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-video group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;