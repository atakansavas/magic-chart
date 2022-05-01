import React, { useContext } from 'react';
import { Entity } from '../../@types/Entity';
import { GlobalContext } from '../../contexts/GlobalContext';
import { PointLabelStyle, PointStyle } from './chart.styles';

interface IPointProps {
  entity: Entity;
}

function Point(props: IPointProps) {
  //Create state for isDragging

  const { updateEntity } = useContext(GlobalContext);

  //Handle drag event of point
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { clientX, clientY } = e;

    updateEntity({
      ...props.entity,
      x: -clientX,
      y: clientY,
    });
  };

  return (
    <PointStyle
      top={props.entity.y}
      left={props.entity.x}
      draggable
      onDrag={handleDrag}
    >
      <PointLabelStyle>{props.entity.label}</PointLabelStyle>
    </PointStyle>
  );
}

export default Point;
