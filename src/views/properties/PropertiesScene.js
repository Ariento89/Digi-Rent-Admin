import PropertiesActiveAbsoluteValueIndicator from "../../core/indicators/PropertiesActiveAbsoluteValueIndicator";
import TotalPropertiesAbsoluteValueIndicator from "../../core/indicators/TotalPropertiesAbsoluteValueIndicator";
import PropertiesDisplayedAbsoluteValueIndicator from "../../core/indicators/PropertiesDisplayedAbsoluteValueIndicator";
import TotalApplicationsAbsoluteValueIndicator from "../../core/indicators/TotalApplicationsAbsoluteValueIndicator";
import Column from "../../core/layout/Column";
import Row from "../../core/layout/Row";

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
    </div>
  );
}
