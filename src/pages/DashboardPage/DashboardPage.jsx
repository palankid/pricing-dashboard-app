import React from "react";
import styled from "styled-components";

import Header from "components/Header";
import ListingsGrid from "./components/ListingsGrid";

const Container = styled.main`
  margin: 40px auto 40px;
  width: 100%;
  max-width: var(--layout-width);
`;

const DashboardPage = () => {
  return (
    <>
      <Header />
      <Container>
        <ListingsGrid />
      </Container>
    </>
  );
};

export default DashboardPage;
