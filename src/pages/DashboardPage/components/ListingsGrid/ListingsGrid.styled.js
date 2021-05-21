import styled from "styled-components";

import { Table } from "antd";

export const TableStyled = styled(Table)`
  & .ant-table {
    background: none;

    & table {
      border-collapse: separate;
      border-spacing: 0 7px;
    }

    & tr {
      cursor: pointer;
    }

    & td {
      border: 0;
      background-color: var(--colors-blank);
    }

    & td,
    th {
      border-top: 1px solid var(--colors-athens-gray);
      border-bottom: 1px solid var(--colors-athens-gray);

      &:first-child {
        border-left: 1px solid var(--colors-athens-gray);
      }

      &:last-child {
        border-right: 1px solid var(--colors-athens-gray);
      }
    }
  }
`;
