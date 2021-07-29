import PropTypes from "prop-types";
import Card from "../layout/Card";
import Table from "../layout/Table";

export default function TableIndicator({ label, columns, data }) {
  return (
    <Card title={label}>
      <Table columns={columns} data={data} />
    </Card>
  );
}

TableIndicator.propTypes = {
  label: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
