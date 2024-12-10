import localFont from "next/font/local";
import "./globals.css";
import Navber from "@/components/Sharedpages/Navber";
import Footer from "@/components/Sharedpages/Footer";
import AuthProvider from "@/services/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sadia Perlar",
  description: "A special website for beautyful perler . It has a large  services in my shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`m-6 mx-8 bg-[#FFF8F5] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <Navber/>
        {children}
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
