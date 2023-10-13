import { header } from "../../portfolio";
import logoD from "../../contexts/letter-d_5943371.png";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { title } = header;

  return (
    <header className="header center">
      <img src={logoD} alt="logo" id="d" />
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" id="d">
        <defs>
          <clipPath id="a">
            <path d="M0 38h38V0H0v38Z"></path>
          </clipPath>
        </defs>
        <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
          <path
            fill="#3b88c3"
            d="M37 5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V5Z"
          ></path>
          <path
            fill="#fff"
            d="M14.707 12.28h3.132c4 0 5.828 2.945 5.828 6.666 0 3.969-1.859 6.852-6.138 6.852h-2.822V12.28Zm-4.65 15.409c0 1.427.992 2.388 2.387 2.388h5.147c6.946 0 10.914-4.465 10.914-11.348 0-6.511-4.216-10.728-10.604-10.728h-5.395c-1.024 0-2.449.558-2.449 2.325v17.363z"
          ></path>
        </g>
      </svg> */}

      <Navbar />
    </header>
  );
};

export default Header;
