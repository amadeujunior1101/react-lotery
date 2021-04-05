import React, { ReactNode } from "react"
import { BrowserRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import Account from "./pages/Account";
import Game from "./pages/Game";
import Home from "./pages/Home";

//Criar o componentes com as rotas
// const history = createMemoryHistory(location)

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
    // isAuthenticated: boolean;
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
                <PrivateRoute exact path="/game" component={Game} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/register" component={Register} />
                <Route path="/confirmation-user" component={Confirmation} />
                <PrivateRoute path="/account" component={Account} />

                {window.location.pathname === "/login" && isAuthenticated() === true ? (
                    <Redirect to="/" />
                ) : (
                    <Route path="/login" component={Login} />
                )}

                <Route path="*" component={() => <h3>Page not found</h3>} />
            </Switch>
        </BrowserRouter>

        // <BrowserRouter >
        //     <Switch>
        //         <Route path="/" exact component={Home} />
        //         <Route path="/game" exact component={Game} />
        //         <Route path="/login" component={Login} />
        //         <Route path="/reset-password" component={ResetPassword} />
        //         <Route path="/register" component={Register} />
        //         <Route path="/account" component={Account} />
        //         <Route path="/home" component={Home} />

        //         {/* <Route path="/solicitar_emprestimo05/:id"  component={SolicitarEmprestimo05} /> */}

        //         {/* <Route path="*" component={Page404} /> */}
        //     </Switch>
        // </BrowserRouter>
    );
};

export default Routes;