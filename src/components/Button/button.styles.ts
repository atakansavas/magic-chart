import styled from 'styled-components';

// export default styled.button`

export default styled.button`
  color: #000;
  background-color: ${(props) => props.theme.colors.BLUE_500};
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  &:hover {
    color: red;
`;
