import Image from "next/image";

interface data {
  name: string;
  email: string;
  phone: string;
  short_description: string;
  long_description: string;
  image: string;
  rating: number;
  id: string;
}

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="flex flex-col  bg-white rounded-sm overflow-hidden shadow-sm w-full">
       <Image
        src="/images/card/card1.png"
        alt="Sample Image"
        width={400}
        height={200}
        className="w-full h-auto"
      />
      <div className="absolute top-0 left-0 right-0 flex justify-between w-full">
        <span>icon</span>
      </div>
      <h2>clean call</h2>
      <p className="text-sm text-gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </p>
      <div className="flex justify-between w-full">
        <span>rating</span>
        <button>add to book list</button>
      </div>
      </div>
  );
};

export default Card;