import { ReactNode } from "react";
import DesktopNavbar from "@/components/DesktopNavbar";
import Footer from "@/components/Footer";
const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <DesktopNavbar/>
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default UserLayout;