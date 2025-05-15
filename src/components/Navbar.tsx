import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import { spacing } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Tooltip from "@mui/material/Tooltip";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    // MAIN NAVBAR WRAPPER
    <div className="relative">
      {/* DESKTOP VARIANT */}
      <div className="hidden md:flex flex-col items-center">
        {/* TOP SECTION: NAVICONS, LOGO, SEARCH BAR */}
        <div className="flex justify-between items-center w-full  py-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          {/* RIGHT ICONS (SOCIAL) */}
          <div className="flex gap-4">
          {/* Add social icons here if needed */}
          <Tooltip title="Location" arrow>
          <a href="https://maps.app.goo.gl/XiNUJv9b5uWQyLtq7" target="_blank">
           <LocationOnIcon className="nav-social"  sx={{ p: 1.5 }} />
          </a>
          </Tooltip>

          <Tooltip title="Contact Us via Email" arrow>
          <a href="mailto:Johanna@bespokequince.com" target="_blank">
          <EmailIcon className="nav-social" sx={{ p: 1.5 }} />
          </a>
          </Tooltip>

          <Tooltip title="Contact Us via WhatsApp" arrow>
         <a href="https://api.whatsapp.com/send?phone=18324416021&text-Hello,%20more%20information!" target="_blank">
         <WhatsAppIcon className="nav-social" sx={{ p: 1.5 }} />
         </a>
         </Tooltip>

         <Tooltip title="Call Us" arrow>
         <a href="tel:+18324416021" target="_blank">
         <LocalPhoneIcon className="nav-social" sx={{ p: 1.5 }} />
         </a>
         </Tooltip>
          {/* Add more icons as needed */}
          </div>

        {/* LOGO: Centered using flex-grow and alignment adjustments */}
          <div className="flex-grow flex justify-center items-center ml-24">
            <Link href="/">
              <Image src="/logo.png" alt="Bespoke Logo" width={150} height={150} className="object-contain" />
            </Link>
          </div>

          {/* NAVICONS */}
          <div className="flex items-center gap-4">
          <SearchBar />
          <NavIcons />
         </div>
        </div>

        {/* BOTTOM SECTION: LINKS */}
        <div className="montserrat-font w-full flex justify-center items-center gap-8 bg-pinky pt-5">
          <Link href="/" className="nav-links text-bluey">HOME</Link>
          <Link href="/list?cat=best-sellers" className="nav-links text-bluey">BEST SELLERS</Link>
          <Link href="/list?cat=new-collection" className="nav-links text-bluey">NEW COLLECTION</Link>
          <Link href="/list?cat=quinceanera" className="nav-links text-bluey">QUINCEANERA</Link>
          <Link href="/list?cat=prom" className="nav-links text-bluey">PROM</Link>
          <Link href="/list?cat=special-ocassion" className="nav-links text-bluey">SPECIAL OCASSION</Link>
          <Link href="/list?cat=tuxedos-suits" className="nav-links text-bluey">TUXEDOS & SUITS</Link>
          <Link href="/list?cat=children" className="nav-links text-bluey">CHILDREN</Link>
          <Link href="/list?cat=accessories" className="nav-links text-bluey">ACCESSORIES</Link>

          {/* <div className="relative group">
              <div className="flex items-center">
                <Link href="/list?cat=all-products" className="nav-links text-bluey">STORE</Link>
              </div>
              <div className="absolute rounded-md text-center left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col subm shadow-lg gap-2 z-10 w-56">
              <Link href="/list?cat=accessories" className="text-bluey px-4 py-2 hover:font-semibold">Accessories</Link>
                <Link href="/list?cat=best-sellers" className="text-bluey px-4 py-2 hover:font-semibold">Best Sellers</Link>
                <Link href="/list?cat=children" className="text-bluey px-4 py-2 hover:font-semibold">Children</Link>
                <Link href="/list?cat=new-collection" className="text-bluey px-4 py-2 hover:font-semibold">New Collection</Link>
                <Link href="/list?cat=prom" className="text-bluey px-4 py-2 hover:font-semibold">PROM</Link>
                <Link href="/list?cat=quinceanera" className="text-bluey px-4 py-2 hover:font-semibold">Quinceanera</Link>
                <Link href="/list?cat=special-ocassion" className="text-bluey px-4 py-2 hover:font-semibold">Special Ocassion</Link>
                <Link href="/list?cat=tuxedos-suits" className="text-bluey px-4 py-2 hover:font-semibold">Tuxedos & Suits</Link>
              </div>
            </div> */}
            
          <Link href="/about" className="nav-links text-bluey">ABOUT</Link>
          <Link href="/contact" className="nav-links text-bluey">CONTACT</Link>
        </div>
      </div>

      {/* MOBILE VARIANT */}
      <div className="flex md:hidden items-center justify-between h-20 px-4 md:px-8 bg-gradient-to-r from-pink-100 to-white-500">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Bespoke Logo" width={120} height={120} />
        </Link>
        <div className="flex items-center gap-4">
          <NavIcons />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
