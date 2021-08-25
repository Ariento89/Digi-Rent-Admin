import Column from "../../core/layout/Column";
import Row from "../../core/layout/Row";
import TenantsRegisteredAbsoluteValueIndicator from "../../core/indicators/TenantsRegisteredAbsoluteValueIndicator";
import TenantsActiveAbsoluteValueIndicator from "../../core/indicators/TenantsActiveAbsoluteValueIndicator";
import TenantsApplicationsAbsoluteValueIndicator from "../../core/indicators/TenantsApplicationsAbsoluteValueIndicator";
import TenantsAgeChartIndicator from "../../core/indicators/TenantsAgeChartIndicator";
import TenantsGenderChartIndicator from "../../core/indicators/TenantsGenderChartIndicator";
import LandlordsGenderChartIndicator from "../../core/indicators/LandlordsGenderChartIndicator";
import LandlordsAgeChartIndicator from "../../core/indicators/LandlordsAgeChartIndicator";
import LandlordsRegisteredAbsoluteValueIndicator from "../../core/indicators/LandlordsRegisteredAbsoluteValueIndicator";
import LandlordsActiveAbsoluteValueIndicator from "../../core/indicators/LandlordsActiveAbsoluteValueIndicator";
import useNotification from "../../hooks/useNotification";
import { useEffect, useState } from "react";
import useService from "../../hooks/useService";
import { getLandlords, getTenants } from "../../services/usersService";
import {
  getActiveTenants,
  getRegisteredTenants,
  getTenantsByAge,
  getTenantsByGender,
} from "../../utils/tenantsIndicators";
import { getApplications } from "../../services/applicationsService";
import { getTotalApplications } from "../../utils/applicationsIndicators";
import {
  getActiveLandlords,
  getLandlordsByAge,
  getLandlordsByGender,
  getRegisteredLandlords,
} from "../../utils/landlordsIndicators";
import UniqueWebsiteVisitorsChartIndicator from "../../core/indicators/UniqueWebsiteVisitorsChartIndicator";
import BlogDetailsTableIndicator from "../../core/indicators/BlogDetailsTableIndicator";

export default function DashboardScene() {
  const notify = useNotification();

  const [tenants, setTenants] = useState([]);
  const [landlords, setLandlords] = useState([]);
  const [applications, setApplications] = useState([]);

  const [isFetchingTenants, loadTenants] = useService(getTenants, {
    onData: ({ data }) => setTenants(data),
    onError: (error) => notify(error.text, "warning"),
  });

  const [isFetchingLandlords, loadLandlords] = useService(getLandlords, {
    onData: ({ data }) => setLandlords(data),
    onError: (error) => notify(error.text, "warning"),
  });

  const [isFetchingApplications, loadApplications] = useService(getApplications, {
    onData: ({ data }) => setApplications(data),
    onError: (error) => notify(error.text, "warning"),
  });

  useEffect(() => {
    loadTenants();
    loadLandlords();
    loadApplications();
  }, []);

  return (
    <div>
      <Row>
        <Column size={3}>
          <Row>
            <TenantsRegisteredAbsoluteValueIndicator
              value={getRegisteredTenants(tenants)}
              isLoading={isFetchingTenants}
              size="sm"
            />
          </Row>
          <Row>
            <TenantsActiveAbsoluteValueIndicator
              size="sm"
              value={getActiveTenants(tenants)}
              isLoading={isFetchingTenants}
            />
          </Row>
          <Row>
            <TenantsApplicationsAbsoluteValueIndicator
              value={getTotalApplications(applications)}
              isLoading={isFetchingApplications}
            />
          </Row>
        </Column>
        <Column size={4}>
          <TenantsAgeChartIndicator values={getTenantsByAge(tenants)} isLoading={isFetchingTenants} size="md" />
        </Column>
        <Column size={5}>
          <TenantsGenderChartIndicator values={getTenantsByGender(tenants)} isLoading={isFetchingTenants} size="md" />
        </Column>
      </Row>
      <Row>
        <Column size={5}>
          <LandlordsGenderChartIndicator
            values={getLandlordsByGender(landlords)}
            isLoading={isFetchingLandlords}
            size="md"
          />
        </Column>
        <Column size={4}>
          <LandlordsAgeChartIndicator values={getLandlordsByAge(landlords)} isLoading={isFetchingLandlords} size="md" />
        </Column>
        <Column size={3}>
          <Row>
            <LandlordsRegisteredAbsoluteValueIndicator
              value={getRegisteredLandlords(landlords)}
              isLoading={isFetchingLandlords}
              size="md"
            />
          </Row>
          <Row>
            <LandlordsActiveAbsoluteValueIndicator
              value={getActiveLandlords(landlords)}
              isLoading={isFetchingLandlords}
              size="md"
            />
          </Row>
        </Column>
      </Row>
      <Row>
        <Column size={7}>
          <BlogDetailsTableIndicator />
        </Column>
        <Column size={5}>
          <UniqueWebsiteVisitorsChartIndicator />
        </Column>
      </Row>
    </div>
  );
}
