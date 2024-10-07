import Head from 'next/head'; 
import type { Metadata }  from "next";
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

            {/* SVG WAVE SHAPE */}
      <div className="custom-shape-divider-bottom hidden md:block">
          <svg
            className="absolute bottom-0 w-full"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
      </div>

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
