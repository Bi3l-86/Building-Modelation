// import { Link } from "react-router-dom";
// import render1 from "../assets/gallery/render-1.png";
// import render2 from "../assets/gallery/render-2.png";
// import render3 from "../assets/gallery/render-3.png";
// import rendercaracter1 from "../assets/gallery/personagem__1.jpg";
// import rendercaracter2 from "../assets/gallery/personagem__2.jpg";

// const Gallery = () => {
//   return (
//     <div className="gallerry">
//       <div className="box-conteiner">
//         <Link to={"render-1.png"}>
//           <img src={render1} alt="" />
//         </Link>
//         <Link to={"render-.png"}>
//           <img src={render2} alt="" />
//         </Link>
//         <Link to={"render-1.png"}>
//           <img src={render3} alt="" />
//         </Link>
//         <Link to={"render-1.png"}>
//           <img src={rendercaracter1} alt="" />
//         </Link>
//         <Link to={"render-1.png"}>
//           <img src={rendercaracter2} alt="" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import { Link } from "react-router-dom";
import render1 from "../assets/gallery/render-1.png";
import render2 from "../assets/gallery/render-2.png";
import render3 from "../assets/gallery/render-3.png";
import personagem1 from "../assets/gallery/personagem__1.jpg";
import personagem2 from "../assets/gallery/personagem__2.jpg";

const Gallery = () => {
  return (
    <div className="gallery-section">
      {" "}
      {/* Usei 'gallery-section' para evitar conflito com 'gallery' */}
      <h1 className="gallery-main-title">Nossa Galeria de Trabalhos</h1>{" "}
      {/* Título principal da galeria */}
      <p className="gallery-description">
        Explore nossos modelos 3D realistas e projetos inovadores.
      </p>
      <div className="gallery-grid-container">
        {" "}
        {/* Contêiner da grade para os itens */}
        <div className="gallery-item">
          {" "}
          {/* Item individual da galeria */}
          {/* O 'to' do Link deve apontar para a rota real de detalhes do item */}
          <Link to="/gallery/details/render-1">
            <img src={render1} alt="Render de Cenário" />
            <div className="item-overlay">
              <p>Modelagem de Cenário</p>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link to="/gallery/details/render-2">
            <img src={render2} alt="Render de Arquitetura Exterior" />
            <div className="item-overlay">
              <p>Visualização Arquitetônica</p>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link to="/gallery/details/render-3">
            <img src={render3} alt="Render de Interiores" />
            <div className="item-overlay">
              <p>Design de Interiores 3D</p>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link to="/gallery/details/personagem-1">
            <img src={personagem1} alt="Personagem 3D: Estilizado" />
            <div className="item-overlay">
              <p>Personagens 3D</p>
            </div>
          </Link>
        </div>
        <div className="gallery-item">
          <Link to="/gallery/details/personagem-2">
            <img src={personagem2} alt="Personagem 3D: Realista" />
            <div className="item-overlay">
              <p>Modelagem de Personagens</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
