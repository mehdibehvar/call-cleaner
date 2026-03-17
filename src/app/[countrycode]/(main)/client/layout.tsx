import Navbar from "@/components/navbar/navbar";
import Header from "./components/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
