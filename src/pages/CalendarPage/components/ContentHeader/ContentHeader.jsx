import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ListingTitle from "components/ListingTitle";

const Container = styled.div`
  background-color: var(--colors-blank);
  border: 1px solid var(--colors-athens-gray);
  padding: 15px;
`;

const ContentHeader = ({ record, visible }) => {
  if (!visible) return null;

  return (
    <Container>
      <ListingTitle record={record} variant="grey" />
    </Container>
  );
};

ContentHeader.propTypes = {
  record: PropTypes.object.isRequired,
  visible: PropTypes.bool,
};

ContentHeader.defaultProps = {
  visible: true,
};

export default ContentHeader;
