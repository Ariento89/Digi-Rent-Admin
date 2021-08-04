import { GREY_1 } from "../../consts/colors";
import Card from "../../core/layout/Card";
import DigiRentLogo from "../../assets/images/logo.png";
import LoginForm from "./LoginForm";
import Separator from "../../core/layout/Separator";

export default function LoginScene() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: GREY_1,
      }}
    >
      <div style={{ width: "400px" }}>
        <Card>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Separator size="sm" />
            <div style={{ width: "250px" }}>
              <img src={DigiRentLogo} alt="Digi Rent Logo" width="100%" />
            </div>
            <Separator size="lg" />
            <LoginForm />
          </div>
        </Card>
      </div>
    </div>
  );
}
