import PropTypes from "prop-types";
import { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import { GREY_2, GREY_8 } from "../../consts/colors";
import TableFooter from "./TableFooter";

export default function Table({ columns, data, showHeader, showFooter }) {
  const memoColumns = useMemo(() => columns, [columns]);
  const memoData = useMemo(() => data, [data]);
  const tableInstance = useTable(
    { columns: memoColumns, data: memoData, initialState: { pageIndex: 0 } },
    usePagination
  );
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } = tableInstance;

  return (
    <>
      {data.length > 0 ? (
        <>
          <table
            {...getTableProps({
              style: {
                width: "100%",
                marginTop: showHeader ? "auto" : "-40px",
              },
            })}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps({
                        style: {
                          marginBottom: "18px",
                          minWidth: column.minWidth,
                          maxWidth: column.maxWidth,
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
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps({
                          style: {
                            borderTop: `1px solid ${GREY_2}`,
                            padding: "15px 0",
                            minWidth: cell.column.minWidth,
                            textAlign: cell.column.textAlign ? cell.column.textAlign : "left",
                            maxWidth: cell.column.maxWidth,
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
          {showFooter && <TableFooter table={tableInstance} />}
        </>
      ) : (
        <span style={{ display: "block", textAlign: "center", margin: "20px 0" }}>No data.</span>
      )}
    </>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
};

Table.defaultProps = {
  showHeader: true,
  showFooter: true,
};
