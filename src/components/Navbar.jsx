// import { Link } from "react-router-dom";
// import Logo from "../assets/Prancheta 1.png";
// import { IoIosMenu } from "react-icons/io";
// import navbarjs from "../js/navbar";

// <script src="navbarjs"></script>;
// var iconMenu = document.querySelector(".menu-icon");
// var ul = document.querySelector(".nav-links");
// iconMenu.addEventListener("click", () => {
//   alert("aaaaaaaaaaaaaaa");
// });

// const Navbar = () => {
//   return (
//     <div>
//       <nav>
//         <span className="Logotipo">
//           <img src={Logo} alt="Logo" />
//         </span>
//         <ul className="nav-links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/Galerry">Galerry</Link>
//           </li>
//           <li>
//             <Link to="/Contact">Contact</Link>
//           </li>
//         </ul>
//         <div className="menu-icon">
//           <IoIosMenu />
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../assets/Prancheta 1.png"; // Verifique o caminho real do seu logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // <--- Usamos o estado do React

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-header">
      <div className="Logotipo">
        <img id="Logo" src={Logo} alt="Logo" />
      </div>
      {/* A classe 'open' é adicionada/removida com base no estado */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Galerry
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
        </li>
      </ul>
      {/* O evento onClick é adicionado diretamente ao elemento JSX */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose /> : <IoIosMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
