import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { TableHeaderCellStyle, TableStyle } from './table.styles';
import TableRow from './TableRow';

interface ITableProps {}

function Table(props: ITableProps) {
  const { entities } = useContext(GlobalContext);

  return (
    <TableStyle>
      <thead>
        <tr>
          <TableHeaderCellStyle width='15rem'>Label</TableHeaderCellStyle>
          <TableHeaderCellStyle>Vision</TableHeaderCellStyle>
          <TableHeaderCellStyle>Ability</TableHeaderCellStyle>
          <TableHeaderCellStyle>Delete</TableHeaderCellStyle>
        </tr>
      </thead>
      <tbody>
        {entities.map((entity) => (
          <TableRow key={entity.id} entity={entity} />
        ))}
      </tbody>
    </TableStyle>
  );
}

export default Table;
