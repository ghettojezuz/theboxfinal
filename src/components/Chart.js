import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {data} from "../data/data";


const Chart = () => {
    const [chartData, setChartData] = useState(data);
    const chart = useRef(null);

    const convertDate = (dateString, hour) => {
        let oldDate = dateString.split('.');
        return `${oldDate[2]}-${oldDate[1]}-${oldDate[0]}T${hour < 10 ? `0${hour}` : hour}:00:00`;
    };

    useLayoutEffect(() => {

        let chartSetting = am4core.create("chartdiv", am4charts.XYChart);

        chartSetting.paddingRight = 20;

        let data = [];

        for (let i = 1; i < 20; i++) {
            data.push({ date: new Date(convertDate(chartData[i].date, chartData[i].hour)), name: "name" + i, value: chartData[i].value });
        }


        chartSetting.data = data;

        let dateAxis = chartSetting.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = chartSetting.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        let series = chartSetting.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        series.tooltipText = "{valueY.value}";
        chartSetting.cursor = new am4charts.XYCursor();

        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chartSetting.scrollbarX = scrollbarX;

        chart.current = chartSetting;

        return () => {
            chartSetting.dispose();
        };
    }, []);

    return (
        <>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </>
    )
};

export default Chart;