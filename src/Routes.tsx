import React, { ReactNode } from "react"
import { BrowserRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import Account from "./pages/Account";
import Game from "./pages/Game";
import Home from "./pages/Home";
import ServerError from "./pages/ServerError";

import { isAuthenticated } from "./auth/authentication"
interface Element {
    history: any;
    location: any;
    match?: any;
    staticContext?: any;
}
interface PrivateRouteProps {
    component: React.ComponentType<Element>;
    path: string;
    exact?: boolean;
}

function Routes() {

    // const PrivateRoute = (props: PrivateRouteProps) => {
    // const { component: Component, ...rest } = props;
    const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {

        return (
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated() ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            />
        );
    };

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/game" component={Game} />
                <PrivateRoute path="/account" component={Account} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/update-password" component={UpdatePassword} />
                <Route path="/register" component={Register} />
                <Route path="/confirmation-user" component={Confirmation} />

                {window.location.pathname === "/login" && isAuthenticated() === true ? (
                    <Redirect to="/" />
                ) : (
                    <Route path="/login" component={Login} />
                )}


                {/* <Route path="/error-connection" component={ServerError} /> */}
                <Route path="*" component={() => <h3>Page not found</h3>} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;