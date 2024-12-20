import { Manrope } from "next/font/google";
import localfont from 'next/font/local'
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const Melodrama = localfont({
  src: [
    {
      path: "../public/font/Melodrama-Bold.ttf",
      weight: "700"
    },
    {
      path: "../public/font/Melodrama-Semibold.ttf",
      weight: "600"
    },
    {
      path: "../public/font/Melodrama-Medium.ttf",
      weight: "500"
    },
    {
      path: "../public/font/Melodrama-Regular.ttf",
      weight: "400"
    },
    {
      path: "../public/font/Melodrama-Light.ttf",
      weight: "300"
    }
  ],
  variable: "--font-melodrama"
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${Melodrama.variable} font-manrope antialiased bg-dark text-white flex flex-col justify-center items-center relative`}
      >
        <div className=" w-full h-screen bg-dark p-3">
        {children}
        </div>
      </body>
    </html>
  );
}