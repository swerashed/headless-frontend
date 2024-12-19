import { Inter, Onest } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import AOSWrapper from "@/utils/AOSWrapper";
import Footer from "@/components/footer/Footer";
import NavbarWrapper from "@/components/header/NavbarWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });

export const metadata = {
  title: "AKS Khan Pharmaceuticals",
  description: "Expanding Health Horizons with Trusted Partners",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${inter.variable} ${onest.variable} relative font-inter antialiased`}
        >
          <AOSWrapper>
            <NavbarWrapper />
            {children}
            <Footer />
          </AOSWrapper>
        </body>
      </ReactLenis>
    </html>
  );
}
