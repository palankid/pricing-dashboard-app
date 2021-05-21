import styled from "styled-components";

import { ReactComponent as BedIconUnstyled } from "theme/icons/bed.svg";
import Text from "components/Text";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
`;

export const DetailsWrapper = styled.div`
  margin-left: 20px;
`;

export const TitleStyled = styled(Text)`
  color: var(
    --colors-${({ variant }) => (variant === "grey" ? "boulder" : "darkBlue")}
  );
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
`;

export const BedInfo = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
`;

export const BedIcon = styled(BedIconUnstyled)`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  g {
    fill: var(--colors-silver);
  }
`;
