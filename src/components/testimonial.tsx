// pages/testimonial.tsx
import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import peopleImg from '@/app/still-quote-Arian.webp'

const inter = Inter({ subsets: ['latin'] });

const TestimonialPage: React.FC = () => {
  return (
    <div className={`bg-white mx-auto w-[100%] flex flex-col justify-center items-center h-screen ${inter.className}`}>
      <div className="flex flex-col w-[83%] h-[80%] md:flex-row md:justify-center md:items-center gap-8">
        {/* Testimonial Card */}
        <div className="w-full md:w-1/2 ">
          <div className="bg-white rounded-lg  overflow-hidden">
            <div className="relative w-full h-full flex justify-center rounded-md items-center ">
              <Image
                src={peopleImg}
                alt="Testimonial"
                // layout="fill"
                objectFit="cover"
                height={510}
                className='rounded-md'
              />
            </div>

            {/* button walah */}
            <div className="flex  mt-4 justify-center gap-5">
                {['Arian', 'Amanda', 'Paul'].map((name, index) => (
                <button
                    key={name}
                    className={`px-4 py-2  rounded-full text-sm ${
                    index === 0 ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    {name}
                </button>
                ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="w-full md:w-1/2 flex flex-col pl-14 justify-center">
          <h2 className="text-5xl text-gray-800 font-bold mb-4">Find out why <br /> we're better.</h2>
          <button className="bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold mb-4 w-fit">
            See all our stories
          </button>
          <div className="flex items-center text-sm">
            <span className="text-green-700 mr-2">★</span>
            <span className="font-semibold text-black">Trustpilot</span>
            <span className="ml-2 text-gray-600">Excellent 4.3 out of 5</span>
          </div>
        </div>
      </div>
      
      {/* button section */}
      
    </div>
  );
};

export default TestimonialPage;