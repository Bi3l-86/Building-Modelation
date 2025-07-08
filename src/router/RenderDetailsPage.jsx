// src/pages/RenderDetailsPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom"; // Importe useParams para ler o ID da URL

// IMPORTANTE: Importe SUAS IMAGENS GRANDES ou REAPROVEITE as pequenas aqui.
// Eu vou importar as mesmas que você já tem para simplificar o exemplo,
// mas em um projeto real, você poderia ter versões de alta resolução.
import render1 from "../assets/gallery/render-1.png";
import render2 from "../assets/gallery/render-2.png";
import render3 from "../assets/gallery/render-3.png";
import personagem1 from "../assets/gallery/personagem__1.jpg";
import personagem2 from "../assets/gallery/personagem__2.jpg";

const RenderDetailsPage = () => {
  // useParams() nos dá um objeto com os parâmetros da URL.
  // No nosso App.jsx, definimos a rota como "/gallery/details/:id"
  // Então, se a URL for "/gallery/details/render-1",
  // 'id' dentro de useParams() será "render-1".
  const { id } = useParams(); // Pega o valor do ":id" da URL

  // Agora, precisamos de uma forma de encontrar os dados da imagem
  // com base nesse 'id'. Vamos criar um objeto simples para isso.
  // Em um projeto real, isso viria de um banco de dados, ou de um array grande.
  const allRenderData = {
    "render-1": {
      title: "Protótipo de Cenário: Smartphone Futurista",
      description:
        "Modelagem de alta precisão de um protótipo de smartphone, ideal para visualização de design industrial e simulações. Detalhes minuciosos em câmera, bordas e acabamento.",
      image: render1, // Usa a imagem importada
    },
    "render-2": {
      title: "Arquitetura Interiores: Saloon",
      description:
        "Visualização 3D fotorrealista de um Saloon bar. Destaque para o paisagismo integrado e a iluminação natural, criando uma atmosfera convidativa.",
      image: render2, // Usa a imagem importada
    },
    "render-3": {
      title: "Design de exteriores: Casa Moderna",
      description:
        "Renderização detalhada de uma Casa com design moderno. Exploração de texturas, iluminação e posicionamento de para criar um espaço elegante.",
      image: render3, // Usa a imagem importada
    },
    personagem1: {
      // O ID aqui deve ser o mesmo que você colocou no Link.to
      title: "Personagem 3D: Guerreiro Estilizado",
      description:
        "Criação de personagem estilizado para jogos, com foco em otimização de polígonos e texturas vibrantes. Ideal para ambientes de fantasia.",
      image: personagem1, // Usa a imagem importada
    },
    personagem2: {
      // O ID aqui deve ser o mesmo que você colocou no Link.to
      title: "Modelagem de Personagens Realistas: Estudo de Anatomia",
      description:
        "Estudo aprofundado de personagem humano com foco em detalhes de anatomia e renderização de pele fotorrealista. Perfeito para produções de alta qualidade.",
      image: personagem2, // Usa a imagem importada
    },
    // Adicione TODOS os seus renders aqui, com IDs que correspondam aos seus Link.to
  };

  // Encontra os dados do render atual usando o 'id' da URL
  const currentRender = allRenderData[id];

  // Se o ID da URL não corresponder a nenhum render, exibe uma mensagem de erro
  if (!currentRender) {
    return (
      <div
        style={{
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#0A192F",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <h2 style={{ fontSize: "2em" }}>Opa! Render não encontrado.</h2>
        <p>Não conseguimos encontrar os detalhes para o item "{id}".</p>
        <Link
          to="/gallery"
          style={{
            color: "#3B82F6",
            textDecoration: "none",
            fontSize: "1.2em",
          }}
        >
          Voltar para a Galeria
        </Link>
      </div>
    );
  }

  // Se os dados forem encontrados, exibe os detalhes do render
  return (
    <div
      style={{
        padding: "50px",
        backgroundColor: "#0A192F",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: "2.8em",
          marginBottom: "30px",
        }}
      >
        {currentRender.title}
      </h1>
      <div style={{ marginBottom: "30px", maxWidth: "900px", width: "100%" }}>
        <img
          src={currentRender.image}
          alt={currentRender.title}
          style={{
            maxWidth: "100%",
            height: "auto", // Ainda assim, importante para proporção
            // Exemplo: garante que a imagem tenha pelo menos 400px de altura
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
          }}
        />
      </div>
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px auto",
          textAlign: "justify",
          lineHeight: "1.8",
          fontSize: "1.1em",
        }}
      >
        {currentRender.description}
      </p>
      <Link
        to="/gallery"
        style={{
          backgroundColor: "#3B82F6",
          color: "white",
          padding: "15px 30px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Voltar para a Galeria
      </Link>
    </div>
  );
};

export default RenderDetailsPage;
