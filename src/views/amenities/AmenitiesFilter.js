import { useHistory } from "react-router-dom";
import { BLUE_1 } from "../../consts/colors";
import Button from "../../core/form/Button";
import Row from "../../core/layout/Row";

export default function AmenitiesFilter() {
  const history = useHistory();

  return (
    <Row alignItems="center" width="180px">
      <Button
        icon="add"
        label="Add Amenities"
        backgroundColor={BLUE_1}
        fontColor="#fff"
        onClick={() => history.push("/amenities/new")}
      />
    </Row>
  );
}
