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
import BlogDetailsTableIndicator from "../../core/indicators/BlogDetailsTableIndicator";
import UniqueWebsiteVisitorsChartIndicator from "../../core/indicators/UniqueWebsiteVisitorsChartIndicator";
import useNotification from "../../hooks/useNotification";
import { useEffect, useState } from "react";
import useService from "../../hooks/useService";
import { getTenants } from "../../services/usersService";
import { getActiveTenants, getRegisteredTenants, getTotalByAge, getTotalByGender } from "../../utils/tenantsIndicators";
import { getApplications } from "../../services/applicationsService";
import { getTotalApplications } from "../../utils/applicationsIndicators";

export default function DashboardScene() {
  const notify = useNotification();
  const [tenants, setTenants] = useState([]);
  const [applications, setApplications] = useState([]);
  const [isFetchingTenants, loadTenants] = useService(getTenants, {
    onData: ({ data }) => setTenants(data),
    onError: (error) => notify(error.text, "warning"),
  });
  const [isFetchingApplications, loadApplications] = useService(getApplications, {
    onData: ({ data }) => setApplications(data),
    onError: (error) => notify(error.text, "warning"),
  });

  useEffect(() => {
    loadTenants();
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
          <TenantsAgeChartIndicator values={getTotalByAge(tenants)} isLoading={isFetchingTenants} size="md" />
        </Column>
        <Column size={5}>
          <TenantsGenderChartIndicator values={getTotalByGender(tenants)} isLoading={isFetchingTenants} size="md" />
        </Column>
      </Row>
      <Row>
        <Column size={5}>
          <LandlordsGenderChartIndicator size="md" />
        </Column>
        <Column size={4}>
          <LandlordsAgeChartIndicator size="md" />
        </Column>
        <Column size={3}>
          <Row>
            <LandlordsRegisteredAbsoluteValueIndicator size="md" />
          </Row>
          <Row>
            <LandlordsActiveAbsoluteValueIndicator size="md" />
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
