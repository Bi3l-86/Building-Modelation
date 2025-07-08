import Contacform from "../components/contactforme";
const Service4 = () => {
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
            <td>Modelagem de Personagens</td>
            <td>
              Criação de personagens 3D para jogos, animações, colecionáveis ou
              ilustração.
            </td>
            <td>
              Personagens de videogame, mascotes, figuras de ação, avatares.
            </td>
            <td>.FBX, .OBJ, .ZPR, .MA, .MB</td>
            <td>Por personagem</td>
            <td>R$ 1.500 - R$ 10.000+ (dependendo da complexidade)</td>
            <td>10-25</td>
            <td>Alta</td>
            <td>
              Conceito (esboços, turnarounds), expressões desejadas, estilo
              artístico.
            </td>
          </tr>
        </tbody>
      </table>
      <Contacform />
    </div>
  );
};

export default Service4;
