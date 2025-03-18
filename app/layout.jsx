import { Inter, Onest } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import AOSWrapper from "@/utils/AOSWrapper";
import Footer from "@/components/footer/Footer";
import NavbarWrapper from "@/components/header/NavbarWrapper";
import { fetchMenus } from "@/graphql/pages/GET_MENUS";
import { Toaster } from "@/components/ui/sonner";
import { getThemeOptions } from "@/graphql/GET_THEME_OPTIONS";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });

export const metadata = {
  title: "AKS Khan Pharmaceuticals",
  description: "Expanding Health Horizons with Trusted Partners",
};

export default async function RootLayout({ children }) {
  const menuData = await fetchMenus("Primary Menu");
  const themeOptions = await getThemeOptions()
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${inter.variable} ${onest.variable} relative font-inter antialiased`}
        >
          <AOSWrapper>
            <NavbarWrapper themeOptions={themeOptions} menuData={menuData} />
            {children}
            <Footer />
          </AOSWrapper>
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}
