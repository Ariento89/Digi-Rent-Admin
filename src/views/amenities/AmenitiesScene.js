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
import Button from "../../core/form/Button";
import { BLUE_1, GREY_6, RED_1 } from "../../consts/colors";

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
                  accessor: "checkbox",
                  width: "5%",
                  textAlign: "center",
                  Header: (props) => <input type="checkbox" />,
                  Cell: (props) => <input type="checkbox" />,
                },
                {
                  accessor: "title",
                  Header: "Amenity name",
                  width: "70%",
                },
                {
                  accessor: "action",
                  Header: "Action",
                  width: "25%",
                  Cell: (props) => (
                    <div style={{ display: "flex" }}>
                      <Button icon="edit" fontColor={GREY_6} iconSize="md" label="Edit" />
                      <Button icon="remove" iconColor={RED_1} fontColor={GREY_6} iconSize="md" label="Delete" />
                      <Button icon="favorite" iconColor={BLUE_1} fontColor={GREY_6} iconSize="md" label="Save" />
                    </div>
                  ),
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
