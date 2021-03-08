import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { Column } from "src/models/ui";
import { UIMessage } from "../message/Message";

interface TableProps<T> {
  columns: Column<T>[];
  rows: T[];
}
const UITable: <T>(p: TableProps<T>) => React.ReactElement = ({
  columns,
  rows = [],
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(({ key, label, align }) => (
              <TableCell align={align} key={key}>
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length ? (
            rows.map((info, $index) => (
              <TableRow key={$index}>
                {columns.map(({ key: keyColumn, render, align }) => (
                  <TableCell align={align} key={`${keyColumn}-row`}>
                    {render(info)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow key="empty">
              <TableCell colSpan={columns.length}>
                <UIMessage description="No se encontraron empleados" />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { UITable };
