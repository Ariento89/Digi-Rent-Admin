import { Route, Switch } from "react-router-dom";
import DashboardScene from "./views/dashboard/DashboardScene";
import NotFoundScene from "./views/not-found/NotFoundScene";
import PropertiesScene from "./views/properties/PropertiesScene";
import AmenitiesScene from "./views/amenities/AmenitiesScene";
import LandlordsScene from "./views/landlords/LandlordsScene";
import TenantsScene from "./views/tenants/TenantsScene";
import LoginScene from "./views/login/LoginScene";
import ProtectedRoutes from "./ProtectedRoutes";

export default function Routes() {
  return (
    <Switch>
      <Route exact key="login" path="/login" component={LoginScene} />
      <ProtectedRoutes>
        <Route exact key="dashboard" path="/" component={DashboardScene} />
        <Route exact key="properties" path="/properties" component={PropertiesScene} />
        <Route exact key="amenities" path="/amenities" component={AmenitiesScene} />
        <Route exact key="users_landlords" path="/users/landlords" component={LandlordsScene} />
        <Route exact key="users_tenants" path="/users/tenants" component={TenantsScene} />
      </ProtectedRoutes>
      <Route path="*" component={NotFoundScene} />
    </Switch>
  );
}
