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
