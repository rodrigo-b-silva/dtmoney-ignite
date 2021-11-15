import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.999</td>
            <td>Desenvolvimento</td>
            <td>15/11/2021</td>
          </tr>
          <tr>
            <td>Aluguel de casa</td>
            <td className="withdraw">- R$199</td>
            <td>Aluguel</td>
            <td>15/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}