import styled from 'styled-components';

// export default styled.button`

export default styled.button`
  color: #000;
  background-color: ${(props) => props.theme.colors.GRAY_100};
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.colors.GREY_500};
    color: ${(props) => props.theme.colors.WHITE};
`;
