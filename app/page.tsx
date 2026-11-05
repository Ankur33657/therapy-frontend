import Image from "next/image";
import ThemeToggle from "@/components/themeToggle";
import DesktopNavbar from "@/components/DesktopNavbar";
export default function Home() {
  return (
     <div>
      <ThemeToggle/>
      <DesktopNavbar/>
     </div>
  );
}
