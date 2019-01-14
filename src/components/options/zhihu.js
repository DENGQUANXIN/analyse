import echarts from 'echarts'

/**
 * 文章类别 图表配置
 */
export var classfication = {
  backgroundColor: '#fff',
  legend: {
    orient: 'vertical',
    right: '20',
    y: 'center',
    x: '80%',
    icon: 'circle',
    textStyle: {
      color: '#196FD9'
    },
    data: ['政治', '文化', '社会', '其它'],
    formatter: function (name) {
      var oa = classfication.series[0].data;
      var num = oa[0].value + oa[1].value + oa[2].value;
      for (var i = 0; i < classfication.series[0].data.length; i++) {
        if (name == oa[i].name) {
          return name + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
        }
      }
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: "{b} : {c} ({d}%)"
  },
  series: [{
    type: 'pie',
    center: ['50%', '50%'],
    radius: ['50%', '70%'],
    startAngle: 100,
    color: ['#FF4F64', '#2271DD', '#FF9D1B', '#00FFCC'],
    label: {
      normal: {
        show: false
      }
    },
    labelLine: {
      normal: {
        show: false
      },

    },
    data: []
  }, {
    name: '文章分类',
    type: 'pie',
    clockWise: true,
    hoverAnimation: false,
    radius: [0, '43%'],
    label: {
      normal: {
        position: 'center'
      }
    },
    data: [{
      value: 0,
      name: '所有',
      itemStyle: {
        normal: {
          color: '#43AFF1'
        }
      },
      label: {
        normal: {
          formatter: '文章分类',
          textStyle: {
            color: '#000',
            fontSize: 25,
            fontWeight: 'bold'
          }
        }
      }
    }]
  }]
}

/**
 * 文章词云 图表配置
 */
export var articleCloud = {
  tooltip: {
    show: true
  },
  series: [{
    name: '文章词云',
    type: 'wordCloud',
    autoSize: {
      enable: true,
      minSize: 14
    },
    textStyle: {
      normal: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        // Color can be a callback function or a color string
        color: function () {
          // Random color
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')';
        }
      },
      emphasis: {
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    data: [{
      "name": '该类型词云不存在',
      "value": 0
    }]
  }]
}

/**
 * 作者性别分布 图表配置
 */
export var authorGender = {
  backgroundColor: '#fff',
  legend: {
    orient: 'vertical',
    right: '20',
    y: 'center',
    x: '80%',
    icon: 'circle',
    textStyle: {
      color: '#196FD9'
    },
    data: ['男', '女', '未填写'],
    formatter: function (name) {
      var oa = authorGender.series[0].data;
      var num = oa[0].value + oa[1].value + oa[2].value;
      for (var i = 0; i < authorGender.series[0].data.length; i++) {
        if (name == oa[i].name) {
          return name + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
        }
      }
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: "{b} : {c} ({d}%)"
  },
  series: [{
    type: 'pie',
    center: ['50%', '50%'],
    radius: ['50%', '70%'],
    startAngle: 100,
    color: ['#FF4F64', '#2271DD', '#FF9D1B'],
    label: {
      normal: {
        show: false
      }
    },
    labelLine: {
      normal: {
        show: false
      },

    },
    data: []
  }, {
    name: '作者性别分布',
    type: 'pie',
    clockWise: true,
    hoverAnimation: false,
    radius: [0, '43%'],
    label: {
      normal: {
        position: 'center'
      }
    },
    data: [{
      value: 0,
      name: '所有',
      itemStyle: {
        normal: {
          color: '#43AFF1'
        }
      },
      label: {
        normal: {
          formatter: '作者性别分布',
          textStyle: {
            color: '#000',
            fontSize: 25,
            fontWeight: 'bold'
          }
        }
      }
    }]
  }]
}

/**
 * 点赞评论 图表配置
 */
export var commentsCount = {
  tooltip: {
    trigger: 'axis',
    formatter: '点赞数区间文章数量: {c0}</br>评论数区间文章数量: {c1}',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: []
  },
  series: [{
      name: '评论文章数量',
      type: 'bar',
      data: []
    },
    {
      name: '点赞文章数量',
      type: 'bar',
      data: []
    }
  ]
}

/**
 * 评论者位置分布 图表配置
 */
export var locations = {
  legend: {
    orient: 'vertical',
    right: '20',
    y: 'center',
    x: '80%',
    icon: 'circle',
    selected: {
      "政治类文章评论者分布": true,
      "文化类文章评论者分布": false,
      "社会类文章评论者分布": false,
    }
  },
  tooltip: {
    trigger: 'item'
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#6699CC',
        borderColor: '#111'
      },
      emphasis: {
        areaColor: '#669999'
      }
    }
  },
  series: [{
      name: '政治类文章评论者分布',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: function (val) {
        if (val[2] / 2 < 10) {
          return 10;
        }
        return val[2] / 2;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false,
          textStyle: {
            color: '#000'
          }
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#FFFF00'
        }
      },
      tooltip: {
        formatter: function (value) {
          return value.data.name + "</br>评论人数: " + value.data.value[2]
        }
      }
    },
    {
      name: '政治类文章评论者分布',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: function (val) {
        return val[2] / 2;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true,
          textStyle: {
            color: '#000'
          }
        }
      },
      itemStyle: {
        normal: {
          color: '#FFFF00',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      tooltip: {
        formatter: function (value) {
          return value.data.name + "</br>评论人数: " + value.data.value[2]
        }
      }
    },
    {
      name: '文化类文章评论者分布',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: function (val) {
        if (val[2] / 2 < 10) {
          return 10;
        }
        return val[2] / 2;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false,
          textStyle: {
            color: '#000'
          }
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#FF6600'
        }
      },
      tooltip: {
        formatter: function (value) {
          return value.data.name + "</br>评论人数: " + value.data.value[2]
        }
      }
    }, {
      name: '文化类文章评论者分布',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: function (val) {
        return val[2] / 2;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true,
          textStyle: {
            color: '#000'
          }
        }
      },
      itemStyle: {
        normal: {
          color: '#FF6600',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      tooltip: {
        formatter: function (value) {
          return value.data.name + "</br>评论人数: " + value.data.value[2]
        }
      },
      zlevel: 1
    }, {
      name: '社会类文章评论者分布',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: function (val) {
        if (val[2] / 2 < 10) {
          return 10;
        }
        return val[2] / 2;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false,
          textStyle: {
            color: '#000'
          }
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#00FF33'
        }
      },
      tooltip: {
        formatter: function (value) {
          return value.data.name + "</br>评论人数: " + value.data.value[2]
        }
      }
    }, {
      name: '社会类文章评论者分布',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: function (val) {
        return val[2] / 2;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true,
          textStyle: {
            color: '#000'
          }
        }
      },
      itemStyle: {
        normal: {
          color: '#00FF33',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      tooltip: {
        formatter: function (value) {
          return value.data.name + "</br>评论人数: " + value.data.value[2]
        }
      },
      zlevel: 1
    }
  ]
}

/**
 * 性别分布 图表配置
 */
var genderOptions = {
  type: 'pie',
  radius: [0, 100],
  label: {
      normal: {
          textStyle: {
              color: '#000',
              fontSize: 14,
          }
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
}
export var gender = {
  title: [{
    text: '政治类文章 评论者性别分布',
    x: '25%',
    y: '5%',
    textAlign: 'center'
  }, {
    text: '文化类文章 评论者性别分布',
    x: '75%',
    y: '5%',
    textAlign: 'center'
  }, {
    text: '社会类文章 评论者性别分布',
    x: '50%',
    y: '55%',
    textAlign: 'center'
  }],
  calculable: true,
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  color: [
      '#00acee',
      '#52cdd5',
      '#79d9f1',
      '#a7e7ff',
      '#c8efff'
  ],
  series: [{
    name: '性别分布',
    center: ['25%', '30%'],
    data: [],
    ...genderOptions
  }, {
    name: '性别分布',
    center: ['75%', '30%'],
    data: [],
    ...genderOptions
  }, {
    name: '性别分布',
    center: ['50%', '80%'],
    data: [],
    ...genderOptions
  }
]
}

/**
 * 行业分布 图表配置
 */
export var industry = {
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow",
      textStyle: {
        color: "#fff"
      }

    },
  },
  "grid": {
    "borderWidth": 0,
    "top": 110,
    "bottom": 95,
    textStyle: {
      color: "#fff"
    }
  },
  "legend": {
    x: '10%',
    top: '5%'
  },


  "calculable": true,
  "xAxis": [{
    "type": "category",
    "axisLine": {
      lineStyle: {
        color: '#90979c'
      }
    },
    "splitLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitArea": {
      "show": false
    },
    "axisLabel": {
      "interval": 0,
      'rotate': 90

    },
    "data": [],
  }],
  "yAxis": [{
    "type": "value",
    "splitLine": {
      "show": false
    },
    "axisLine": {
      lineStyle: {
        color: '#90979c'
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "interval": 0,

    },
    "splitArea": {
      "show": false
    },

  }],
  "dataZoom": [{
    "show": true,
    "height": 30,
    "xAxisIndex": [
      0
    ],
    bottom: 10,
    "start": 0,
    "end": 30,
    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    handleSize: '110%',
    handleStyle: {
      color: "#d3dee5",

    },
    textStyle: {
      color: "#fff"
    },
    borderColor: "#90979c"
  }, {
    "type": "inside",
    "show": true,
    "height": 15,
    "start": 1,
    "end": 35
  }],
  "series": [{
    "name": "政治类文章",
    "type": "bar",
    "stack": "总量",
    "barMaxWidth": 35,
    "barGap": "10%",
    "itemStyle": {
      "normal": {
        "color": "#669999",
      }
    },
    "data": [],
  }, {
    "name": "文化类文章",
    "type": "bar",
    "stack": "总量",
    "barMaxWidth": 35,
    "barGap": "10%",
    "itemStyle": {
      "normal": {
        "color": "#6699FF",
      }
    },
    "data": [],
  }, {
    "name": "社会类文章",
    "type": "bar",
    "stack": "总量",
    "barMaxWidth": 35,
    "barGap": "10%",
    "itemStyle": {
      "normal": {
        "color": "#9999CC",
      }
    },
    "data": []
  }]
}

/**
 * 行业分布 图表配置
 */
export var major = {
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow",
      textStyle: {
        color: "#fff"
      }

    },
  },
  "grid": {
    "borderWidth": 0,
    "top": 110,
    "bottom": 95,
    textStyle: {
      color: "#fff"
    }
  },
  "legend": {
    x: '10%',
    top: '5%'
  },


  "calculable": true,
  "xAxis": [{
    "type": "category",
    "axisLine": {
      lineStyle: {
        color: '#90979c'
      }
    },
    "splitLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitArea": {
      "show": false
    },
    "axisLabel": {
      "interval": 0,
      'rotate': 90

    },
    "data": [],
  }],
  "yAxis": [{
    "type": "value",
    "splitLine": {
      "show": false
    },
    "axisLine": {
      lineStyle: {
        color: '#90979c'
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "interval": 0,

    },
    "splitArea": {
      "show": false
    },

  }],
  "dataZoom": [{
    "show": true,
    "height": 30,
    "xAxisIndex": [
      0
    ],
    bottom: 10,
    "start": 0,
    "end": 50,
    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    handleSize: '110%',
    handleStyle: {
      color: "#d3dee5",

    },
    textStyle: {
      color: "#fff"
    },
    borderColor: "#90979c"
  }, {
    "type": "inside",
    "show": true,
    "height": 15,
    "start": 1,
    "end": 35
  }],
  "series": [{
    "name": "政治类文章",
    "type": "bar",
    "stack": "总量",
    "barMaxWidth": 35,
    "barGap": "10%",
    "itemStyle": {
      "normal": {
        "color": "#669999",
      }
    },
    "data": [],
  }, {
    "name": "文化类文章",
    "type": "bar",
    "stack": "总量",
    "barMaxWidth": 35,
    "barGap": "10%",
    "itemStyle": {
      "normal": {
        "color": "#6699FF",
      }
    },
    "data": [],
  }, {
    "name": "社会类文章",
    "type": "bar",
    "stack": "总量",
    "barMaxWidth": 35,
    "barGap": "10%",
    "itemStyle": {
      "normal": {
        "color": "#9999CC",
      }
    },
    "data": []
  }]
}

/**
 * 情感分析 图表配置
 */
export var sentiment = {
  series: [{
      type: 'liquidFill',
      name: '政治类文章',
      center: ['20%', '50%'],
      color: ['#669999'],
      data: [{
          name: '积极 评论占比',
          value: 0.6
      }],
      label: {
          formatter: function(param) {
            return param.seriesName + '\n\n'
                    + param.name + '\n'
                    + param.value * 100 + '%';
          },
          fontSize: 28,
      }
  }, {
    type: 'liquidFill',
    name: '文化类文章',
    center: ['50%', '50%'],
    color: ['#6699FF'],
    data: [{
        name: '积极 评论占比',
        value: 0.6
    }],
    label: {
        formatter: function(param) {
          return param.seriesName + '\n\n'
                  + param.name + '\n'
                  + param.value * 100 + '%';
        },
        fontSize: 28,
    }
  }, {
    type: 'liquidFill',
    name: '社会类文章',
    center: ['80%', '50%'],
    color: ['#9999CC'],
    data: [{
        name: '积极 评论占比',
        value: 0.6
    }],
    label: {
        formatter: function(param) {
          return param.seriesName + '\n\n'
                  + param.name + '\n'
                  + param.value * 100 + '%';
        },
        fontSize: 28,
    }
  }, 0.5, 0.4],
  tooltip: {
    show: true
  }
};
