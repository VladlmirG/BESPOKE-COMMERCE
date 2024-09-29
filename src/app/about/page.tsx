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
          <p className='text-l'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p><br></br>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
