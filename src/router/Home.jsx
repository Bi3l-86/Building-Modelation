import House from "../assets/Home imgs/casa.png";
import img2 from "../assets/Home imgs/img 2.png";
import img3 from "../assets/Home imgs/img3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="All">
      <div className="Container1">
        <img id="img2" src={img2} alt="Casa 3D" />
        <h3>Transforme agora suas Ideias em Realidade 3D.</h3>
      </div>
      <div className="container2">
        <img id="home_casa" src={House} alt="" />
        <h3>Do Conceito ao 3D: Soluções Sob Medida para Seu Projeto.</h3>
      </div>
      <div className="container3">
        <img id="img3" src={img3} alt="" />
        <h3>Dê vida às suas ideias em 3D</h3>
        <Link to={"/Contact"}>
          <button type="button">Comece seu projeto conosco</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
