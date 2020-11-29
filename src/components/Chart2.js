import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {predicted_value} from "../data/predicted_value";

const Chart2 = ({secondStep}) => {
    const chart2 = useRef(null);

    const convertDate = (dateString, hour) => {
        let oldDate = dateString.split('.');
        return `${oldDate[2]}-${oldDate[1]}-${oldDate[0]}T${hour < 10 ? `0${hour}` : hour}:00:00`;
    };

    const getDataSecond = () => {
        let data = [];

        for (let i = 1; i < predicted_value.length; i++) {
            data.push({
                date: new Date(convertDate(predicted_value[i].date, predicted_value[i].hour)),
                fact_value: predicted_value[i].fact_value,
                predict_value: predicted_value[i].predict_value
            });
        }

        return data;
    };

    useLayoutEffect(() => {

        let chartSetting = am4core.create("chartdiv2", am4charts.XYChart);

        chartSetting.paddingRight = 20;

        let data = [{
            date: new Date(),
            fact_value: 0,
            predict_value: 0,
        }];

        // for (let i = 1; i < 20; i++) {
        //     data.push({ date: new Date(convertDate(chartData[i].date, chartData[i].hour)), name: "name" + i, value: chartData[i].value });
        // }


        chartSetting.data = data;

        let dateAxis = chartSetting.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = chartSetting.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        let series = chartSetting.series.push(new am4charts.LineSeries());
        series.name = 'Фактические данные';
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "fact_value";
        series.tooltipText = "{valueY}";

        let series2 = chartSetting.series.push(new am4charts.LineSeries());
        series2.name = 'Прогноз';
        series2.dataFields.dateX = "date";
        series2.dataFields.valueY = "predict_value";
        series2.tooltipText = "{valueY}";

        chartSetting.cursor = new am4charts.XYCursor();

        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        scrollbarX.series.push(series2);
        chartSetting.scrollbarX = scrollbarX;

        chartSetting.legend = new am4charts.Legend();
        chartSetting.legend.useDefaultMarker = true;
        var marker = chartSetting.legend.markers.template.children.getIndex(0);
        marker.cornerRadius(12, 12, 12, 12);
        marker.strokeWidth = 2;
        marker.strokeOpacity = 1;
        marker.stroke = am4core.color("#ccc");

        chart2.current = chartSetting;

        return () => {
            chartSetting.dispose();
        };
    }, []);


    useEffect(() => {
        if (secondStep) {
            chart2.current.data = getDataSecond();
        }
    }, [secondStep]);

    return (
        <>
            <div id="chartdiv2" style={{ width: "100%", height: "600px" }}></div>
        </>
    )
};

export default Chart2;