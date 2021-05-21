import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  dashboardActions,
  useDashboardStore,
  useDashboardDispatch,
} from "pages/DashboardPage/store";

import { calendarActions, useCalendarDispatch } from "pages/CalendarPage/store";

import { columns } from "./grid.config";
import { TableStyled } from "./ListingsGrid.styled";

const ListingsGrid = () => {
  const history = useHistory();
  const store = useDashboardStore();
  const dispatch = useDashboardDispatch();
  const calendarDispatch = useCalendarDispatch();

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const handleRowClick = (record) => ({
    onClick: (event) => {
      calendarActions.setListing(calendarDispatch, record);
      history.push(`/calendar/${record.id}`);
    },
  });

  useEffect(() => {
    dashboardActions.getListings(dispatch);
  }, [dispatch]);

  console.log(store.listings);
  return (
    <TableStyled
      columns={columns}
      dataSource={store.listings}
      rowKey="id"
      pagination={false}
      onChange={onChange}
      onRow={handleRowClick}
    />
  );
};

export default ListingsGrid;
