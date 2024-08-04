import React from 'react';
import Image from 'next/image';

const TestimonialPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Testimonial Card */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/path-to-image.jpg"
              alt="Testimonial"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-700 text-sm mb-4">
                "The reason why I decided to go with Better is because after I did
                my research with the other lenders, Better was the ones that
                provided me with the lowest interest rate."
              </p>
              <p className="text-xs text-gray-600">Arian - Better Mortgage customer</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Find out why we're better.</h2>
          <button className="bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold mb-4 w-fit">
            See all our stories
          </button>
          <div className="flex items-center text-sm">
            <span className="text-green-700 mr-2">★</span>
            <span className="font-semibold">Trustpilot</span>
            <span className="ml-2 text-gray-600">Excellent 4.3 out of 5</span>
          </div>
        </div>
      </div>

      {/* Tab-like Navigation */}
      <div className="flex mt-6 gap-2">
        {['Arian', 'Amanda', 'Paul'].map((name, index) => (
          <button
            key={name}
            className={`px-4 py-2 rounded-full text-sm ${
              index === 0 ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;