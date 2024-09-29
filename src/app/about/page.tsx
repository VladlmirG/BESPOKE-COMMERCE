import Head from 'next/head'; 
import  { Metadata }  from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "BESPOKE XV & FORMAL | ABOUT",
  description: "BESPOKE XV & FORMAL About us Page",
};

const About = () => {
  return (
    <>
     <head>
    <meta property="og:title" content="BESPOKE XV & FORMAL | ABOUT"/>
    <meta property="og:description" content="BESPOKE XV & FORMAL About us Page"/>
    <meta property="og:image" content="#"/>
    <meta property="og:type" content="website"/>
    
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="BESPOKE XV & FORMAL | ABOUT"/>
    <meta name="twitter:description" content="BESPOKE XV & FORMAL About us Page"/>
    <meta name="twitter:image" content="#"/>
    </head>

    <div className='px-4 pt-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <img 
          src="/logo.png" 
          alt="About Us" 
          className='w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 md:mr-8 rounded-lg'
        />

        <div>
          <h1 className='text-2xl font-bold mb-4'>BESPOKE XV & FORMAL</h1>
          <p className='text-l'>At Bespoke, we have the dress made for you. Bespoke was born in November 2021, after a conversation led to the unraveling of made particularly for me. Our founder, Johanna Reyes, who has over 10 years of experience in the retail industry, and having seen customers buy their bespoke dress, dreamed of helping quinceñearas find the dress that bespoke to them.
          </p><br></br>

          <p className='text-l'>As retailers, at Bespoke you can find dresses from: Morilee, Mary's Bridal, Princesa By Ariana Vara and Q By DaVinci</p><br></br>

          <p className='text-l'>Please refer to our "Request an Appointment" page or visit us at: 22145 Katy Fwy, Ste C Katy, TX 77450.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
