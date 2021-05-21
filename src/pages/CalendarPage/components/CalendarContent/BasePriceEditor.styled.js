import styled from "styled-components";
import { InputNumber } from "antd";

import Text from "components/Text";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-bottom: 1px solid var(--colors-athens-gray);
`;

export const Content = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CurrencySign = styled.span`
  background-color: #eeeeee;
  border: 1px solid #cccccc;
  border-right: none;
  padding: 4px 6px;
  border-radius: 3px 0 0 3px;
`;

export const TextStyled = styled(Text)`
  color: var(--colors-boulder);
  text-transform: uppercase;
`;

export const InputStyled = styled(InputNumber)`
  display: block;
  width: 150px;
`;
