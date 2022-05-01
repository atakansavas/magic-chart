import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Container } from './chart.styles';
import Point from './Point';

interface IChartProps {}

function Chart(props: IChartProps) {
  const { entities } = useContext(GlobalContext);

  return (
    <Container>
      {entities.map((entity) => (
        <Point key={entity.id} entity={entity} />
      ))}
    </Container>
  );
}

export default Chart;
