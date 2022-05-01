import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 2px solid ${(props) => props.theme.colors.GRAY_500};
  box-sizing: content-box;
  position: relative;
`;

interface PointStyleProps {
  top: number;
  left: number;
}

export const PointStyle = styled.div<PointStyleProps>`
  bottom: ${(props) => props.top + '%'};
  left: ${(props) => props.left + '%'};
  background-color: ${(props) => props.theme.colors.BLUE_500};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
`;

export const PointLabelStyle = styled.div`
  color: ${(props) => props.theme.colors.BLUE_500};
  position: absolute;
  bottom: 0px;
  right: 0px;
  transform: translate(-70%, 100%);
`;
