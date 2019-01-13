import echarts from 'echarts'

/**
 * 地区生产总值 柱状图配置
 */
export var total = {
  title: {
    text: '地区生产总值(亿元)',
    subtext: '来源: 国家数据',
    left: '10%',
    top: '3%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '10%',
    right: '12%',
    top: '15%',
    bottom: 0,
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: [''],
    axisTick: {
      alignWithLabel: true
    }
  }],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: '亿元',
    type: 'bar',
    barWidth: '60%',
    data: []
  }]
}

/**
 * 工资 柱状+折线图配置
 */
export var salary = {
  title: {
    text: '城镇单位就业人员工资',
    subtext: '来源: 国家数据',
    left: '10%',
    top: '3%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#283b56'
      }
    }
  },
  legend: {
    top: '3%',
    data: ['平均工资', '工资总额']
  },
  grid: {
    left: '10%',
    right: '12%',
    top: '16%'
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
  },
  xAxis: [{
      type: 'category',
      boundaryGap: true,
      data: ['']
    },
    {
      type: 'category',
      boundaryGap: true,
      data: ['']
    }
  ],
  yAxis: [{
      type: 'value',
      scale: true,
      name: '(元)',
      boundaryGap: [0.2, 0.2]
    },
    {
      type: 'value',
      scale: true,
      name: '(亿元)',
      boundaryGap: [0.2, 0.2]
    }
  ],
  series: [{
      name: '工资总额',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: []
    },
    {
      name: '平均工资',
      type: 'line',
      data: []
    }
  ]
}

/**
 * 投资 堆叠柱状图配置
 */
export var invest = {
  title: {
    top: '3%',
    left: '10%',
    text: '固定资产投资',
    subtext: '来源: 国家数据'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    top: '3%',
    data: ['全社会固定资产投资(亿元)', '房地产投资额(亿元)']
  },
  grid: {
    left: '10%',
    right: '12%',
    top: '15%',
    bottom: 0,
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['']
  },
  series: [{
      name: '全社会固定资产投资(亿元)',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: []
    },
    {
      name: '房地产投资额(亿元)',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: []
    }
  ]
}

/**
 * 财政收支 双柱状图配置
 */
export var income = {
  title: {
    top: '3%',
    left: '9%',
    text: '财政收支',
    subtext: '来源: 国家数据'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    top: '3%',
    data: ['一般预算收入(亿元)', '一般预算支出(亿元)']
  },
  grid: {
    left: '10%',
    right: '12%',
    top: '15%',
    bottom: 0,
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['']
  },
  series: [{
      name: '一般预算收入(亿元)',
      type: 'bar',
      data: []
    },
    {
      name: '一般预算支出(亿元)',
      type: 'bar',
      data: []
    }
  ]
}

/**
 * 人口分布 图表配置
 */
export var gdpDistribution = {
  title: {
    text: '2017年西藏各地区 地区生产总值',
    x: 'center',
    top: '3%'
  },
  tooltip: {
    trigger: 'item'
  },
  dataRange: {
    min: 0,
    max: 250,
    x: '85%',
    y: 'bottom',
    text: ['高', '低'],
    calculable: true
  },
  roamController: {
    show: true,
    x: 'right',
    mapTypeControl: {
      '西藏': true
    }
  },
  series: [{
    top: '15%',
    name: '地区生产总值(亿元)',
    type: 'map',
    mapType: '西藏',
    roam: false,
    itemStyle: {
      normal: {
        label: {
          show: true
        }
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
    data: []
  }]
}

function tooltipCharts(education) {
  var myChart = echarts.init(document.getElementById('tooltipBarId'));
  var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}({d}%)"
    },
    dataset: {
      source: {"name":['研究生', '本科生', '专科生', '高中生', '初中生', '小学生', '未上学'], '数量(万人)': education}
    },
    series: [{
        name: '受教育情况',
        type: 'pie',
        label: {
            normal: {
                textStyle: {
                    color: '#666',
                    fontSize: 14,
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
    color: [
        '#00acee',
        '#52cdd5',
        '#79d9f1',
        '#a7e7ff',
        '#c8efff'
    ],
    backgroundColor: '#fff'
};
  myChart.setOption(option);
}

export var population = {
  title: {
    text: '第6次人口普查 人口及受教育程度分布',
    x: 'center',
    top: '3%'
  },
  visualMap: {
      min: 0,
      max: 80,
      right: '5%',
      top: 'bottom',
      text: ['高', '低'],
      calculable: false,
      orient: 'horizontal',
      inRange: {
          color: ['#e0ffff', '#006edd'],
          symbolSize: [30, 100]
      }
  },
  tooltip: {
      padding: 0,
      enterable: true,
      transitionDuration: 1,
      textStyle: {
          color: '#000',
          decoration: 'none',
      },
      formatter: function(params) {
          var tipHtml = '';
          tipHtml = '<div style="height:360px;width:400px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa">' +
              '    <div style="height:50px;width:100%;border-radius:5px;background:#F8F9F9;border-bottom:1px solid #F0F0F0">' +
              '        <span style="line-height:50px;margin-left:18px">' + params.name + '</span>' +
              '        <span style="float:right;line-height:50px;margin-right:18px;color:#5396E3;cursor:pointer" onclick="mapTooltipClick(this);">点击查看详情</span>' +
              '    </div>' +
              '    <div style="height:50px;width:100%;background:#fff">' +
              '        <div style="padding-left:18px;padding-top:22px">' +
              '            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
              '            <span>地区总人口</span>' +
              '            <span style="float:right;margin-right:18px">' + params.data.value + '万人</span>' +
              '        </div>' +
              '    </div>' +
              '    <div id="tooltipBarId" style="height:300px;width:100%;border-radius:0 0 5px 0;background:#fff"></div>' +
              '</div>';
          
          setTimeout(function() {
              tooltipCharts(params.data.education);
          }, 10);
          return tipHtml;
      }
  },
  series: [{
      name: 'iphone4',
      type: 'map',
      top: '15%',
      mapType: '西藏',
      itemStyle: {
          normal: {
              label: {
                  show: true
              }
          },
          emphasis: {
              label: {
                  show: true
              }
          }
      },
      data: []
  }]
}