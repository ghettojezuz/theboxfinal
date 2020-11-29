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

import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import MenuItem from "@material-ui/core/MenuItem";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);


const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: theme.spacing(3),
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
    },
    periodWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    periodInput: {
        width: '20%',
        marginRight: '24px'
    },
    backdrop: {
        zIndex: 1,
        color: '#fff',
    },
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

    const [isPrediction, setIsPrediction] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [secondStep, setSecondStep] = useState(false);

    const handleIndexChange = (event) => {
        setIndexState({...indexState, [event.target.name]: event.target.value});
    };

    const handleParamChange = (event) => {
        setParamState({...paramState, [event.target.name]: event.target.checked});
    };

    const isPredictionToggle = () => {
        if (connect) setSecondStep(true);

        setIsPrediction(!isPrediction);
        setIsLoading(true);
        
        setTimeout(() => {
            setIsLoading(false);
        }, 5000)
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000);
    }, []);


    const {index1, index2} = indexState;
    const {connect,product, maxPower} = paramState;


    return (
        <>
            {isLoading &&
            <Backdrop open={isLoading} className={classes.backdrop}>
                <CircularProgress color="inherit"/>
            </Backdrop>}

            <div className="animated fadeIn">
                <div className="container">
                    <h2 className="page-title">Потребление ОЭС Урала</h2>

                    <FormControl component="fieldset" className={classes.formControl} style={{width: '100%'}}>
                        <FormLabel component="legend" className={classes.label} disabled>Период отображения</FormLabel>
                        <FormGroup className={`${classes.periodWrapper}`}>
                            <TextField label=""
                                       className={classes.periodInput}
                                       type="date"
                                       variant="outlined"
                                       name={"index1"}
                                       value={'2018-01-02'}
                                       InputProps={{
                                           startAdornment: <InputAdornment position="start">от</InputAdornment>,
                                       }}/>
                            <TextField label=""
                                       className={classes.periodInput}
                                       type="date"
                                       variant="outlined"
                                       name={"index1"}
                                       value={'2020-11-01'}
                                       InputProps={{
                                           startAdornment: <InputAdornment position="start">до</InputAdornment>,
                                       }}/>
                        </FormGroup>
                    </FormControl>

                    <Chart isPrediction={isPrediction} secondStep={secondStep}/>

                    <div className={`${classes.secondSec}`}>
                        <div className={`${classes.checkboxWrapper}`}>

                            <FormControl component="fieldset" className={classes.formControl} style={{width: '85%'}}>
                                <FormLabel component="legend" className={classes.label} disabled>Индексы</FormLabel>
                                <FormGroup>
                                    <TextField label="Технического состояния"
                                               variant="outlined"
                                               name={"index1"}
                                               className={`${classes.input}`}
                                               onChange={(e) => handleIndexChange(e)}
                                               value={index1}/>
                                    <TextField label="Готовности к отопительному сезону"
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
                                        control={<Checkbox color="primary" checked={connect}
                                                           onChange={handleParamChange} name="connect"/>}
                                        label="Темпы ввода площадей недвижимости"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" checked={product}
                                                           onChange={handleParamChange} name="product"/>}
                                        label="Объем производимой продукции"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" checked={maxPower}
                                                           onChange={handleParamChange} name="maxPower"/>}
                                        label="Максимальная мощность"
                                    />
                                </FormGroup>
                            </FormControl>

                            <FormControl component="fieldset" className={classes.formControl} style={{width: '85%'}}>
                                <FormGroup>
                                    <TextField select
                                               label="Период прогнозирования"
                                               variant="outlined"
                                               value={'3 года'}>
                                        <MenuItem value='1 год'>1 год</MenuItem>
                                        <MenuItem value='3 года'>3 года</MenuItem>
                                        <MenuItem value='5 лет'>5 лет</MenuItem>
                                    </TextField>
                                </FormGroup>
                            </FormControl>

                            <FormControl component="fieldset" className={classes.formControl}
                                         style={{width: '87%', marginTop: '0'}}>
                                <Button variant={"contained"}
                                        color={"primary"}
                                        type={"submit"}
                                        className={"main-card__btn main-btn form-item"}
                                        onClick={isPredictionToggle}>Прогнозировать</Button>
                            </FormControl>


                        </div>

                        <Chart2 secondStep={secondStep}/>
                    </div>

                </div>
            </div>
        </>
    )

};

export default OES;