import { memo } from 'react';
import ButtonStyle from './button.styles';

interface IButtonProps {
  children: JSX.Element | React.ReactChild | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: IButtonProps) {
  const { children, onClick = () => {}, ...rest } = props;
  return (
    <ButtonStyle onClick={onClick} {...rest}>
      {children}
    </ButtonStyle>
  );
}

export default memo(Button);
