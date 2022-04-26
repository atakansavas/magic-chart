import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
`;

export const TableStyle = styled.table`
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 2px 0;
`;

interface TableHeaderProps {
  width?: string;
}

export const TableHeaderCellStyle = styled.th<TableHeaderProps>`
  ${({ width, theme: { colors } }) => css`
    background-color: ${colors.LIGHT_BLUE};
    color: ${colors.WHITE};
    width: ${width || '6rem'};
    border-radius: 4px;
  `}
`;

interface TableCellProps {
  hasButton?: boolean;
}

export const TableCellStyle = styled.td<TableCellProps>`
  ${({ hasButton, theme: { colors } }) => css`
    border: ${!hasButton && '1px solid ' + colors.LIGHT_BLUE};
    padding: ${!hasButton && '5px 10px'};
    border-radius: 4px;
    font-family: sans-serif;
    font-size: 14px;
    input {
      border: 0;
      padding: 0;
      width: 100%;
      font-size: inherit;
    }
  `}
`;
