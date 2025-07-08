import contactsinstagram from "../assets/contact/instagram.png";
import contactswhatsapp from "../assets/contact/whatsapp.png";
import { Link } from "react-router-dom"; // Certifique-se de que Link está importado

const Contacform = () => {
  return (
    <div className="contact-section">
      {" "}
      {/* Usei 'contact-section' para ser mais descritivo */}
      <h2 className="contact-title">Fale Conosco</h2>
      <p className="contact-description">
        Estamos prontos para transformar suas ideias em realidade 3D. Escolha a
        melhor forma de contato:
      </p>
      <div className="contact-items-container">
        {" "}
        {/* Contêiner para os itens de contato */}
        <div className="contact-item">
          {" "}
          {/* Classe comum para os itens */}
          {/* Link envolvendo a imagem para que a imagem seja clicável */}
          <Link
            to="https://w.app/building_modelation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={contactswhatsapp} alt="WhatsApp" />
            <p>WhatsApp</p> {/* Adicione um texto para o link */}
          </Link>
        </div>
        <div className="contact-item">
          {/* Link para o Instagram (substitua pelo seu perfil) */}
          <Link
            to="https://www.instagram.com/building_modelation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={contactsinstagram} alt="Instagram" />
            <p>Instagram</p> {/* Adicione um texto para o link */}
          </Link>
        </div>
        {/* Você pode adicionar mais itens de contato aqui, como e-mail, LinkedIn, etc. */}
      </div>
    </div>
  );
};

export default Contacform;
