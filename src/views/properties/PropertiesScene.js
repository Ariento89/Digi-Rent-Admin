import PropertiesActiveAbsoluteValueIndicator from "../../core/indicators/PropertiesActiveAbsoluteValueIndicator";
import TotalPropertiesAbsoluteValueIndicator from "../../core/indicators/TotalPropertiesAbsoluteValueIndicator";
import PropertiesDisplayedAbsoluteValueIndicator from "../../core/indicators/PropertiesDisplayedAbsoluteValueIndicator";
import TotalApplicationsAbsoluteValueIndicator from "../../core/indicators/TotalApplicationsAbsoluteValueIndicator";
import Column from "../../core/layout/Column";
import Row from "../../core/layout/Row";
import PageTitle from "../../core/layout/PageTitle";
import Separator from "../../core/layout/Separator";
import Card from "../../core/layout/Card";
import Table from "../../core/layout/Table";
import Badge from "../../core/layout/Badge";
import useService from "../../hooks/useService";
import { getApartments } from "../../services/apartmentsService";
import useNotification from "../../hooks/useNotification";
import { useEffect } from "react";
import AsyncScreen from "../../core/layout/AsyncScreen";
import { useState } from "react";
import { startCase } from "lodash";
import { getActiveApartments, getRegisteredApartments } from "../../utils/apartmentsIndicators";
import { getApplications } from "../../services/applicationsService";
import { getTotalApplications } from "../../utils/applicationsIndicators";
import PropertiesFilter from "./PropertiesFilter";
import Button from "../../core/form/Button";
import { BLUE_1, GREY_6, RED_1 } from "../../consts/colors";

export default function PropertiesScene() {
  const notify = useNotification();
  const [apartments, setApartments] = useState([]);
  const [applications, setApplications] = useState([]);

  const [isFetchingApartments, loadApartments] = useService(getApartments, {
    onData: ({ data }) => setApartments(data),
    onError: (error) => notify(error.text, "warning"),
  });

  const [isFetchingApplications, loadApplications] = useService(getApplications, {
    onData: ({ data }) => setApplications(data),
    onError: (error) => notify(error.text, "warning"),
  });

  useEffect(() => {
    loadApartments();
    loadApplications();
  }, []);

  return (
    <div>
      <Row>
        <Column size={3}>
          <TotalPropertiesAbsoluteValueIndicator
            value={getRegisteredApartments(apartments)}
            isLoading={isFetchingApartments}
          />
        </Column>
        <Column size={3}>
          <PropertiesActiveAbsoluteValueIndicator
            value={getActiveApartments(apartments)}
            isLoading={isFetchingApartments}
          />
        </Column>
        <Column size={3}>
          <PropertiesDisplayedAbsoluteValueIndicator
            value={getRegisteredApartments(apartments)}
            isLoading={isFetchingApartments}
          />
        </Column>
        <Column size={3}>
          <TotalApplicationsAbsoluteValueIndicator
            value={getTotalApplications(applications)}
            isLoading={isFetchingApplications}
          />
        </Column>
      </Row>
      <Separator size="md" />
      <Row alignItems="center" justifyContent="space-between">
        <PageTitle title="Properties List" />
        <PropertiesFilter />
      </Row>
      <Row>
        <Card>
          <AsyncScreen isLoading={isFetchingApartments}>
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
                  accessor: "name",
                  Header: "Property name",
                  width: "50%",
                },
                {
                  accessor: "status",
                  Header: "Status",
                  width: "10%",
                  Cell: (props) => (
                    <Badge label={startCase(props.value)} status={props.value === "active" ? "success" : "error"} />
                  ),
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
              data={apartments}
            />
          </AsyncScreen>
        </Card>
      </Row>
    </div>
  );
}
