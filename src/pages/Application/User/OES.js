import React, {useEffect, useState} from 'react';
import Chart from "../../../components/Chart";
import Chart2 from "../../../components/Chart2";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import makeStyles from "@material-ui/core/styles/makeStyles";
import * as am4core from "@amcharts/amcharts4/core";

import am4themes_spiritedaway from "@amcharts/amcharts4/themes/spiritedaway";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_spiritedaway);


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
    label: {
        marginBottom: '12px',
    },
    checkboxWrapper: {
        paddingBottom: '40px',
        paddingTop: '40px',
    },
    secondSec: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        paddingBottom: '40px',
        paddingTop: '40px',
    },
    input: {
        marginBottom: '16px',
        width: '100%'
    }
}));

const OES = () => {
    const classes = useStyles();
    const [indexState, setIndexState] = useState({
        index1: '',
        index2: '',
    });
    const [paramState, setParamState] = useState({
        maxPower: false,
        connect: false,
        product: false,
    });

    const handleIndexChange = (event) => {
        setIndexState({ ...indexState, [event.target.name]: event.target.value });
    };

    const handleParamChange = (event) => {
        setParamState({ ...paramState, [event.target.name]: event.target.checked });
    };

    const { index1, index2 } = indexState;
    const { maxPower, connect, product } = paramState;

    return (
        <div className="animated fadeIn">
            <div className="container">
                <h2 className="page-title">Потребление ОЭС Урала</h2>

                <Chart/>

                <div className={`${classes.secondSec}`}>
                    <div className={`${classes.checkboxWrapper}`}>

                        <FormControl component="fieldset" className={classes.formControl} style={{width: '60%'}}>
                            <FormLabel component="legend" className={classes.label} disabled>Период отображения</FormLabel>
                            <FormGroup>
                                <TextField label=""
                                           type="date"
                                           variant="outlined"
                                           name={"index1"}/>
                            </FormGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl} style={{width: '60%'}}>
                            <FormLabel component="legend" className={classes.label} disabled>Индексы</FormLabel>
                            <FormGroup>
                                <TextField label="Технического состояния"
                                           variant="outlined"
                                           name={"index1"}
                                           className={`${classes.input}`}
                                           onChange={(e) => handleIndexChange(e)}
                                           value={index1}/>
                                <TextField label="Готовности к зиме"
                                           variant="outlined"
                                           name={"index2"}
                                           className={`${classes.input}`}
                                           onChange={(e) => handleIndexChange(e)}
                                           value={index2}/>
                            </FormGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend" className={classes.label} disabled>Параметры</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={maxPower} onChange={handleParamChange} name="maxPower" />}
                                    label="Максимальная мощность"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={connect} onChange={handleParamChange} name="connect" />}
                                    label="Темпы ввода площадей недвижимости"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={product} onChange={handleParamChange} name="product" />}
                                    label="Объем производимой продукции"
                                />
                            </FormGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl} style={{width: '60%', marginTop: '0'}}>
                            <Button variant={"contained"}
                                    color={"primary"}
                                    type={"submit"}
                                    className={"main-card__btn main-btn form-item"}>Прогнозировать</Button>
                        </FormControl>


                    </div>

                    <Chart2 />
                </div>

            </div>
        </div>
    )

};

export default OES;