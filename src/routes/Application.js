import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import User from "./User";
import HeaderContainer from "../components/Header/HeaderContainer";
import {userLinks} from "../utils/HeaderLinks";
import FooterContainer from "../components/Footer/FooterContainer";

const Application = () => {

    return (
        <div className="animated fadeIn">
            <HeaderContainer links={userLinks} hasExit/>
            <Switch>
                <Route path="/app/user" component={User}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
            <FooterContainer/>
        </div>
    )
};

export default Application;