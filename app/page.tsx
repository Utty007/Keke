/* eslint-disable react/no-unescaped-entities */
import Image, { StaticImageData } from "next/image";
import Welcome from "./components/Welcome";
import Eco from '@/app/Assets/Eco.svg';
import Wallet from '@/app/Assets/Wallet.svg'
import Health from '@/app/Assets/Health.svg'
import Handshake from '@/app/Assets/Handshake.svg'
import Mark from '@/app/Assets/Check.svg'
import ReasonCard from "./components/ReasonCard";
import Services from "./components/Services";
import DownloadApp from "./components/DownloadApp";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export interface reason {
    header: string,
    description: string,    
    img: StaticImageData,
    alt: string
}

export default function Home() {
  const reasons: reason[] = [{
    img: Eco,
    header: 'Eco-Friendly',
    description: "Reduce your carbon footprint by choosing a bicycle over motorized transport.",
    alt: 'Eco-Friendly Icon'
  }, {
    img: Wallet,
    header: 'Affordable',
    description: "Enjoy low-cost rentals with flexible pricing plans suitable for every student.",
    alt: 'Affordable Icon'
  }, {
    img: Health,
    header: 'Healthy', 
    description: 'Promote a healthy lifestyle by integrating cycling into your daily routine.', 
    alt: "Health Icon"
    }, {
    img: Handshake,
    header: "Supportive", 
    description: "Benefit from our on-site repair services and safety equipment to ensure a smooth ride.", 
    alt: "Handshake Icon"
  }, 
  {
    img: Mark,
    header: "Convenient", 
    description: "Access our bikes from our multiple substations located across campus.",
    alt: "Check Icon"
  }
]
  return (
    <main className="w-full">
      <Welcome />
      <div id="about" className="w-full bg-white md:px-16 px-8 flex flex-col lg:flex-row gap-8 justify-center lg:justify-between items-center p-6">
        <div className="max-w-[700px] lg:max-w-[500px]">
          <h1 className="text-[#f4c617] text-4xl md:text-5xl leading-normal">WHY CHOOSE KEKE?</h1>
          <p className="text-black text-lg md:text-xl">
            Our mission at Keke is to revolutionize campus transportation by offering a green alternative that not only eases commuting but also fosters a healthier and more connected university community. We aim to reduce congestion, minimize our carbon footprint, and provide a reliable service that complements the university's existing transportation options.
          </p>
          <a href="#app" className='bg-[#f4c716] text-black rounded-full px-4 py-2 inline-block text-lg mt-2'>Get The App</a>
        </div>
        <div className="flex flex-row flex-wrap gap-8 text-center lg:text-left justify-center lg:justify-normal">
        {
          reasons.map((reason: reason, index: number) => {
            return (
              <ReasonCard prop={reason} key={index} />
            )
          })
        }
        </div>
      </div>
      <Services />
      <DownloadApp />
      <FAQs />
      <Footer />
    </main>
  );
}
