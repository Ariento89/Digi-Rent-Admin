import PropertiesActiveAbsoluteValueIndicator from "../../core/indicators/PropertiesActiveAbsoluteValueIndicator";
import TotalPropertiesAbsoluteValueIndicator from "../../core/indicators/TotalPropertiesAbsoluteValueIndicator";
import PropertiesDisplayedAbsoluteValueIndicator from "../../core/indicators/PropertiesDisplayedAbsoluteValueIndicator";
import TotalApplicationsAbsoluteValueIndicator from "../../core/indicators/TotalApplicationsAbsoluteValueIndicator";
import Column from "../../core/layout/Column";
import Row from "../../core/layout/Row";
import PageTitle from "../../core/layout/PageTitle";
import Separator from "../../core/layout/Separator";
import PropertiesFilter from "./PropertiesFilter";
import Card from "../../core/layout/Card";
import Table from "../../core/layout/Table";
import Button from "../../core/form/Button";
import { BLUE_1, GREY_6, RED_1 } from "../../consts/colors";
import Badge from "../../core/layout/Badge";

export default function PropertiesScene() {
  return (
    <div>
      <Row>
        <Column size={3}>
          <TotalPropertiesAbsoluteValueIndicator />
        </Column>
        <Column size={3}>
          <PropertiesActiveAbsoluteValueIndicator />
        </Column>
        <Column size={3}>
          <PropertiesDisplayedAbsoluteValueIndicator />
        </Column>
        <Column size={3}>
          <TotalApplicationsAbsoluteValueIndicator />{" "}
        </Column>
      </Row>
      <Separator size="md" />
      <Row alignItems="center" justifyContent="space-between">
        <PageTitle title="Properties List" />
        <PropertiesFilter />
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
                width: "50%",
              },
              {
                accessor: "status",
                Header: "Status",
                width: "10%",
                Cell: (props) => <Badge label="Active" status="success" />,
              },
              {
                accessor: "action",
                Header: "Action",
                width: "35%",
                Cell: (props) => (
                  <div style={{ display: "flex" }}>
                    <Button icon="edit" fontColor={GREY_6} iconSize="md" label="Edit" />
                    <Button icon="remove" iconColor={RED_1} fontColor={GREY_6} iconSize="md" label="Delete" />
                    <Button icon="favorite" iconColor={BLUE_1} fontColor={GREY_6} iconSize="md" label="Archive" />
                    <Button fontColor={BLUE_1} iconSize="md" label="Details" />
                  </div>
                ),
              },
            ]}
            data={[
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
              {
                propertyName: "villa raharja pertama utama",
                status: "active",
              },
            ]}
          />
        </Card>
      </Row>
    </div>
  );
}
