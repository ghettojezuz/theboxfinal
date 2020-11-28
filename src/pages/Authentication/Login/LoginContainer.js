import React, {useEffect, useState} from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {setIsAuth} from "../../../store/actions";
import {authEvent} from "../../../utils/WebsocketAPI";

const LoginContainer = ({isAuth, setIsAuth}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);


    const handleLogin = (e) => {
        e.preventDefault();

        if (login === "cat" && password === "meow") {
            setIsAuth(true);
        } else {
            setIsError(true)
        }
    };

    const handleCloseError = () => {
        setIsError(false);
    };

    return <Login setLogin={setLogin}
                  setPassword={setPassword}
                  isError={isError}
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  handleLogin={handleLogin}
                  handleCloseError={handleCloseError}/>
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = {
    setIsAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);