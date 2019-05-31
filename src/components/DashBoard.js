import React, { Component } from "react";
import ReactHighcharts from "react-highcharts";
import Highcharts from "highcharts";
import Drilldown from "highcharts-drilldown";
import Grid from "@material-ui/core/Grid";

Drilldown(Highcharts);

const data = {
  stock: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
  member: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
};

const monthConfig = {
  chart: {
    type: "spline"
  },
  title: {
    text: "회원가입수"
  },
  subtitle: {
    text: "재고수"
  },
  xAxis: {
    categories: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ]
  },
  yAxis: {
    title: {
      text: ""
    },
    labels: {
      formatter: function() {
        return this.value + "(명, 대수)";
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: "#666666",
        lineWidth: 1
      }
    }
  },
  series: [
    {
      name: "재고수",
      marker: {
        symbol: "square"
      },
      data: data.stock
    },
    {
      name: "가입자수",
      marker: {
        symbol: "diamond"
      },
      data: data.member
    }
  ]
};



export default class DashBoard extends Component {
state={
  data:null,
}


  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item xs>
          <ReactHighcharts config={monthConfig} />
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={0}
        >
          <Grid item xs>
            <ReactHighcharts config={monthConfig} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
