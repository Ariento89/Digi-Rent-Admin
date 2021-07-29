import PropTypes from "prop-types";
import { useMemo } from "react";
import { useTable } from "react-table";
import { GREY_2 } from "../../consts/colors";

export default function Table({ columns, data }) {
  const memoColumns = useMemo(() => columns, [columns]);
  const memoData = useMemo(() => data, [data]);
  const tableInstance = useTable({ columns: memoColumns, data: memoData });
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = tableInstance;

  return (
    <table {...getTableProps()} style={{ width: "100%" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    borderTop: `1px solid ${GREY_2}`,
                    borderBottom: index === rows.length - 1 ? `1px solid ${GREY_2}` : "none",
                    padding: "15px 0",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>{cell.render("Cell")}</span>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
