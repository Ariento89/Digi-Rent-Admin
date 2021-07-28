import Column from "../../core/layout/Column";
import Row from "../../core/layout/Row";
import AbsoluteValueIndicator from "../../core/indicators/AbsoluteValueIndicator";
import DoughnutChartIndicator from "../../core/indicators/DoughnutChartIndicator";

export default function DashboardScene() {
  return (
    <div>
      <Row>
        <Column size={3}>
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
        <Column size={4}>
          <DoughnutChartIndicator
            label="Tenant Age"
            data={{
              labels: ["18-25", "26-35", "36-45", "56+"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [137, 276, 192, 243],
                },
              ],
            }}
          />
        </Column>
        <Column size={5}>
          <DoughnutChartIndicator
            label="Tenant gender"
            data={{
              labels: ["Female Tentant", "Male Tenant"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [357, 296],
                },
              ],
            }}
          />
        </Column>
      </Row>
      <Row>
        <Column size={5}>
          <DoughnutChartIndicator
            label="Landlord gender"
            data={{
              labels: ["Female Tentant", "Male Landlord"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [700, 1023],
                },
              ],
            }}
          />
        </Column>
        <Column size={4}>
          <DoughnutChartIndicator
            label="Landlord Age"
            data={{
              labels: ["18-25", "26-35", "36-45", "56+"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [533, 112, 214, 244],
                },
              ],
            }}
          />
        </Column>
        <Column size={3}>
          <Row>
            <AbsoluteValueIndicator
              label="Landlords Registered"
              value="412"
              icon="tick-square"
              primaryColor="#41a2f9"
              secondaryColor="#ebf5ff"
              size="md"
            />
          </Row>
          <Row>
            <AbsoluteValueIndicator
              label="Landlords Active"
              value="543"
              icon="radar"
              primaryColor="#00bfb1"
              secondaryColor="#effbf2"
              size="md"
            />
          </Row>
        </Column>
      </Row>
    </div>
  );
}
