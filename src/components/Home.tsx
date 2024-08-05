

import Image from 'next/image';
import Link from 'next/link';
import HeroImag from '@/app/hero-variant-c.webp'

export default function Home() {
  return (
    <div className="bg-[#004733] min-h-screen text-white">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Better</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-emerald-300">Buy</Link>
          <Link href="#" className="hover:text-emerald-300">Refinance</Link>
          <Link href="#" className="hover:text-emerald-300">HELOC</Link>
          <Link href="#" className="hover:text-emerald-300">Rates</Link>
          <Link href="#" className="hover:text-emerald-300">Better+</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <button className="bg-emerald-700 px-4 py-2 rounded hover:bg-emerald-600">Sign in</button>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className=" mx-auto px-6 my-14 h-screen flex justify-center items-center relative">
        <div className=" z-10 relative flex flex-col justify-center w-[80%] items-center">
          <h1 className="text-5xl md:text-9xl font-normal text-[#1EE07F] flex flex-col justify-center items-center  mb-6">
            <span>Mortgages</span><span>made simple</span>
          </h1>
         {/* ratting section */}
         <div className='flex flex-row justify-evenly my-6 py-8 w-full pt-10'>
          <div className='flex flex-col justify-start items-start'>
            <button className="bg-emerald-400 text-emerald-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-emerald-300 transition duration-300 mb-4">
              Start my approval
            </button>
            <p className="text-sm text-emerald-300 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              3 min | No credit impact
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/google-logo.png" alt="Google" width={20} height={20} className="mr-2" />
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm">4.6 Stars | 3177 Google reviews</span>
          </div>
         </div>
        </div>
        <div className="absolute flex flex-row justify-center bottom-0 w-full h-full ">
          <div className="bottom-0  absolute rounded-3xl overflow-hidden">
            <Image 
              src={HeroImag} 
              alt="Phone displaying mortgage approval" 
              width={400} 
              height={450} 
              className="rounded-3xl"
            />
            
          </div>
        </div>
      </main>
    </div>
  );
}