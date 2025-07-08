import Contacform from "../components/contactforme";
const Service5 = () => {
  return (
    <div className="services-table-section">
      <h2>Detalhes dos Nossos Serviços e Preços</h2>
      <table>
        <thead>
          <tr>
            <th>Nome do Serviço</th>
            <th>Descrição Detalhada do Serviço</th>
            <th>Exemplo de Aplicação/Uso</th>
            <th>Tipo de Entrega (Formato)</th>
            <th>Precificação (Base)</th>
            <th>Estimativa de Preço (R$)</th>
            <th>Prazo Estimado (dias úteis)</th>
            <th>Nível de Complexidade</th>
            <th>Pré-requisitos (cliente)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rigging & Skinning</td>
            <td>
              Criação de esqueletos (rigs) e vinculação de malha para animação
              suave de personagens.
            </td>
            <td>Personagens para jogos, filmes de animação, comerciais.</td>
            <td>.FBX, .MA, .MB</td>
            <td>Por personagem / Por sistema</td>
            <td>R$ 800 - R$ 4.000+ por personagem</td>
            <td>5-15</td>
            <td>Alta</td>
            <td>Modelo 3D de personagem finalizado, com topologia limpa.</td>
          </tr>
        </tbody>
      </table>
      <Contacform />
    </div>
  );
};
export default Service5;
