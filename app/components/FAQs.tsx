'use client'
import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How Do I Rent A Bicycle?",
      answer: "Download our app or visit any of our substations, choose your rental plan, and you're ready to go!"
    },
    {
      question: "What Are The Rental Costs?",
      answer: "We offer a range of affordable plans to suit different needs. Contact us for detailed pricing."
    },
    {
      question: "What If I Have A Bicycle That Needs Repairs?",
      answer: "Our substations provide repair services to ensure your ride is always in top shape."
    },
    {
      question: "What Should I Do If The Bike Is Stolen while I Am With It?",
      answer: "Report the incident to our support team immediately. We will guide you through the next steps."
    },
    {
      question: "Why Should I Opt For Keke?",
      answer: "Keke offers an eco-friendly, convenient, and affordable transportation solution with secure bicycle locking systems and user-friendly services."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-white px-8 py-12'>
      <h3 className='text-4xl md:text-5xl font-bold text-[#f4c617] leading-loose md:leading-normal'>Frequently Asked Questions.</h3>
      <div className='bg p-8'>
        {faqs.map((faq, index) => (
          <div key={index} className='mb-2'>
            <div
              className='bg-white opacity-90 text-black p-4 cursor-pointer flex justify-between items-center text-xl font-bold'
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className='bg-white opacity-90 text-black px-4 pb-1'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
