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
      formatter: '{b}' + '<br />' + kpi + ':{c}' + unit,
    },
    grid: {
      top: 50,
      bottom: 70,
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
    series.push({
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
      top: 50,
      bottom: 70,
      left: 70,
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

export function mockMapData() {

  const cities = ['南京','苏州','无锡','常州','镇江','扬州','泰州','南通','淮安','连云港','盐城','徐州','宿迁']
  let data = []
  cities.map(v =>
    data.push({
      name: v,
      value: _.random(1000,2000),
    })
  )
  return {
    tooltip : {
      trigger: 'item'
    },
    legend: {
      show: false,
      orient: 'vertical',
      left: 'left',
      data:['白天']
    },
    visualMap: {
      show: false,
      min: 0,
      max: 2500,
      left: 'left',
      top: 'bottom',
      text:['高','低'],           // 文本','默认为数值文本
      calculable : true
    },
    series : [
      {
        name: '白天',
        type: 'map',
        mapType: 'jiangsu',
        roam: false,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#B8E6FE'
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              color: '#B8E6FE',
//            fontWeight: 'bold',
//            color: '#000'
            }
          },
        },
        itemStyle: {
          normal: {
            areaColor: '#6cA9EB',
            borderColor: '#447cca',
            borderWidth: 1,
          },
          emphasis: {
            //LightGreen
//          areaColor: '#9ccc65',
//          shadowColor: '#8bc34a',
            //LightBlue
            areaColor: '#03a9f4',
            shadowColor: '#039be5',
            //Green
//          areaColor: '#42bd41',
//          shadowColor: '#2bafab',
            //Lime
//          areaColor: '#d4e157',
//          shadowColor: '#cddc39',
            borderColor: '#FFF',
            shadowBlur: 10,
            shadowOffsetX: 10,
            shadowOffsetY: 10,
            opacity: 0.8,
          }
        },

        data
      }
    ]
  }
}
