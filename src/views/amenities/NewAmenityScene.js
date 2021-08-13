import { useHistory } from "react-router-dom";
import Button from "../../core/form/Button";
import PageTitle from "../../core/layout/PageTitle";
import Row from "../../core/layout/Row";
import NewAmenityForm from "./AmenityForm";

export default function NewAmenityScene() {
  const history = useHistory();

  return (
    <div>
      <Row alignItems="center" justifyContent="space-between">
        <PageTitle title="New Amenity" />
        <Button
          icon="arrow-up"
          label="Back to list"
          backgroundColor="#fff"
          fontColor="#000"
          rotateIcon="-90deg"
          onClick={() => history.push("/amenities")}
        />
      </Row>
      <NewAmenityForm />
    </div>
  );
}
