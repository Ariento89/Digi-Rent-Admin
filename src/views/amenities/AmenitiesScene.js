import Row from "../../core/layout/Row";
import PageTitle from "../../core/layout/PageTitle";
import AmenitiesFilter from "./AmenitiesFilter";
import Card from "../../core/layout/Card";
import Table from "../../core/layout/Table";
import Button from "../../core/form/Button";
import { BLUE_1, GREY_6, RED_1 } from "../../consts/colors";

export default function AmenitiesScene() {
  return (
    <div>
      <Row alignItems="center" justifyContent="space-between">
        <PageTitle title="Amenities List" />
        <AmenitiesFilter />
      </Row>
      <Row>
        <Card>
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
                accessor: "propertyName",
                Header: "Property name",
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
            data={[
              { propertyName: "1 villa raharja pertama utama" },
              { propertyName: "2 villa raharja pertama utama" },
              { propertyName: "3 villa raharja pertama utama" },
              { propertyName: "4 villa raharja pertama utama" },
              { propertyName: "5 villa raharja pertama utama" },
              { propertyName: "6 villa raharja pertama utama" },
              { propertyName: "7 villa raharja pertama utama" },
              { propertyName: "8 villa raharja pertama utama" },
              { propertyName: "9 villa raharja pertama utama" },
              { propertyName: "10 villa raharja pertama utama" },
              { propertyName: "11 villa raharja pertama utama" },
              { propertyName: "12 villa raharja pertama utama" },
              { propertyName: "13 villa raharja pertama utama" },
              { propertyName: "14 villa raharja pertama utama" },
              { propertyName: "15 villa raharja pertama utama" },
              { propertyName: "16 villa raharja pertama utama" },
              { propertyName: "17 villa raharja pertama utama" },
              { propertyName: "18 villa raharja pertama utama" },
              { propertyName: "19 villa raharja pertama utama" },
              { propertyName: "20 villa raharja pertama utama" },
              { propertyName: "21 villa raharja pertama utama" },
            ]}
          />
        </Card>
      </Row>
    </div>
  );
}
