import Head from 'next/head'; 
import type { Metadata } from "next";
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export const metadata: Metadata = {
  title: "BESPOKE XV & FORMAL | Contact Us",
  description: "Bespoke XV & Formal contact page",
};


const Contact = () => {
  return (
    <>
<head>
    <meta property="og:title" content="BESPOKE XV & FORMAL | Contact Us"/>
    <meta property="og:description" content="Bespoke XV & Formal contact page"/>
    <meta property="og:image" content="/favicon.ico"/>
    <meta property="og:type" content="website"/>
    
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="BESPOKE XV & FORMAL | Contact Us"/>
    <meta name="twitter:description" content="Bespoke XV & Formal contact page"/>
    <meta name="twitter:image" content="/favicon.ico"/>
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

    <div className="px-4 pt-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <img
            src="/contacto.jpg" // replace with your image URL
            alt="Contact"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We are at your service.
          </p>

          <div className="text-gray-700">
            <p className="mb-8">
              <strong className='p-2'>
                <PlaceIcon className='contact-icon'/>
              </strong> 
              <a href="https://maps.app.goo.gl/6nfwFa6EnWJVNUxP7" target="_blank" rel="noopener noreferrer" className="text-hovr hover:text-button">
                22145 Katy Fwy c, Katy, TX 77450, USA
              </a>
            </p>
            <p className="mb-8">
              <strong className='p-2'>
                <PhoneIcon className='contact-icon'/>  
              </strong> 
              <a href="tel:+18324416021" className="text-hovr hover:text-button">
              +1 832 441 6021
              </a>
            </p>
            <p className="mb-8">
              <strong className='p-2'>
              <WhatsAppIcon className='contact-icon'/>
              </strong> 
              <a href="https://wa.me/++18324416021" target="_blank" className="text-hovr hover:text-button">
                WhatsApp
              </a>
            </p>
            <p className="mb-8">
              <strong className='p-2'>
               <EmailIcon className='contact-icon'/>
              </strong> 
              <a href="mailto:Johanna@bespokequince.com" className="text-hovr hover:text-button">
                 Johanna@bespokequince.com
              </a>
            </p>
            {/* <p className="mb-8">
              <strong>Hours:</strong> Monday - Friday, 9am - 5pm
            </p> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
