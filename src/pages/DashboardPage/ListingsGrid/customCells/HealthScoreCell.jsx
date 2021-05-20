import React from "react";

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

export default HealthScoreCell;
