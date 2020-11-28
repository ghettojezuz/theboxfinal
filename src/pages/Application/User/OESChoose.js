import React, {useState} from "react";
import MiniCard from "../../../components/MiniCard";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";

const useStyles = makeStyles((theme) => ({
    cardsWrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '20px',
        marginTop: '46px',
    },
    backdrop: {
        zIndex: 1,
        color: '#fff',
    },
}));

const OESChoose = () => {
    const classes = useStyles();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleRedirect = (url) => {
        setIsLoading(true);
        setTimeout(() => {
            history.push(url);
        }, 3000);
    };

    const handleToggleError = () => {
        setIsError(!isError);
    };

    return (
        <>
            {isLoading &&
            <Backdrop open={isLoading} className={classes.backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>}

            <div className="animated fadeIn">
                <div className="container">
                    <h2 className="page-title">
                        Выбор ОЭС
                        <div className={`${classes.cardsWrapper}`}>
                            <MiniCard title={"ОЭС Урала"} redirect handleRedirect={() => handleRedirect('/app/user/oes/ural')}/>
                            <MiniCard title={"ОЭС Центра"} error handleError={handleToggleError}/>
                            <MiniCard title={"ОЭС Юга"} error handleError={handleToggleError}/>
                            <MiniCard title={"ОЭС Средней Волги"} error handleError={handleToggleError}/>
                            <MiniCard title={"ОЭС Сибири"} error handleError={handleToggleError}/>
                            <MiniCard title={"ОЭС Северо-Запада"} error handleError={handleToggleError}/>
                        </div>
                    </h2>
                </div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={isError}
                    autoHideDuration={6000}
                    onClose={handleToggleError}
                    message="К сожалению, раздел находится в разработке"
                    action={
                        <>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleToggleError}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </>
                    }
                />
            </div>
        </>
    )
};

export default OESChoose;