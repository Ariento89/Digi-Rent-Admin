import { BLUE_1, RED_1 } from "../../consts/colors";
import Button from "../../core/form/Button";
import Select from "../../core/form/Select";
import Row from "../../core/layout/Row";
import Separator from "../../core/layout/Separator";

export default function PropertiesFilter() {
  return (
    <Row alignItems="center" justifyContent="space-between">
      <Select
        width="140px"
        placeholder="Filter..."
        options={[
          { value: "filter-1", label: "Filter 1" },
          { value: "filter-2", label: "Filter 2" },
          { value: "filter-3", label: "Filter 3" },
        ]}
      />
      <Separator size="sm" />
      <Button icon="remove" label="Delete" backgroundColor={RED_1} fontColor="#fff" />
      <Separator size="sm" />
      <Button icon="add" label="Add Properties" backgroundColor={BLUE_1} fontColor="#fff" />
    </Row>
  );
}
