import { memo } from 'react';
import ButtonStyle from './button.styles';

interface IButtonProps {
  text: string;
  onClick?: () => void;
}

function Button(props: IButtonProps) {
  const { text, onClick = () => {}, ...rest } = props;
  return (
    <ButtonStyle onClick={() => onClick()} {...rest}>
      {text}
    </ButtonStyle>
  );
}

export default memo(Button);