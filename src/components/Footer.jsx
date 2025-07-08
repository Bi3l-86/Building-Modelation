import Logo from "../assets/Prancheta 1.png";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <ul>
          <img id="img-footer" src={Logo} alt="" />
          <p>BuildingModelation</p>
        </ul>
        <div className="redes-sociais">
          <ul>
            <FaInstagram />
            <Link to={"https://w.app/building_modelation"}>
              <FaWhatsapp />
            </Link>
            <Link to={"https://www.youtube.com/@BuildingModelation"}>
              <AiOutlineYoutube />
            </Link>
          </ul>
        </div>
        <ul>
          <h3>link</h3>
          <li>
            <Link id="link-home-footer" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="link-home-footer" to="/gallery">
              Galerry
            </Link>
          </li>
          <li>
            <Link id="link-home-footer" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
