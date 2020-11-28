import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paragraph: {
        fontSize: '2.4rem',
        fontWeight: '500',
    }
}));

const MiniCard = ({title, handleRedirect, redirect, error, handleError}) => {
    const classes = useStyles();

    return (
        <div onClick={error ? handleError : null}>
            <Card elevation={3} onClick={redirect ? handleRedirect : null}>
                <CardActionArea>
                    <CardContent>
                        <p className={`${classes.paragraph}`}>{title}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
};

export default MiniCard;