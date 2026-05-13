import Navbar from "@/modules/common/components/mobile-navbar/mobile-navbar";
import Header from "../../../../modules/client/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-amber-600">
      <h1 className="text-amber-600">this is client layout</h1>
      {children}
    </div>
  );
};

export default Layout;
