import React, {useEffect, useRef, useState} from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import {data_31, hours} from "../../../utils/UserData";
import Button from "@material-ui/core/Button";
import useWindowWidth from "../../../utils/useWindowWidth";
import {getDataEvent} from "../../../utils/WebsocketAPI";

const Statistics = () => {
    const [chartData, setChartData] = useState({
        // labels: ['Холодильник', 'Стиральная машина', 'Свет', "Зарядки", "Ноутбук"],
        // values: [1200, 500, 1100, 100, 315],
        colors: [
            '#12142f',
            '#26286a',
            '#2c2e8d',
            '#3849b9',
            '#4456cf',
        ],
    });
    const windowWidth = useWindowWidth();
    const [ws, setWs] = useState(new WebSocket('ws://212.220.84.40:8080'));
    const [nowData, setNowData] = useState({});
    const [hourData, setHourData] = useState({});

    useEffect(() => {
        ws.onopen = () => {
            console.log('connected');

            getData("now");
            getData("hour");
            setInterval(() => getData("now"), 10000);
        };

        ws.onmessage = function(event) {
            let incomingMessage = JSON.parse(event.data);

            if (incomingMessage.type == 'now') {
                let values = [];
                for (let i = 0; i < incomingMessage.data.values.length; i++) {
                    values.push((incomingMessage.data.values[i] / 100 * 220).toFixed(0))
                }

                let newNowData = {
                    types: incomingMessage.data.types,
                    values: values,
                    value: incomingMessage.data.value / 100 * 220
                };
                setNowData(newNowData);
            }

            if (incomingMessage.type == 'hour') {
                setHourData(incomingMessage.data);
            }


            console.log(incomingMessage)
        };

        ws.onclose = function(event) {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }
        };
    }, []);

    const getData = (type) => {
        const getDataReq = {
            "event": getDataEvent.request,
            "auth": {
                "login": "cat",
                "pass": "meow"
            },
            "type": type
        };

        try {
            ws.send(JSON.stringify(getDataReq));
        } catch (e) {
            console.log(e)
        }
    };

    const donutData = {
        labels: nowData.types,
            datasets: [{
            data: nowData.values,
            backgroundColor: chartData.colors,
            borderColor: chartData.colors,
            borderWidth: 1
        }]
    };
    const barData = {
        labels: hours,
        datasets: [
            {
                label: 'Потребление за час',
                backgroundColor: 'rgba(63,81,181,0.5)',
                borderColor: 'rgba(63,81,181,0.5)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(63,81,181,1)',
                hoverBorderColor: 'rgba(63,81,181,1)',
                data: data_31
            }
        ]
    };

    const donutOptions = {
        legend: {
            position: "left"
        }
    };

    const addItem = (label, value, color) => {

        const newChartData = {
            labels: chartData.labels,
            values: chartData.values,
            colors: chartData.colors,
        };

        newChartData.labels.push(label);
        newChartData.values.push(value);
        newChartData.colors.push(color);
        setChartData(newChartData)
    };

    const popItem = (index, count) => {

        const newChartData = {
            labels: chartData.labels,
            values: chartData.values,
            colors: chartData.colors,
        };

        newChartData.labels.splice(index, count);
        newChartData.values.splice(index, count);
        newChartData.colors.splice(index, count);
        setChartData(newChartData)
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         addItem("Телевизор", 612, '#495ce2');
    //     }, 5000);
    //
    //     setTimeout(() => {
    //         addItem('Чайник', 777, "#2160b0");
    //     }, 10000);
    //
    //     setTimeout(() => {
    //         addItem('Зарядки', 543, "#5773ff");
    //     }, 15000);
    //
    //     setTimeout(() => {
    //         popItem(4, 2)
    //     }, 16000);
    //
    //     setTimeout(() => {
    //         popItem(3, 1)
    //     }, 30000);
    //
    // },[]);


    return (
        <>
            <section className="user-statistics-section animated fadeIn">
                <div className="container">
                    <h2>Статистика</h2>
                    <div className="content-row">
                        <div className="content-row__item">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Выбрать другую дату"
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}/>
                            </MuiPickersUtilsProvider>


                            <div className="donut-chart">
                                <h4>Сейчас приборы потребляют: <b>
                                {/*    {chartData.values.reduce((acc, i) => {*/}
                                {/*    acc += i;*/}
                                {/*    return acc;*/}
                                {/*})} */}
                                    {nowData.value ? nowData.value : 0} Вт</b></h4>
                                <h4>Потреблено за последний час: <b>
                                    {hourData.powerScore ? (hourData.powerScore * 220 / 10000000).toFixed(0) : 0} Вт</b></h4>
                                <Doughnut data={donutData} options={donutOptions} width={(windowWidth > 600) ? 420 : 320} height={190} redraw/>
                            </div>
                        </div>
                        <div className="content-row__item">
                            <Paper elevation={3} className="box-info">
                                <div className="box-info__title">Информация о системе</div>
                                <div className="box-info__text"><span className="box-info__subject">ID коробки</span>: 13053563</div>
                                <div className="box-info__text"><span className="box-info__subject">Тип счетчика</span>: двухтарифный</div>
                                <div className="box-info__text"><span className="box-info__subject">Действующий тариф</span>: 3.5 руб/кВт*час</div>
                                <div className="box-info__text"><span className="box-info__subject">Тариф с 23-00</span>: 1.8 руб/кВт*час</div>
                                <div className="box-info__text"><span className="box-info__subject">Адрес</span>: ул. Пушкина, д. 3</div>

                                <Button variant={"contained"}
                                        color={"primary"}
                                        size={"large"}
                                        type={"submit"}
                                        className={"main-btn form-item"}>Получить данные</Button>
                            </Paper>
                        </div>

                    </div>
                    <div className="bar-chart">
                        <h4>Потреблено всего за день: <b>{data_31.reduce((acc, i) => {
                            acc += i;
                            return acc;
                        })} кВт</b></h4>
                        <Bar data={barData} height={(windowWidth > 600) ? 100 : 250}/>
                    </div>
                </div>


            </section>
        </>
    )
};

export default Statistics;