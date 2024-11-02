import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex item-center justify-between bg-yellow-400 uppercase p-4 border-b border-stone-200 py-4">
      <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
 
      <SearchOrder />
      <Username/>
    </header>
  );
}

export default Header;
