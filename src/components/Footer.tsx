import Image from "next/image";
import Link from "next/link";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gradient-to-r from-pink-100 to-white-500 text-bluey text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">

        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            {/* <div className="text-2xl tracking-wide">LAMA</div> */}
            <Image src="/logo.png" alt="" width={250} height={250} />
          </Link>
          <p>
             22145 Katy Fwy c, Katy, TX 77450, USA
          </p>

          <Link href="mailto:Johanna@bespokequince.com">
            <span className="font-semibold hover:text-hovr"> Johanna@bespokequince.com</span>
          </Link>
          <Link href="tel:+18324416021">
            <span className="font-semibold hover:text-hovr">+1 (832) 441 6021</span>
          </Link>

          <div className="flex gap-6">
         <a href="https://www.facebook.com/bespokequince" target="_blank">
    <FacebookIcon style={{ width: 16, height: 16 }} />
  </a>
  <a href="https://www.instagram.com/bespokequince/?hl=en" target="_blank">
    <InstagramIcon style={{ width: 16, height: 16 }} />
  </a>
  <a href="https://www.whatsapp.com" target="_blank">
    <WhatsAppIcon style={{ width: 16, height: 16 }} />
  </a>
  <a href="https://www.tiktok.com" target="_blank">
    <img src='/tiktok.svg' style={{ width: 16, height: 16 }} />
  </a>
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/3">
          {/* <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div> */}
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">EXPLORE</h1>
            <div className="flex flex-col gap-6">
              <Link href="/list?cat=accessories" className="hover:text-hovr">Accessories</Link>
              <Link href="/list?cat=best-sellers" className="hover:text-hovr">Best Sellers</Link>
              <Link href="/list?cat=children" className="hover:text-hovr">Children</Link>
              <Link href="/list?cat=new-collection" className="hover:text-hovr">New Collection</Link>
              <Link href="/list?cat=prom" className="hover:text-hovr">PROM</Link>
              <Link href="/list?cat=quinceanera" className="hover:text-hovr">Quinceanera</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">INFO</h1>
            <div className="flex flex-col gap-6">
              <Link href="/contact" className="hover:text-hovr">Contact</Link>
              <Link href="/about" className="hover:text-hovr">About</Link>
              <Link href="/terms-of-use" className="hover:text-hovr">Terms of Use</Link>
              <Link href="/shipping-info" className="hover:text-hovr">Shipping Info</Link>
              <Link href="/sales-refunds" className="hover:text-hovr">Sales & Refunds</Link>
              <Link href="/privacy-policy" className="hover:text-hovr">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 justify-center">
          {/* <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-cart text-white">JOIN</button>
          </div> */}

          <span className="font-semibold">SECURE PAYMENTS</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>


      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="flex flex-col justify-between gap-2">
          <span>© 2024 BESPOKE XV & FORMAL</span>
          <span className="font-extralight text-xs text-gray">Site developed by
          <Link href="https://vladimirgotay.com/" target="_blank" className="hover:text-black"> Vladimir G</Link>
          </span>
        </div>
        
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            {/* <span className="text-gray-500 mr-4">Language</span> */}
            <span className="font-medium">United States Of America</span>
          </div>
          {/* <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

