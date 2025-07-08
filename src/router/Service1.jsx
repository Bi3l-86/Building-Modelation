import Contacform from "../components/contactforme";
const Service1 = () => {
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
            <td>Modelagem de Protótipos</td>
            <td>
              Criação de modelos 3D precisos para prototipagem e visualização de
              produtos.
            </td>
            <td>Peças de maquinário, eletrônicos, embalagens.</td>
            <td>.STEP, .IGES, .STL, .OBJ</td>
            <td>Por hora / Por projeto</td>
            <td>
              R$ 80 - R$ 250/hora ou R$ 800 - R$ 5.000+ por projeto
              pequeno/médio
            </td>
            <td>5-15</td>
            <td>Média a Alta</td>
            <td>Esboços, medidas, especificações, referências visuais.</td>
          </tr>
        </tbody>
      </table>
      <Contacform />
    </div>
  );
};

export default Service1;
