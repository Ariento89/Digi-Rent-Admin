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

export default function DashboardScene() {
  return (
    <div>
      <Row>
        <Column size={3}>
          <Row>
            <TenantsRegisteredAbsoluteValueIndicator />
          </Row>
          <Row>
            <TenantsActiveAbsoluteValueIndicator />
          </Row>
          <Row>
            <TenantsApplicationsAbsoluteValueIndicator />
          </Row>
        </Column>
        <Column size={4}>
          <TenantsAgeChartIndicator />
        </Column>
        <Column size={5}>
          <TenantsGenderChartIndicator />
        </Column>
      </Row>
      <Row>
        <Column size={5}>
          <LandlordsGenderChartIndicator />
        </Column>
        <Column size={4}>
          <LandlordsAgeChartIndicator />
        </Column>
        <Column size={3}>
          <Row>
            <LandlordsRegisteredAbsoluteValueIndicator />
          </Row>
          <Row>
            <LandlordsActiveAbsoluteValueIndicator />
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
