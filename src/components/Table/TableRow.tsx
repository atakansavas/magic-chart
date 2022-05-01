import React, { useContext } from 'react';
import { Entity } from '../../@types/Entity';
import { GlobalContext } from '../../contexts/GlobalContext';
import Button from '../Button';
import { TableCellStyle } from './table.styles';

interface ITableRowProps {
  entity: Entity;
}

const TableRow: React.FC<ITableRowProps> = ({ entity }) => {
  const { removeEntity, updateEntity } = useContext(GlobalContext);

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    removeEntity(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateEntity({ ...entity, [e.target.name]: e.target.value });
  };

  return (
    <tr>
      <TableCellStyle>
        <input
          type='text'
          name='label'
          value={entity.label}
          onChange={handleChange}
        />
      </TableCellStyle>
      <TableCellStyle>
        <input
          type='number'
          max='100'
          min='0'
          name='x'
          value={entity.x}
          onChange={handleChange}
        />
      </TableCellStyle>
      <TableCellStyle>
        <input
          type='number'
          max='100'
          min='0'
          name='y'
          value={entity.y}
          onChange={handleChange}
        />
      </TableCellStyle>
      <TableCellStyle hasButton>
        <Button onClick={(e) => handleDelete(e, entity.id)}>Delete</Button>
      </TableCellStyle>
    </tr>
  );
};

export default TableRow;
