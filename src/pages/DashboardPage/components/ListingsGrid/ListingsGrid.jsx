import React from "react";
import { useHistory } from "react-router-dom";

import { useDashboardStore } from "pages/DashboardPage/store";
import ErrorMessage from "components/ErrorMessage";
import LoadingLogo from "components/LoadingLogo";

import { columns } from "./grid.config";
import { TableStyled } from "./ListingsGrid.styled";

const ListingsGrid = () => {
  const history = useHistory();
  const store = useDashboardStore();

  const handleRowClick = (record) => ({
    onClick: (event) => {
      history.push(`/calendar/${record.id}`);
    },
  });

  if (store.loading) {
    return <LoadingLogo />;
  }

  if (store.error) {
    return <ErrorMessage />;
  }

  return (
    <TableStyled
      columns={columns}
      dataSource={store.listings}
      rowKey="id"
      pagination={false}
      onRow={handleRowClick}
    />
  );
};

export default ListingsGrid;
