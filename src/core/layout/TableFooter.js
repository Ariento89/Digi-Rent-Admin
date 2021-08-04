import { max, min, range } from "lodash";
import { BLUE_1, GREY_2, GREY_9 } from "../../consts/colors";
import Button from "../form/Button";
import Select from "../form/Select";

export default function TableFooter({ table }) {
  const {
    canPreviousPage,
    canNextPage,
    pageCount,
    nextPage,
    previousPage,
    setPageSize,
    rows,
    page,
    state: { pageIndex, pageSize },
  } = table;

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: "13px", marginRight: "15px" }}>
          Showing {page.length} from {rows.length}
        </span>
        <Select
          width="70px"
          value={{ value: pageSize, label: pageSize }}
          onChange={(option) => {
            setPageSize(option.value.toString);
          }}
          options={range(10, 50, 10).map((pageSize) => ({
            label: pageSize,
            value: pageSize,
          }))}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: GREY_2,
          borderRadius: "5px",
          padding: "0 10px",
          width: "140px",
          height: "30px",
        }}
      >
        <Button
          isIconButton={true}
          icon="arrow-up"
          backgroundColor={GREY_9}
          onClick={() => previousPage()}
          isDisabled={!canPreviousPage}
          style={{ width: "18px", height: "18px", transform: "rotate(-90deg)" }}
          rounded={true}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {range(max([pageIndex - 1, 0]), min([pageIndex + 3, pageCount]), 1).map((page) => (
            <Button
              key={`table-footer-page-${page}`}
              isIconButton={true}
              label={page + 1}
              fontColor={pageIndex === page ? "#fff" : GREY_9}
              backgroundColor={pageIndex === page ? BLUE_1 : "transparent"}
              fontSize="10px"
              fontFamily="GothamBold"
              style={{ width: "18px", height: "18px", margin: "0 2px" }}
            />
          ))}
        </div>
        <Button
          isIconButton={true}
          icon="arrow-up"
          backgroundColor={GREY_9}
          onClick={() => nextPage()}
          isDisabled={!canNextPage}
          style={{ width: "18px", height: "18px", transform: "rotate(90deg)" }}
          rounded={true}
        />
      </div>
    </div>
  );
}
