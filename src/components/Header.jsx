import logo from "../assets/images/logo.svg";
import NavBar from "./Navbar";

export const Header = () => {
  return (
    <header className="bg-red-500 flex place-content-between items-center">
      <img src={logo} alt="logo" />
      <NavBar />
    </header>
  );
};
