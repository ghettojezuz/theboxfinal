import React from "react";
import {Route, Redirect} from "react-router-dom";
import {store} from "../../App";

export const ProtectedAppRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (store.getState().auth.isAuth) {
                    return <Component {...props}/>;
                } else {
                    return <Redirect to={{
                        pathname: "/auth/login",
                        state: {
                            from: props.location
                        }
                    }}/>
                }
            }}
        />
    )
};