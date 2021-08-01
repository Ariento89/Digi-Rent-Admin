import PropTypes from "prop-types";
import { useMemo } from "react";
import { useTable } from "react-table";
import { GREY_2, GREY_8 } from "../../consts/colors";

export default function Table({ columns, data, showHeader }) {
  const memoColumns = useMemo(() => columns, [columns]);
  const memoData = useMemo(() => data, [data]);
  const tableInstance = useTable({ columns: memoColumns, data: memoData });
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = tableInstance;

  return (
    <table {...getTableProps()} style={{ width: "100%", marginTop: showHeader ? "auto" : "-40px" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  style: {
                    marginBottom: "18px",
                    minWidth: column.minWidth,
                    maxWidth: column.width,
                    width: column.width,
                    textAlign: column.textAlign ? column.textAlign : "left",
                    padding: "15px 0",
                  },
                })}
              >
                <span
                  style={{
                    fontFamily: "GothamMedium",
                    fontSize: "16px",
                    color: GREY_8,
                    paddingLeft: column.id === "action" ? "35px" : "0",
                  }}
                >
                  {column.render("Header")}
                </span>
              </th>
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
                  {...cell.getCellProps({
                    style: {
                      borderTop: `1px solid ${GREY_2}`,
                      borderBottom: index === rows.length - 1 ? `1px solid ${GREY_2}` : "none",
                      padding: "15px 0",
                      minWidth: cell.column.minWidth,
                      textAlign: cell.column.textAlign ? cell.column.textAlign : "left",
                      maxWidth: cell.column.width,
                      width: cell.column.width,
                    },
                  })}
                >
                  <span style={{ fontSize: "14px" }}>{cell.render("Cell")}</span>
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
  showHeader: PropTypes.bool,
};

Table.defaultProps = {
  showHeader: true,
};
