import burgerMenu from "../assets/images/icon-menu.svg";
export default function NavBar() {
  return (
    <>
      <ul className="bg-blue-400 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-4 sm:items-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categorias</a>
        </li>
      </ul>
      <img
        className="w-10 h-4 cursor-pointer sm:hidden items-center"
        src={burgerMenu}
        alt="Menu Hamburgesa"
      />
    </>
  );
}
