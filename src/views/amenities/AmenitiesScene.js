import Row from "../../core/layout/Row";
import PageTitle from "../../core/layout/PageTitle";
import AmenitiesFilter from "./AmenitiesFilter";
import Card from "../../core/layout/Card";
import Table from "../../core/layout/Table";
import useNotification from "../../hooks/useNotification";
import { useState } from "react";
import useService from "../../hooks/useService";
import { getAmenities } from "../../services/amenitiesService";
import { useEffect } from "react";
import AsyncScreen from "../../core/layout/AsyncScreen";

export default function AmenitiesScene() {
  const notify = useNotification();
  const [amenities, setAmenities] = useState([]);
  const [isFetchingTable, loadAmenities] = useService(getAmenities, {
    onData: ({ data }) => setAmenities(data),
    onError: (error) => notify(error.text, "warning"),
  });

  useEffect(() => {
    loadAmenities();
  }, []);

  return (
    <div>
      <Row alignItems="center" justifyContent="space-between">
        <PageTitle title="Amenities List" />
        <AmenitiesFilter />
      </Row>
      <Row>
        <Card>
          <AsyncScreen isLoading={isFetchingTable}>
            <Table
              columns={[
                {
                  accessor: "title",
                  Header: "Amenity name",
                  width: "70%",
                },
              ]}
              data={amenities}
            />
          </AsyncScreen>
        </Card>
      </Row>
    </div>
  );
}
