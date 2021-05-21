import React from "react";
import styled from "styled-components";

import ListingTitle from "components/ListingTitle";

const Container = styled.div`
  background-color: var(--colors-blank);
  border: 1px solid var(--colors-athens-gray);
  padding: 15px;
`;

const ContentHeader = ({ record }) => (
  <Container>
    <ListingTitle record={record} variant="grey" />
  </Container>
);

export default ContentHeader;
