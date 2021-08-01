import LandlordsActiveAbsoluteValueIndicator from "../../core/indicators/LandlordsActiveAbsoluteValueIndicator";
import LandlordsRegisteredAbsoluteValueIndicator from "../../core/indicators/LandlordsRegisteredAbsoluteValueIndicator";
import LandlordsAgeChartIndicator from "../../core/indicators/LandlordsAgeChartIndicator";
import LandlordsGenderChartIndicator from "../../core/indicators/LandlordsGenderChartIndicator";
import Column from "../../core/layout/Column";
import Row from "../../core/layout/Row";
import PageTitle from "../../core/layout/PageTitle";
import Separator from "../../core/layout/Separator";
import LandlordsFilter from "./LandlordsFilter";
import Card from "../../core/layout/Card";
import Table from "../../core/layout/Table";
import Button from "../../core/form/Button";
import { BLUE_1, GREY_6, RED_1 } from "../../consts/colors";
import Badge from "../../core/layout/Badge";

export default function LandlordsScene() {
  return (
    <div>
      <Row>
        <Column size={3}>
          <LandlordsActiveAbsoluteValueIndicator size="lg" />
        </Column>
        <Column size={3}>
          <LandlordsRegisteredAbsoluteValueIndicator size="lg" />
        </Column>
        <Column size={3}>
          <LandlordsAgeChartIndicator size="sm" />
        </Column>
        <Column size={3}>
          <LandlordsGenderChartIndicator size="sm" />
        </Column>
      </Row>
      <Separator size="md" />
      <Row alignItems="center" justifyContent="space-between">
        <PageTitle title="Landlords List" />
        <LandlordsFilter />
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
                accessor: "id",
                Header: "ID",
                width: "5%",
                Cell: (props) => <b style={{ fontFamily: "GothamBold", color: "#000" }}>{props.value}</b>,
              },
              {
                accessor: "firstName",
                Header: "First Name",
                width: "20%",
              },
              {
                accessor: "lastName",
                Header: "Last Name",
                width: "20%",
              },
              {
                accessor: "location",
                Header: "Location",
                width: "15%",
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
                width: "15%",
                Cell: (props) => (
                  <div style={{ display: "flex" }}>
                    <Button icon="edit" fontColor={GREY_6} iconSize="md" label="Edit" />
                    <Button icon="remove" iconColor={RED_1} fontColor={GREY_6} iconSize="md" label="Delete" />
                    <Button fontColor={BLUE_1} iconSize="md" label="Details" />
                  </div>
                ),
              },
            ]}
            data={[
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
              {
                id: "1241",
                firstName: "Hanna",
                lastName: "Septimus",
                location: "The Gauge",
                status: "active",
              },
            ]}
          />
        </Card>
      </Row>
    </div>
  );
}
