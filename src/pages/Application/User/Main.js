import React, {useState} from 'react';
import MainCard from "../../../components/MainCard";
import {useHistory} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 1,
        color: '#fff',
    },
}));

const Main = () => {
    const classes = useStyles();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const handleRedirect = (url) => {
        setIsLoading(true);
        setTimeout(() => {
            history.push(url);
        }, 1500);
    };

    return (
        <>
            {isLoading &&
            <Backdrop open={isLoading} className={classes.backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>}

            <section className="user-main-section animated fadeIn">
                <div className="container">
                    <h2 className="page-title">Предиктивная аналитика</h2>
                    <div className="main-card-wrapper">
                        <MainCard title={"Потребление по ОЭС"}
                                  handleRedirect={() => handleRedirect('/app/user/oes')}/>
                        <MainCard title={"Потребление по области"}
                                  handleRedirect={() => handleRedirect('/app/user/region')}/>
                        <MainCard title={"Потребление по отрасли"}
                                  handleRedirect={() => handleRedirect('/app/user/department')}/>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Main;