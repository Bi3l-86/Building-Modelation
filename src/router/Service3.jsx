import Contacform from "../components/contactforme";
const Service3 = () => {
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
            <td>Maquete Eletrônica (Interiores)</td>
            <td>
              Modelagem 3D detalhada de espaços internos com mobiliário e
              decoração.
            </td>
            <td>
              Ambientes residenciais, escritórios, lojas, estandes de feira.
            </td>
            <td>.FBX, .OBJ, .SKP, .DAE</td>
            <td>Por ambiente / Por m²</td>
            <td>
              R$ 500 - R$ 3.000+ por ambiente ou R$ 20 - R$ 60/m² (área útil)
            </td>
            <td>7-20</td>
            <td>Média a Alta</td>
            <td>
              Plantas baixas, especificações de mobiliário, acabamentos, layout
              desejado.
            </td>
          </tr>
        </tbody>
      </table>
      <Contacform />
    </div>
  );
};

export default Service3;
