
function histogram(){
    fetch('histogram.json')
    .then(response => response.json())
    .then(dataset => Highcharts.chart('container', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Histogram of Authorized Capital'
      },
      xAxis: {
          type: 'category',
          labels: {
              rotation: 0,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Authorized Capital'
          }
      },
      legend: {
          enabled: false
      },
      // tooltip: {
      //     pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
      // },
      series: [{
          name: 'Number of companies',
          data: dataset,
          dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]
    }));
}
function bar_graph(){fetch('bar_chart.json')
.then(response => response.json())
.then(dataset => Highcharts.chart('container', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Bar graph for number of company registration per year'
  },
  xAxis: {
      type: 'category',
      labels: {
          rotation: 0,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Number of Registrations'
      }
  },
  legend: {
      enabled: false
  },
  // tooltip: {
  //     pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
  // },
  series: [{
      name: 'Number of companies',
      data: dataset,
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
}));

}
function count_by_activity(){fetch('count_by_activity.json')
.then(response => response.json())
.then(dataset => Highcharts.chart('container', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Bar graph based on Principle business activity'
  },
  xAxis: {
      type: 'category',
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Number of companies'
      }
  },
  legend: {
      enabled: false
  },
  // tooltip: {
  //     pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
  // },
  series: [{
      name: 'Number of companies',
      data: dataset,
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
}));
}
function group(){fetch('group.json')
.then(response => response.json())
.then(dataset => Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of Registration based on Principle Business Activity'
    },
    xAxis: {
        categories: ['Tradding',
        'Agriculture',
        'Mining',
        "Manufacturing"
            
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Registrations'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: dataset
}));

}