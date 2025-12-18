import Navbar from "@/components/navbar/navbar";
import Header from "./components/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
        <Header/>
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;
