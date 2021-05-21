import styled from "styled-components";

import Text from "components/Text";

export const ContentWrapper = styled.div`
  color: var(--colors-blank);
  width: 300px;
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-color: var(--colors-mine-shaft-light);
`;

export const PriceBreakdownSection = styled.div`
  padding: 20px;
`;

export const DateText = styled(Text)`
  font-weight: bold;
`;

export const FullPriceText = styled(Text)`
  margin-top: 5px;
  color: var(--colors-glacier);
`;

export const BreakdownRowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 3px;
  color: var(--colors-athens-gray);
`;

export const Divider = styled.div`
  border-bottom: 2px solid var(--colors-boulder);
  margin: 5px 30px;
`;
