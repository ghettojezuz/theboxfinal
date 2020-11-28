import React, {useEffect, useRef, useState} from 'react';
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {TextField} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

const Analysis = () => {
    const [data, setData] = useState([
        {id: 0, label: 'Холодильники', value: 2.18},
        {id: 1, label: 'Стиральные машины', value: 0.93},
        {id: 2, label: 'Свет', value: 3.33},
        {id: 3, label: 'Зарядки', value: 0.25},
        {id: 4, label: 'Ноутбуки', value: 0.41},
        {id: 5, label: 'Телевизоры', value: 0.96},
        {id: 6, label: 'Чайники', value: 1.64},
    ]);

    const [daysInMonth, setDaysInMonth] = useState(30);
    const [currentConsumption, setCurrentConsumption] = useState((data.reduce((acc, item) => {
        acc += item.value;
        return acc;
    }, 0) * daysInMonth).toFixed(2));
    const [futureConsumption, setFutureConsumption] = useState(currentConsumption);
    const [tariff, setTariff] = useState(3.7);
    const [tariffNight, setTariffNight] = useState(1.8);
    const [newCost, setNewCost] = useState((currentConsumption * tariff).toFixed(2));

    const [isChecked, setIsChecked] = useState({
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
    });

    const [isCheckedNight, setIsCheckedNight] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
    });

    useEffect(() => {
        let activeValues = [];
        for (let i = 0; i < data.length; i++) {
            if (isChecked[`${i}`] || isCheckedNight[`${i}`]) {
                if (isChecked[`${i}`] && isCheckedNight[`${i}`]) {
                   activeValues.push((data[i].value / 2.0) * (tariff + tariffNight));
                }

                if (isChecked[`${i}`] && !isCheckedNight[`${i}`]) {
                    activeValues.push(data[i].value * tariff);
                }

                if (!isChecked[`${i}`] && isCheckedNight[`${i}`]) {
                    activeValues.push(data[i].value * tariffNight);
                }
            }
            console.log(activeValues)
        }
        let newCost = (activeValues.reduce((acc, item) => {
            acc += item;
            return acc;
        }, 0) * daysInMonth).toFixed(2);
        setNewCost(newCost);
    }, [isChecked, isCheckedNight, tariff, tariffNight]);

    const handleCheck = (index) => {
        setIsChecked({...isChecked, [index]: !isChecked[`${index}`]})
    };

    const handleCheckNight = (index) => {
        setIsCheckedNight({...isCheckedNight, [index]: !isCheckedNight[`${index}`]})
    };

    const handleTariff = (e) => {
        setTariff(e.target.value);
    };

    const handleTariffNight = (e) => {
        setTariffNight(e.target.value);
    };

    return (
        <>
            <section className="user-analysis-section animated fadeIn">
                <div className="container">
                    <h2 className="page-title">Анализ энергоэффективности</h2>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Выбрать другой месяц"
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}/>
                    </MuiPickersUtilsProvider>
                    <div className="analysis-text">
                        <div className="analysis-text__item">Потреблено всего за
                            месяц: <b>{currentConsumption} кВт*час</b></div>
                        {/*<div className="analysis-text__item">Будет потреблено за месяц (меры по повышению*/}
                        {/*    энергоэффективности): <b>{futureConsumption} кВт*час</b></div>*/}
                    </div>
                    <div className="analysis-tariff">
                        <h3 className="analysis-tariff__title">Введите свои тарифы</h3>

                        <div style={{display: 'flex'}}>
                            <div className="analysis-tariff__item">
                                <TextField variant={"outlined"}
                                           label={"Дневной"}
                                           type={"number"}
                                           className={"form-item textfield-small"}
                                           value={tariff}
                                           onChange={(e) => handleTariff(e)}/>
                                <p className="analysis-tariff__mark">руб / кВт * час</p>
                            </div>
                            <div className="analysis-tariff__item">
                                <TextField variant={"outlined"}
                                           label={"Ночной"}
                                           type={"number"}
                                           className={"form-item textfield-small"}
                                           value={tariffNight}
                                           onChange={(e) => handleTariffNight(e)}/>
                                <p className="analysis-tariff__mark">руб / кВт * час</p>
                            </div>
                        </div>

                    </div>

                    <div className="analysis-text">
                        <div className="analysis-text__item">Расходы на электроэнергию
                            (текущие): <b>{(currentConsumption * tariff).toFixed(2)} руб</b></div>
                        <div className="analysis-text__item">Расходы на электроэнергию с учетом "Умного
                            потребления": <b>{newCost} руб</b></div>
                    </div>
                    <div className="analysis-efficiency">
                        <h3>Повышение энергоэффективности</h3>
                        <p>Переключите тариф, чтобы посмотреть, сколько вы сэкономите</p>
                        <div className="analysis-check">
                            {data.map((item) => {
                                return <Paper key={item.id} elevation={3} className="paper-analysis">
                                    <div className="paper-analysis__text">{item.label}</div>
                                    <div
                                        className="paper-analysis__count"> {(item.value * daysInMonth).toFixed(2)} кВт
                                    </div>

                                    <div className="paper-analysis__checkboxes">
                                        <FormControlLabel control={
                                            <Checkbox
                                                color="primary"
                                                inputProps={{'aria-label': 'secondary checkbox'}}
                                                checked={isChecked[`${item.id}`]}
                                                onChange={() => handleCheck(item.id)}
                                            />
                                        } label="Дневной"/>


                                        <FormControlLabel control={
                                            <Checkbox
                                                color="primary"
                                                inputProps={{'aria-label': 'secondary checkbox'}}
                                                checked={isCheckedNight[`${item.id}`]}
                                                onChange={() => handleCheckNight(item.id)}
                                            />} label="Ночной"/>
                                    </div>
                                </Paper>
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Analysis;