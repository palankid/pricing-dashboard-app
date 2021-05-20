import { TitleCell, HealthScoreCell } from "./customCells";

export const columns = [
  {
    title: "",
    dataIndex: "title",
    key: "title",
    sorter: (a, b) => (a.title < b.title ? 1 : -1),
    render: function (text, record, index) {
      return <TitleCell record={record} />;
    },
  },
  {
    title: "Health",
    dataIndex: "health",
    key: "health",
    align: "center",
    sorter: (a, b) => a.health - b.health,
    render: function (text, record, index) {
      return <HealthScoreCell record={record} />;
    },
  },
];
