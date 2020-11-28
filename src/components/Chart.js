import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { data_predicted_min } from "../data/data_predicted_min";


const Chart = ({isPrediction}) => {
    const chart = useRef(null);
    const [isDefault, setIsDefault] = useState(true);

    const convertDate = (dateString, hour) => {
        let oldDate = dateString.split('.');
        if (oldDate.length <= 1) oldDate = oldDate[0].split('-');
        return `${oldDate[2]}-${oldDate[1]}-${oldDate[0]}T${hour < 10 ? `0${hour}` : hour}:00:00`;
    };

    const getData = (isDefault) => {
        let data = [];

        for (let i = 1; i < data_predicted_min.length; i++) {
            if (isDefault && data_predicted_min[i].fact_value == 0) return data;
            data.push({
                date: new Date(convertDate(data_predicted_min[i].date, data_predicted_min[i].hour)),
                fact_value: data_predicted_min[i].fact_value,
                predict_value: data_predicted_min[i].predict_value
            });
        }

        return data;
    };

    useLayoutEffect(() => {

        let chartSetting = am4core.create("chartdiv", am4charts.XYChart);

        chartSetting.paddingRight = 20;

        chartSetting.data = getData(isDefault);

        console.log(chartSetting.data)

        let dateAxis = chartSetting.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = chartSetting.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
        valueAxis.title.text = "МВт * час";

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

        chart.current = chartSetting;

        return () => {
            chartSetting.dispose();
        };
    }, []);

    useEffect(() => {
        setIsDefault(!setIsDefault);
        chart.current.data = getData(isDefault);
    }, [isPrediction]);

    return (
        <>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </>
    )
};

export default Chart;