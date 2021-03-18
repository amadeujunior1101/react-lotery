import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import Game from "./pages/Game";
import RecentGames from "./pages/RecentGames";

//Criar o componentes com as rotas
// const history = createMemoryHistory(location)
function Routes() {
    return (
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={Game} />
                <Route path="/login" component={Login} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/register" component={Register} />
                <Route path="/recent-games" component={RecentGames} />

                {/* <Route path="/solicitar_emprestimo05/:id"  component={SolicitarEmprestimo05} /> */}

                {/* <Route path="*" component={Page404} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;