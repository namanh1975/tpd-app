import Image from "next/image";
import ModeToggle from "./ModeToggle";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="  bg-white dark:bg-gray-950 py-7">
      <Navbar />
    </header>
  );
};

export default Header;
