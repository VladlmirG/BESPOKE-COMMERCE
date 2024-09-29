import { Inter, Six_Caps, Montserrat, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";

// Importing and configuring the fonts
const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "700"], // Customize weights as needed
  variable: "--font-inter", 
});

const six_caps = Six_Caps({ 
  subsets: ["latin"], 
  weight: ["400"], // Customize weights as needed
  variable: "--font-six-caps", 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "700"], // Customize weights as needed
  variable: "--font-montserrat", 
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Customize weights as needed
  variable: "--font-poppins", 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Customize weights as needed
  variable: "--font-outfit" 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${six_caps.variable} ${montserrat.variable} ${poppins.variable} ${outfit.variable}`}>
      <WixClientContextProvider>
        <Navbar/>
        {children}
        <Footer/>
      </WixClientContextProvider>
      </body>
    </html>
  );
}
