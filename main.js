var renderFirstChart = function(){
    var chart = new CanvasJS.Chart("firstChart", {
        title: {
            text: "Difference between Implied and Actual Core Index",
            fontSize: 25,
            fontColor: "#2f4f4f",
            fontWeight: "bold",
            verticalAlign: "top"
        },
        theme: "theme1",
        animationEnabled: true,
        animationDuration: 1000,
        exportEnabled: true,
        exportFileName: "Difference between Implied and Actual Core Index",
        dataPointWidth: 45,
        axisX: {
            title: "Difference between Implied and Actual Core Index",
            labelFontSize: 13,
            titleFontSize: 18,
            labelWrap: true,
            labelAngle: 0
        },
        axisY: [{
            title: "Difference (in EuroDollar Ticks)",
            labelFontSize: 13,
            titleFontSize: 18
        }],
        data: [
            {
                type: 'column',
                dataPoints: [
                    { x: 1, y: 1.33341212, label: "EDU7 COMB Comdty" },
                    { x: 2, y: 2.46894075, label: "EDZ7 COMB Comdty" },
                    { x: 3, y: 3.16283647, label: "EDH8 COMB Comdty" },
                    { x: 4, y: 3.03617216, label: "EDM8 COMB Comdty" },
                    { x: 5, y: 8.27396953, label: "EDU8 COMB Comdty" },
                    { x: 6, y: 5.58612827, label: "EDZ8 COMB Comdty" },
                    { x: 7, y: 3.85246686, label: "EDH9 COMB Comdty" },
                    { x: 8, y: 3.96202648, label: "EDM9 COMB Comdty" },
                    { x: 9, y: 2.63524932, label: "EDU9 COMB Comdty" },
                    { x: 10, y: 5.87592157, label: "EDZ9 COMB Comdty" },
                    { x: 11, y: 6.531, label: "EDH0 COMB Comdty" }
                ]
            }
        ]
    });
    chart.render();

    $("#changeTheme").click(function () {
        chart.options.theme = "theme2";
        chart.render();
    });

    $("#resetTheme").click(function () {
        chart.options.theme = "theme1";
        chart.render();
    });
},
    renderSecondChart = function(){
        var data = [],
            dataSeries1 = { type: "line", showInLegend:true, legendText:"Prediction", name: "Prediction", color:"rgb(208,118,115)"},
            dataSeries2 = { type: "line", showInLegend: true, legendText: "Actual", name: "Actual", color:"rgb(116,84,122)"},
            dataPoints1 = [],
            dataPoints2 = [],
            y1 = 0, y2 = 5;
        for (var i = 0; i < 500; i++) {
            y1 += (Math.random() * 10 - 5);
            y2 += (Math.random() * 10 - 5);
            dataPoints1.push({
                x: i,
                y: y1
            });
            dataPoints2.push({
                x:i,
                y: y2
            });
        }
        dataSeries1.dataPoints = dataPoints1;
        dataSeries2.dataPoints = dataPoints2;
        data.push(dataSeries1);
        data.push(dataSeries2);
        var currentData = data;
        var chart = new CanvasJS.Chart("secondChart", {
            title: {
                text: "2 Year WI vs. Current Yield Spread: Announcement to Auction",
                fontSize: 25,
                fontColor: "#2f4f4f",
                fontWeight: "bold",
                verticalAlign: "top"
            },
            zoomEnabled: true,
            subtitles: [{
                text:"(Prediction vs. Actual)"
            }],
            toolTip:{
                shared: true
            },
            animationEnabled: true,
            animationDuration: 1000,
            exportEnabled: true,
            exportFileName: "2 Year WI vs. Current Yield Spread: Announcement to Auction",
            dataPointWidth: 45,
            axisX: {
                title: "",
                labelFontSize: 13,
                titleFontSize: 18,
                labelWrap: true,
                labelAngle: 0
            },
            axisY: [{
                title: "Spread(bps)",
                labelFontSize: 13,
                titleFontSize: 18
            }],
            data: currentData
        });
        chart.render();

        $("#showPrediction").click(function () {
            currentData = [];
            currentData.push(dataSeries1);
            chart.options.data = currentData;
            chart.render();
        });

        $("#showActual").click(function () {
            currentData = [];
            currentData.push(dataSeries2);
            chart.options.data = currentData;
            chart.render();
        });

        $('#reset').click(function() {
            currentData = [];
            currentData = data;
            chart.options.data = currentData;
            chart.render();
        });

    };

window.onload = function () {
   renderFirstChart();
   renderSecondChart();
}