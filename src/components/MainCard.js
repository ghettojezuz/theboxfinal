import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const MainCard = ({title, handleRedirect}) => {

    return (
        <>
            <Paper elevation={3} className={"main-card"}>
                <div className="main-card__title">{title}</div>
                <Button variant={"contained"}
                        color={"primary"}
                        size={"large"}
                        type={"submit"}
                        className={"main-card__btn main-btn form-item"}
                        onClick={handleRedirect}>Выбрать</Button>
            </Paper>
        </>
    )


};

export default MainCard;