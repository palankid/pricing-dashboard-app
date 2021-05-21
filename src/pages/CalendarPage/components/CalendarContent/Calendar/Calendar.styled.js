import styled from "styled-components";
import { Calendar as AntdCalendar } from "antd";

import Text from "components/Text";

export const HeaderTextStyled = styled(Text)`
  color: var(--colors-boulder);
`;

export const CalendarStyled = styled(AntdCalendar)`
  margin-bottom: 50px;

  & > .ant-picker-panel {
    margin-top: 20px;
  }

  & .ant-picker-content th {
    text-align: left;
    color: var(--colors-boulder);
    text-transform: uppercase;
  }

  & tr > .ant-picker-cell {
    background-color: var(--colors-porcelain);
    border: 1px solid var(--colors-mischka);
    border-left: 0;
    border-bottom: 0;

    :first-child {
      border-left: 1px solid var(--colors-mischka);
    }

    > div {
      height: 100%;
    }
  }

  & tr:last-child > .ant-picker-cell {
    border-bottom: 1px solid var(--colors-mischka);
  }
`;

export const DateCell = styled.div`
  position: relative;
  display: flex;
  height: 120px !important;
  align-items: center;
  justify-content: center;
  text-align: left;
  ${({ bgVisible }) =>
    bgVisible &&
    `
    background-color: var(--colors-wedgewood);
  `}
`;

export const DateText = styled(Text)`
  position: absolute;
  top: 1px;
  left: 5px;
  color: var(--colors-porcelain);
`;

export const PriceText = styled(Text)`
  color: var(--colors-blank);
`;
