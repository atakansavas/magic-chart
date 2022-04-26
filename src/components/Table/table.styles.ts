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
  ${({ width }) => css`
    background-color: ${(props) => props.theme.colors.BLUE_100};
    color: ${(props) => props.theme.colors.WHITE};
    width: ${width || '6rem'};
    border-radius: 4px;
  `}
`;

interface TableCellProps {
  hasButton?: boolean;
}

export const TableCellStyle = styled.td<TableCellProps>`
  ${({ hasButton }) => css`
    border-radius: 2px;
    font-size: 14px;

    input {
      width: 100%;
    }
  `}
`;
