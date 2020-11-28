import React from "react";
import {Route, Redirect} from "react-router-dom";
import {store} from "../../App";

export const ProtectedAuthRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!store.getState().auth.isAuth) {
                    return <Component {...props}/>;
                } else {
                    return <Redirect to={{
                        pathname: "/app/user/main",
                        state: {
                            from: props.location
                        }
                    }}/>
                }
            }}
        />
    )
};