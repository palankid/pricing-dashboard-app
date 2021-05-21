import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  HealthScoreValue,
  HealthScoreLabel,
} from "./HealthScoreCell.styled";

const HealthScoreCell = ({ record }) => {
  return (
    <Container>
      <HealthScoreValue size="h3">{record.health * 100}</HealthScoreValue>
      <HealthScoreLabel size="bodyMedium">Health Score</HealthScoreLabel>
    </Container>
  );
};

HealthScoreCell.propTypes = {
  record: PropTypes.object.isRequired,
};

export default HealthScoreCell;
