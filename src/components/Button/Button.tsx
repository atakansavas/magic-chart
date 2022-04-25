import { memo } from 'react';
import ButtonStyle from './button.styles';

interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: IButtonProps) {
  const { text, onClick = () => {}, ...rest } = props;
  return (
    <ButtonStyle onClick={props.onClick} {...rest}>
      {text}
    </ButtonStyle>
  );
}

export default memo(Button);
