import Image from "next/image";
import star from "@/public/images/star.png";

export default function Card(props) {
  return (
    <>
      <main className="hover:-translate-y-8 duration-500">
        <div className={`w-[320px] h-[300px] ${props.bg} rounded-3xl m-2`}>
          <div className="relative">
            <div
              className="w-[100px] h-[100px] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{ marginTop: "-50px" }}
            >
              <Image
                src={props.pic}
                alt="Circular Image"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="w-[320px] absolute top-24">
            <p className={`text-xs text-center px-10 ${props.textColor}`}>
              I was looking for a unique travel experience, and I found it on
              Ithaka. I booked a private tour of the Pyramids with a local
              guide, and it was amazing! The guide was knowledgeable and
              passionate about Egypt.
            </p>
            <p className={`text-xl text-center px-10 pt-2 ${props.textColor}`}>
              John Smith
            </p>
            <p className={`text-xs text-center px-10 ${props.textColor}`}>
              Travel Blogger
            </p>
            <div className="flex justify-center pt-5">
              <Image
                src={star}
                alt="starImage"
                className="w-5 h-5 object-cover rounded-full ml-1"
              />
              <Image
                src={star}
                alt="starImage"
                className="w-5 h-5 object-cover rounded-full ml-1"
              />
              <Image
                src={star}
                alt="starImage"
                className="w-5 h-5 object-cover rounded-full ml-1"
              />
              <Image
                src={star}
                alt="starImage"
                className="w-5 h-5 object-cover rounded-full ml-1"
              />
              <Image
                src={star}
                alt="starImage"
                className="w-5 h-5 object-cover rounded-full ml-1"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
