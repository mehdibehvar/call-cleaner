import Button from "@/app/components/button/button";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

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

const Card = ({ data }: { data: data }) => {
  return (
    <div className="flex flex-col relative bg-white rounded-md overflow-hidden shadow-md w-full">
      <Image
        src="/images/card/card1.jpg"
        alt="Sample Image"
        width={400}
        height={200}
        className="w-full h-auto"
      />
      <div className="flex flex-col gap-4 p-4">
        <div className="p-1 absolute top-0 left-0 right-0 flex justify-between w-full">
          <Button variant="surface" size="icon">
            <HeartIcon className="size-8 text-red-500" />
          </Button>
        </div>
        <h2>{data.name}</h2>
        <p className="text-sm text-gray">
          {data.short_description}
        </p>
        <div className="flex justify-between w-full">
          <span>rating</span>
          <Button>add to book list</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
