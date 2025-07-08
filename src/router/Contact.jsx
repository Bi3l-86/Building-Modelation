import whatsapp from "../assets/contact/whatsapp.png";
import instagram from "../assets/contact/instagram.png";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="All-services">
      <div className="section-header">
        <h2>Nossos Serviços</h2>
      </div>
      <div className="category-title">
        <h2>Serviços Principais</h2> {/* Sugestão de título mais claro */}
      </div>

      <div className="service-items-container">
        {" "}
        {/* Novo contêiner para os itens de serviço */}
        <div className="service-item">
          {" "}
          {/* Usando uma classe comum para reuso de estilo */}
          <Link to="/Service1">
            {" "}
            {/* Link envolvendo todo o conteúdo clicável */}
            <p>
              Modelagem de Produtos
              <br />
              (Protótipos)
            </p>
            {/* Você pode adicionar um ícone ou uma imagem aqui dentro do Link */}
          </Link>
        </div>
        <div className="service-item">
          <Link to="/Service2">
            <p>
              Arquitetura & Design
              <br />
              (Exteriores)
            </p>
            {/* Você pode adicionar um ícone ou uma imagem aqui dentro do Link */}
          </Link>
        </div>
        <div className="service-item">
          <Link to="/Service3">
            <p>
              Arquitetura & Design
              <br />
              (Interiores)
            </p>
            {/* Você pode adicionar um ícone ou uma imagem aqui dentro do Link */}
          </Link>
        </div>
        <div className="service-item">
          <Link to={"/Service4"}>
            <p>Personagens & Animação</p>
          </Link>
        </div>
        <div className="service-item">
          <Link to={"/Service5"}>
            <p>
              Personagens & Animação
              <br />
              (Rigging & Skinning)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
