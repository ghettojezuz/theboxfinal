import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {createStore} from "redux";
import rootReducer from "./store/reducers";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Application from "./routes/Application";
import Authentication from "./routes/Authentication";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { createMuiTheme } from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";
import {ProtectedAppRoute} from "./routes/ProtectedRoutes/ProtectedAppRoute";
import {ProtectedAuthRoute} from "./routes/ProtectedRoutes/ProtectedAuthRoute";
import "animate.css"

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
    },
});

export const store = createStore(rootReducer);

const App = () => {

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <Switch>
                    <Route exact path="/" component={WelcomePage}/>
                    <ProtectedAppRoute path="/app" component={() => <Application/>}/>
                    <ProtectedAuthRoute path="/auth" component={() => <Authentication/>}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </MuiThemeProvider>
        </>
    )
};

export default App;