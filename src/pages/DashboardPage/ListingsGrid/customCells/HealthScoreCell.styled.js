import styled from "styled-components";

import Text from "components/Text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
`;

export const HealthScoreValue = styled(Text)`
  color: var(--colors-darkBlue);
`;

export const HealthScoreLabel = styled(Text)`
  margin-top: 25px;
  color: var(--colors-bayoux);
`;
