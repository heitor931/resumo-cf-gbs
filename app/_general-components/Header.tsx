import { NavigationMenuDemo } from "./Navigation";

function Header() {
  return (
    <header className="flex items-center my-4 justify-between mx-2">
      <p className=" bg-white p-2 rounded-md"><span className="font-bold">CF</span> + <span className="font-bold">GBS</span> - 1º ano - Sala 3</p>
      <NavigationMenuDemo />
      
    </header>
  );
}

export default Header;
