import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import {unauthorizedLinks} from "../utils/HeaderLinks";
import HeaderContainer from "../components/Header/HeaderContainer";
import LoginContainer from "../pages/Authentication/Login/LoginContainer";
import SignUpContainer from "../pages/Authentication/SignUp/SignUpContainer";
import FooterContainer from "../components/Footer/FooterContainer";


const Authentication = () => {

    return (
        <div className="animated fadeIn">
            <HeaderContainer links={unauthorizedLinks}/>
            <Switch>
                <Route exact path="/auth/login" component={LoginContainer}/>
                <Route exact path="/auth/signup" component={SignUpContainer}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
            <FooterContainer/>
        </div>
    )
};

export default Authentication;