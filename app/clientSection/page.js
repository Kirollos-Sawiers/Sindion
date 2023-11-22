import Image from "next/image";
import { Poppins } from "next/font/google";
import clientsectionbg from "@/public/images/clientsectionbg.png";
import pic1 from "@/public/images/pic1.png";
import pic2 from "@/public/images/pic2.png";
import pic3 from "@/public/images/pic3.png";
import Card from "../components/card/page";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const gelatoFont = localFont({
  src: "../../public/fonts/gelato.ttf",
  display: "swap",
  variable: "--font-gelato",
});
export default function ClientTestmonials() {
  return (
    <>
      <div className="relative py-5">
        <Image
          className="w-full h-auto"
          src={clientsectionbg}
          alt="Backgroundimg"
        />
        <div className="absolute inset-0 top-44 justify-center">
          <p
            className={`${poppins.className} text-center font-semibold text-base text-blue-500 opacity-100`}
          >
            Clients&apos; Testimonials
          </p>
        </div>
        <div className="absolute inset-0 top-56 justify-center">
          <p
            className={`${gelatoFont.className} text-center block font-semibold text-3xl tracking-widest text-white opacity-100`}
          >
            Unforgettable Travel Experiences
          </p>
        </div>
        <div className="absolute inset-0 top-96 px-20">
          <div className="flex justify-center ">
            <Card pic={pic1} bg={"bg-gray-100"} textColor={"text-blue-900"} />
            <Card pic={pic2} bg={"bg-red-400"} textColor={"text-white"} />
            <Card pic={pic3} bg={"bg-gray-100"} textColor={"text-blue-900"} />
          </div>
        </div>
      </div>
    </>
  );
}
