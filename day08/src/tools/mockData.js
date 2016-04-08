/**
 * Created by liekkas on 16/4/4.
 */

const details = {
  湖南: [
    {name: '长沙', value: '57'},
    {name: '湘潭', value: '21'},
    {name: '浏阳', value: '20'},
    {name: '岳阳', value: '19'},
    {name: '益阳', value: '18'},
  ],
  河北: [
    {name: '唐山', value: '26'},
    {name: '承德', value: '13'},
    {name: '沧州', value: '15'},
    {name: '秦皇岛', value: '34'},
  ],
  山东: [
    {name: '威海', value: '83'},
  ],
  河南: [
    {name: '周口', value: '8'},
  ]
}

function getDetail(name) {
  if (!details.hasOwnProperty(name)) return ''

  const cities = details[name]
  let result = '<br />----------------<br />'
  for (let i = 0; i < cities.length; i++) {
    result += cities[i].name + ': ' + cities[i].value + '万户<br />'
  }
  return result
}

const provinces = ['江苏','湖北','安徽','湖南','河北','山东','河南']

export function mockMapData() {

  const v1 = ['1885','870','447','135','88','83','8']
  let data = []
  provinces.map((province,index) =>
    data.push({name: province, value: v1[index]})
  )

  return {
    textStyle: {
      color: '#fff',
    },
    title: {
      text: '全国电视用户数据资产情况',
      left: 'center',
      top: 30,
      textStyle: {
        color: '#c0d5ff',
        fontSize: 26
      }
    },
    visualMap: {
      show: true,
      inRange: {
        color: ['#ffb74d', '#e94f26'],
        symbolSize: [30, 100]
      },
      min: 0,
      max: 2000,
      formatter: '{value}万户',
      bottom: 30,
      right: 30,
      text: ['高', '低'],           // 文本，默认为数值文本
      calculable: true,
      textStyle: {
        color: '#c0d5ff',
//      fontSize: 26
      }
    },
    tooltip: {
      padding: 10,
      trigger: 'item',
      formatter: (item) => (isNaN(item.value)
        ? null
        : '有线电视用户数<br />' + item.name + '省: ' + item.value + '万户' + getDetail(item.name)),
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: '有线电视用户数',
        type: 'map',
//        top: '248',
//        left: '730',
//      right: '20%',
//        bottom: '178',
        mapType: 'china',
        z: 3,
        zlevel: 3,
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
              fontWeight: 'bold',
            }
          },

        },
        roam: false,
        itemStyle: {
          normal: {
            areaColor: '#6cA9EB',
            borderColor: '#447cca',
            borderWidth: 1,
          },
          emphasis: {
            areaColor: '#03a9f4',
            shadowColor: '#039be5',
            borderColor: '#FFF',
            shadowBlur: 10,
            shadowOffsetX: 10,
            shadowOffsetY: 10,
            opacity: 0.8,
          }
        },

        data
      },
//
    ]
  }
}

export function mockBarData() {
  let barData = []
  const reProvinces = provinces
//const d1 = [1885,870,447,135,88,83,8]
  const d2 = [1885,870,447,135,88,83,8].reverse()
//const d2 = [1365,800,405,126,87,82,4]
  const d1 = [1365,800,405,126,87,82,4].reverse()
  const types = ['数字电视用户数(万户)','有线电视用户数(万户)']
  for (let j = 0; j < types.length; j++) {
    let d = []
    for (let k = 0; k < reProvinces.length; k++) {
      d.push(j === 0 ? d1[k] : d2[k])
    }

    barData.push({
      name: types[j],
      type:'bar',
      stack: '总量',
//    itemStyle : { normal: {label : {show: true, position: j === 0 ? 'insideLeft' : 'insideLeft'}} },
      itemStyle : {
        normal: {
          label : {
            show: true,
            position: j === 0 ? 'insideRight' : 'right',
            textStyle: {
              color: '#FFF',
              fontFamily: '黑体'
            }
          }
        }
      },
      barWidth: 14,
//    barGap: '40%',
//    barCategoryGap: '40%',
      data:d
    })
  }
  return {
    color: ['#396cbd','#c94638'],

    legend: {
//    show: false,
      data:['数字电视用户数(万户)','有线电视用户数(万户)'],
//    y: 'top',
//    x: 'center',
//    itemHeight: 20,
//    itemWidth: 25,
      selectedMode: false,
      textStyle: {
        color: '#5fa4d9',
        fontSize: 13,
        fontFamily: '黑体'
      },
      top: 10,
    },
    grid: {
      left: 50,
//    right: '4%',
      bottom: '4%',
      top: 40,
//    containLabel: true
    },
    xAxis : [
      {
//      type : 'value',
        type : 'log',
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisLabel: {
          show: false,
          textStyle: {
            color: '#314656',
          }
        },
        splitLine: {
          show: false,
        },
      }
    ],
    yAxis : [
      {
        type : 'category',
//      data : provinces,
        data : provinces.reverse(),
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.8)',
          }
        },
        axisLabel: {
          right: 20,
          textStyle: {
            color: '#5fa4d9',
            fontSize: 13,
            fontFamily: '黑体'
          },
        },
        splitLine: {
          show: false,
        },
      }
    ],
    series : barData
  }
}

export function mockTableColumns(module) {
  let columns = []
  for (let v = 1; v < 8; v++) {
    columns.push({
      title: module + '指标' + v,
      dataIndex: 'index' + v,
      key: 'key' + v,
    })
  }
  return columns
}

export function mockTableData(module) {
  const columns = mockTableColumns(module)
  let result = []
  for (let i = 0; i < 50; i++) {
    let v = {uid: i} //需要提供uid保证数据唯一
    columns.map(item =>
      v[item.dataIndex] = Math.ceil(Math.random() * 100)
    )
    result.push(v)
  }
  return result
}
