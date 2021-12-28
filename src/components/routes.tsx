import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import AuthHome from "../pages/Auth/Home";
import UserLogin from "../pages/Auth/UserLogin";

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={AuthHome} />
        <Route path="/signin" component={UserLogin} />
        <Route path="/signup" component={AuthHome} />
        <Redirect from="*" to="/"/>
    </Switch>
)

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/"/>
    </Switch>
)

const Router = ({isLoggedIn}: any) => isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>


export default Router;