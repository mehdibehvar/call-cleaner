import BubbleBox from "@/app/components/bubble-box/bubble-box";
import SectionHeader from "../components/section-header";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SectionHeader title="Hello World" />
      <main className="flex flex-col items-center justify-center gap-4 ">
        {[1, 2, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div key={item} className="w-full">
            <SectionHeader title="Hello World" />
           <div className="mt-4 w-full">
             <BubbleBox />
           </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
