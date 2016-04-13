/**
 * Created by liekkas on 16/3/3.
 */
import _ from 'lodash'
import echarts from 'echarts'

export function getSingleOption(labels,datas,unit,kpi) {
  return {
//    backgroundColor: 'rgba(0,57,100,0.6)',
    title: {
      show: false,
      x: 'right',
      text: kpi,
      subtext: unit,
    },
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#7C8088'
        }
      },
      formatter: '{b}' + '<br />' + '{a}:{c}' + unit,
    },
    grid: {
      top: 70,
      bottom: 50,
      borderColor: '#fff',
      borderWidth: 5,
//      right: 100,
//      left: 100,
    },
    legend: {
      top: 'bottom',
      data: ['意向']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {show: false},
        dataView: {show: false, readOnly: false},
        magicType: {show: false, type: ['line', 'bar']},
        restore: {show: false},
        saveAsImage: {show: true}
      },
      iconStyle: {
        normal: {
//          color: '#ffffff',
//          borderColor: '#7c8088',
        },
        emphasis: {
//          borderColor: '#FFAA00',
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: labels,
        axisLine: {
          lineStyle: {
            color: '#7c8088',
          }
        },
        axisTick: {
          lineStyle: {
            color: '#7c8088',
          }
        },
        axisLabel: {
          textStyle: {
            color: '#7c8088',
          }
        },
        splitLine: {
          show: false
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
//        max: 500,
        axisLine: {
          lineStyle: {
            color: '#7c8088',
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#7c8088',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#7c8088',
            fontFamily: '黑体',
            fontSize: 13,
          },
//          formatter: getFormat(kpi) + unit
          formatter: function (value, index) {
            switch (kpi) {
              case '使用时长':
              case '点播时长':
                return value / 10000 + '万' + unit
              default:
                return value + unit;
            }
          }
        },
        splitLine: {
          lineStyle: {
            color: '#7c8088',
          }
        },
      }
    ],
//    dataZoom: {
//      type: 'inside',
//      start: 60,
//      end: 80
//    },
    series: [
      {
        name: kpi,
        type: 'line',
        areaStyle: {
          normal: {
//            color: 'rgba(128, 128, 128, 0.2)',
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
//              color: 'rgb(255, 158, 68)'
              color: 'rgb(128, 30, 34)'
            }, {
              offset: 1,
//              color: 'rgb(255, 70, 131)'
//              color: 'rgba(33, 33, 33, 0.1)'
              color: 'rgba(255, 200, 68, 0.1)'
            }])
          }
        },
        smooth: true,
        data: datas,
//        markPoint : {
//          data : [
//            {type : 'max', name: '最大值'},
//            {type : 'min', name: '最小值'}
//          ]
//        },
        markLine : {
          data : [
            {
              type : 'average',
              name: '平均值',
              label: {
                normal: {
//                  color: '#00ff00'
                }
              },
            }
          ],
          lineStyle: {
            normal: {
//              color: '#00ff00'
            }
          },
          label: {
            normal: {
              formatter: '{c}' + unit
            }
          },

        },
      }
    ]
  }
}

export function getMultiOption(labels,datas,legends,unit,kpi) {
  let series = []
  for (let i = 0; i < legends.length; i++) {
    kpi === '市占率' || kpi === '节目比重'
      ? series.push({
        name: legends[i],
        type: 'bar',
        stack: '总量',
        data: datas[i],
      })
      : series.push({
        name: legends[i],
        type: 'bar',
        data: datas[i],
      })
  }

  return {
//    backgroundColor: 'rgba(0,57,100,0.6)',
    color: ['#c94638','#396cbd'],
    title: {
      show: false,
      x: 'right',
      text: kpi,
      subtext: unit,
    },
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        type : 'shadow',
//        lineStyle: {
//          color: '#7c8088'
//        }
      },
//      formatter: '{b}' + '<br />' + '{a}:{c}' + unit + '<br />' + '{a1}:{c1}' + unit,
      formatter: function (item) {
        if (item.length === 2) {
          const v1 = item[0]
          const v2 = item[1]
          return v1.name + '<br />'
            + v1.seriesName + ':  ' + v1.value + unit + '<br />'
            + v2.seriesName + ':  ' + v2.value + unit + '<br />'
        } else if (item.length === 1) {
          const v1 = item[0]
          return v1.name + '<br />'
            + v1.seriesName + ':  ' + v1.value + unit
        }

        return ''
      },
    },
    grid: {
      top: 70,
      bottom: 55,
    },
    legend: {
      left: 'center',
      top: 20,
      textStyle: {
        color: '#7c8088',
        fontFamily: '黑体',
        fontSize: 14,
      },
      data: legends
    },
    toolbox: {
      show: false,
      feature: {
        mark: {show: false},
        dataView: {show: false, readOnly: false},
        magicType: {show: false, type: ['line', 'bar']},
        restore: {show: false},
        saveAsImage: {show: true}
      },
      iconStyle: {
        normal: {
//          color: '#ffffff',
//          borderColor: '#7c8088',
        },
        emphasis: {
//          borderColor: '#FFAA00',
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: labels,
        axisLine: {
          lineStyle: {
            color: '#7c8088',
          }
        },
        axisTick: {
          lineStyle: {
            color: '#7c8088',
          }
        },
        axisLabel: {
          textStyle: {
            color: '#7c8088',
          }
        },
        splitLine: {
          lineStyle: {
            color: '#7c8088',
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
//        max: 500,
        axisLine: {
          lineStyle: {
            color: '#7c8088',
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#7c8088',
          }
        },
        axisLabel: {
          textStyle: {
            color: '#7c8088',
            fontFamily: '黑体',
            fontSize: 13,
          },
          formatter: function (value, index) {
            switch (kpi) {
              case '使用时长':
              case '点播时长':
                return value / 10000 + '万' + unit
              default:
                return value + unit;
            }
          }
        },
        splitLine: {
          lineStyle: {
            color: '#7c8088',
          }
        },
      }
    ],
//    dataZoom: {
//      type: 'inside',
//      start: 60,
//      end: 80
//    },
    series
  }
}

export function getOrderOption(labels,datas,unit,kpi) {
  const end = datas.length > 100 ? 10 : datas.length

  return {
//    backgroundColor: 'rgba(0,57,100,0.6)',
    title: {
      show: false,
      x: 'right',
      text: kpi,
      subtext: unit,
    },
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        type : 'shadow',
        lineStyle: {
          color: '#7c8088'
        }
      },
//      formatter: '{b}' + '<br />' + '{a}:{c}' + unit,
      formatter: function (item) {
        const d = item[0]
        return d.name + '<br />'
          + d.seriesName + ':  ' + d.data.value + unit + '<br />'
          + '排名:  ' + d.data.rank;
      },
    },
    grid: {
      top: 70,
      bottom: 76,
    },
    legend: {
      top: 'bottom',
      data: ['意向']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {show: false},
        dataView: {show: false, readOnly: false},
        magicType: {show: false, type: ['line', 'bar']},
        restore: {show: false},
        saveAsImage: {show: true}
      },
      iconStyle: {
        normal: {
//          color: '#ffffff',
//          borderColor: '#7c8088',
        },
        emphasis: {
//          borderColor: '#FFAA00',
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: labels,
        axisLine: {
          lineStyle: {
            color: '#7c8088',
//            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisTick: {
          lineStyle: {
//            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisLabel: {
          textStyle: {
            color: '#7c8088',
          }
        },
        splitLine: {
          lineStyle: {
            color: '#7c8088',
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
//        max: 500,
        axisLine: {
          lineStyle: {
            color: '#7c8088',
//            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
//            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisLabel: {
          textStyle: {
            color: '#7c8088',
            fontFamily: '黑体',
            fontSize: 13,
          },
//          formatter: getFormat(kpi) + unit
          formatter: function (value, index) {
            switch (kpi) {
              case '使用时长':
              case '点播时长':
                return value / 10000 + '万' + unit
              default:
                return value + unit;
            }
          }
        },
        splitLine: {
          lineStyle: {
            color: '#7c8088',
          }
        },
      }
    ],
    dataZoom: {
      type: 'slider',
      dataBackgroundColor: '#7c8088',
      fillerColor: 'rgba(255,0,0,0.2)',
      handleColor: 'rgba(194,53,49,0.8)',
      bottom: 12,
      start: 0,
      end,
      textStyle: {
//        color: '#7c8088',
        color: '#fff',
      }
    },
//    dataZoom: {
//      type: 'inside',
//      start: 60,
//      end: 80
//    },
    series: [
      {
        name: kpi,
        type: 'bar',
        data: datas,
        itemStyle : { normal: {label : {show: false, position: 'insideRight'}} },
      }
    ]
  }
}

var lineStyle = {
  normal: {
    width: 1,
    opacity: 0.5
  }
};

export function getRadarOption(labels,datas) {
  let inds = []
  const max = _.maxBy(datas, function(o) { return Number(o); });
  for (let i = 0; i < labels.length; i++) {
    inds.push({
      name: labels[i],
      max
    })
  }

  return {
//    backgroundColor: '#161627',
    title: {
      text: '市占率',
//      x: 'center',
      right: 20,
      top: 10,
      textStyle: {
        color: '#E2E3E4',
        fontWeight: 'normal',
        fontSize: 16,
      }
    },
    tooltip : {
      trigger: 'item'
    },
    radius: '70%',

    radar: {
      indicator: inds,
      shape: 'circle',
      splitNumber: 5,
      name: {
        textStyle: {
          color: 'rgb(238, 197, 102)'
        }
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
          ].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(238, 197, 102, 0.5)'
        }
      }
    },
    series: [
      {
        name: '市占率',
        type: 'radar',
        lineStyle: lineStyle,
        data: [datas],
        symbol: 'none',
        itemStyle: {
          normal: {
            color: '#F9713C'
          }
        },
        areaStyle: {
          normal: {
            opacity: 0.7
          }
        }
      }
    ]
  }
}
export function getPieOption(labels,datas) {
  let values = []
  for (let i = 0; i < labels.length; i++) {
    values.push({
      name: labels[i],
      value: datas[i]
    })
  }

  return {
    color: ['#993333','#396cbd', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#CD7F32',],

//    color: ['rgba(238, 197, 102, 0.6)','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'],
    title: {
      text: '点播时长',
//      x: 'center',
      left: 20,
      top: 10,
      textStyle: {
        color: '#E2E3E4',
        fontWeight: 'normal',
        fontSize: 16,
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
//      orient: 'vertical',
//      x: 'right',
//      right: 20,
//      top: 20,
      show: false,
      textStyle: {
        color: '#7c8088'
      },
      data: labels
    },
    series: [
      {
        name: '点播时长',
        type: 'pie',
//        radius: ['50%', '70%'],
        avoidLabelOverlap: true,
        label: {
          normal: {
            show: true,
//            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: values
      }
    ]
  }
}
