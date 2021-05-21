import React from "react";

import Text from "components/Text";
import {
  Container,
  Image,
  DetailsWrapper,
  TitleStyled,
  BedInfo,
  BedIcon,
} from "./ListingTitle.styled";

const ListingTitle = ({ record, variant }) => {
  return (
    <Container>
      <Image src={record.picture} alt={record.title} />
      <DetailsWrapper>
        <TitleStyled size="h5" variant={variant}>
          {record.title}
        </TitleStyled>
        <BedInfo>
          <BedIcon />
          <Text size="bodyMedium">{record.beds}</Text>
        </BedInfo>
      </DetailsWrapper>
    </Container>
  );
};

export default ListingTitle;
