import { Router, Route, Switch } from "react-router-dom";
import DashboardScene from "./views/dashboard/DashboardScene";
import browserHistory from "./browserHistory";
import UsersScene from "./views/users/UsersScene";
import NotFoundScene from "./views/not-found/NotFoundScene";

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact key="dashboard" path="/" component={DashboardScene} />
        <Route exact key="users" path="/users" component={UsersScene} />
        <Route path="*" component={NotFoundScene} />
      </Switch>
    </Router>
  );
}
