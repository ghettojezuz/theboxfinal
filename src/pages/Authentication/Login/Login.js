import React from 'react';
import {TextField} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import {Link, Redirect} from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "../../../../node_modules/animate.css/animate.css"

const Login = ({setLogin, setPassword, isError, isAuth, handleCloseError, handleLogin}) => {

    return (
        isAuth ?
            <>
                <Redirect to={"/app/user/main"}/>
            </>

            :

            <>
                <section className="login-section animated fadeIn">
                    <div className="container">
                        <h2>Вход</h2>
                        <form className="login-form" onSubmit={event => handleLogin(event)}>
                            <TextField variant={"outlined"}
                                       label={"Логин"}
                                       type={"text"}
                                       className={"form-item textfield-main"}
                                       onChange={(e) => setLogin(e.target.value)}/>
                            <TextField variant={"outlined"}
                                       label={"Пароль"}
                                       type={"password"}
                                       className={"form-item textfield-main"}
                                       onChange={(e) => setPassword(e.target.value)}/>
                            <Button variant={"contained"}
                                    color={"primary"}
                                    size={"large"}
                                    type={"submit"}
                                    className={"main-btn form-item"}>Войти</Button>
                            <Button color={"default"}
                                    size={"large"}
                                    component={Link}
                                    to={"/auth/signup"}
                                    className={"main-btn form-item"}>Зарегистрироваться</Button>
                        </form>
                        <img id="login-image" src="../../../../assets/img/login_image.png" alt=""/>
                    </div>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={isError}
                        autoHideDuration={6000}
                        onClose={handleCloseError}
                        message="Неверный логин или пароль"
                        action={
                            <>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseError}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </>
                        }
                    />
                </section>
            </>
    )
};

export default Login;