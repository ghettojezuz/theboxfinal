import React from 'react';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const SignUp = () => {

    return (
        <>
            <section className="signup-section animated fadeIn">
                <div className="container">
                    <h2>Регистрация</h2>
                    <form className="signup-form">
                        <TextField variant={"outlined"}
                                   label={"Логин"}
                                   type={"text"}
                                   className={"form-item textfield-main"}/>
                        <TextField variant={"outlined"}
                                   label={"Пароль"}
                                   type={"password"}
                                   className={"form-item textfield-main"}/>
                        <TextField variant={"outlined"}
                                   label={"Подтверждение пароля"}
                                   type={"password"}
                                   className={"form-item textfield-main"}/>
                        <TextField variant={"outlined"}
                                   label={"ID коробки"}
                                   type={"text"}
                                   className={"form-item textfield-main"}/>
                        <Button variant={"contained"}
                                color={"primary"}
                                size={"large"}
                                component={Link}
                                to={"/"}
                                className={"main-btn form-item"}>Зарегистрироваться</Button>
                    </form>
                    <img id="signup-image" src="../../../assets/img/signup_image.png" alt=""/>
                </div>
            </section>
        </>
    )
};

export default SignUp;