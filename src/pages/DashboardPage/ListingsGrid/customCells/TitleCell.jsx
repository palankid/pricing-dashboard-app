import React from "react";

import Text from "components/Text";
import {
  Container,
  Image,
  DetailsWrapper,
  TitleStyled,
  BedInfo,
  BedIcon,
} from "./TitleCell.styled";

const TitleCell = ({ record }) => {
  console.log(record);
  return (
    <Container>
      <Image src={record.picture} alt={record.title} />
      <DetailsWrapper>
        <TitleStyled size="h5">{record.title}</TitleStyled>
        <BedInfo>
          <BedIcon />
          <Text size="bodyMedium">{record.beds}</Text>
        </BedInfo>
      </DetailsWrapper>
    </Container>
  );
};

export default TitleCell;
