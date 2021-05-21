import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BasePriceEditor from "./BasePriceEditor";
import CalendarView from "./CalendarView";

const Container = styled.div`
  margin: 5px;
  background-color: var(--colors-blank);
  border: 1px solid var(--colors-athens-gray);
`;

const CalendarContent = ({ visible }) => {
  if (!visible) return null;

  return (
    <Container>
      <BasePriceEditor />
      <CalendarView />
    </Container>
  );
};

CalendarContent.propTypes = {
  visible: PropTypes.bool,
};

CalendarContent.defaultProps = {
  visible: true,
};

export default CalendarContent;
