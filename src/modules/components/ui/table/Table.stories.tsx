import React from "react";
import { Column } from "src/models/ui";
import { UITable } from "./Table";
interface Information {
  id: number;
  name: string;
  lastname: string;
  address: string;
}
const data: Information[] = [
  {
    id: 1,
    name: "Felipe",
    lastname: "Axtell",
    address: "Calle San ignacio de loyola 4800",
  },
  {
    id: 2,
    name: "Andres",
    lastname: "Villegas",
    address: "Santiago de chile",
  },
  {
    id: 3,
    name: "Pedro",
    lastname: "Gonzalez",
    address: "Santiago de chile",
  },
];
const columns: Column<Information>[] = [
  {
    key: "name",
    label: "Nombre",
    render: ({ name }) => name,
  },
  {
    key: "lastname",
    label: "Apellido",
    render: ({ lastname }) => <span>{lastname}</span>,
  },
  {
    key: "address",
    label: "Dirección",
    render: ({ address }) => <span>{address}</span>,
  },
];
export default {
  title: "UI Table",
  component: UITable,
};

export const Basic: React.VFC<{}> = () => <UITable<Information>   columns={columns} rows={data} />;


export const NoDataTable: React.VFC<{}> = () => <UITable<Information>   columns={columns} rows={[]} />;