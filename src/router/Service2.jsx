import Contacform from "../components/contactforme";
const Service2 = () => {
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
            <td>Maquete Eletrônica (Exteriores)</td>
            <td>
              Modelagem 3D de edifícios e paisagens para visualização
              arquitetônica.
            </td>
            <td>Casas, edifícios comerciais, urbanismo, loteamentos.</td>
            <td>.FBX, .OBJ, .SKP, .DAE, .BIM</td>
            <td>Por m² / Por projeto</td>
            <td>
              R$ 15 - R$ 40/m² (área construída) ou R$ 2.000 - R$ 15.000+ por
              projeto
            </td>
            <td>10-30</td>
            <td>Média a Alta</td>
            <td>
              Plantas baixas, cortes, elevações, imagens de referência do
              local/estilo.
            </td>
          </tr>
        </tbody>
      </table>
      <Contacform />
    </div>
  );
};

export default Service2;
