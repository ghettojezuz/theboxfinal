import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from "../pages/Application/User/Profile";
import Statistics from "../pages/Application/User/Statistics";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Analysis from "../pages/Application/User/Analysis";
import Main from "../pages/Application/User/Main";
import OES from "../pages/Application/User/OES";
import Region from "../pages/Application/User/Region";
import Department from "../pages/Application/User/Department";
import OESChoose from "../pages/Application/User/OESChoose";

const User = () => {

    return (
        <>
            <Switch>
                <Route exact path="/app/user/main" component={Main}/>
                <Route exact path="/app/user/oes" component={OESChoose}/>
                <Route exact path="/app/user/oes/ural" component={OES}/>
                <Route exact path="/app/user/region" component={Region}/>
                <Route exact path="/app/user/department" component={Department}/>
                <Route exact path="/app/user/statistics" component={Statistics}/>
                <Route exact path="/app/user/profile" component={Profile}/>
                <Route exact path="/app/user/analysis" component={Analysis}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
        </>
    )
};

export default User;