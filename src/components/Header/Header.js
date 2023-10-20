import logoD from "../../contexts/letter-d_5943371.png";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header center">
      <Link to="/">
        <img src={logoD} alt="logo" id="d" />
      </Link>

      <Navbar />
    </header>
  );
};

export default Header;
