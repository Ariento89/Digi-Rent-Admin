import Column from "../../core/layout/Column";
import Row from "../../core/layout/Row";
import AbsoluteValueIndicator from "../../core/indicators/AbsoluteValueIndicator";

export default function DashboardScene() {
  return (
    <div>
      <Row>
        <Column size={2}>
          <Row>
            <AbsoluteValueIndicator
              label="Tenants Registered"
              value="1250"
              icon="tick-square"
              primaryColor="#41a2f9"
              secondaryColor="#ebf5ff"
            />
          </Row>
          <Row>
            <AbsoluteValueIndicator
              label="Tenants Active"
              value="7260"
              icon="radar"
              primaryColor="#00bfb1"
              secondaryColor="#effbf2"
            />
          </Row>
          <Row>
            <AbsoluteValueIndicator
              label="Tenants Applications"
              value="1250"
              icon="inbox"
              primaryColor="#ff4b77"
              secondaryColor="#fef1f4"
            />
          </Row>
        </Column>
      </Row>
    </div>
  );
}
