import echarts from 'echarts'
/**
 * 性别分布 图表配置
 */
var genderOptions = {
  type: 'pie',
  radius: [30, 100],
  roseType: 'area',
}
export var gender = {
  title: [{
    text: '政治类文章 评论者性别分布',
    x: '25%',
    textAlign: 'center'
  }, {
    text: '文化类文章 评论者性别分布',
    x: '75%',
    textAlign: 'center'
  }, {
    text: '社会类文章 评论者性别分布',
    x: '25%',
    y: '55%',
    textAlign: 'center'
  }, {
    text: '文章作者性别分布',
    x: '75%',
    y: '55%',
    textAlign: 'center'
  }],
  calculable: true,
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [{
    name: '性别分布',
    center: ['25%', '27%'],
    data: [{
        value: 335,
        name: '男'
      },
      {
        value: 310,
        name: '女'
      },
      {
        value: 274,
        name: '其他(未填写)'
      }
    ].sort(function (a, b) {
      return a.value - b.value;
    }),
    ...genderOptions
  }, {
    name: '性别分布',
    center: ['75%', '27%'],
    data: [{
        value: 335,
        name: '男'
      },
      {
        value: 310,
        name: '女'
      },
      {
        value: 274,
        name: '其他(未填写)'
      }
    ].sort(function (a, b) {
      return a.value - b.value;
    }),
    ...genderOptions
  }, {
    name: '性别分布',
    center: ['25%', '80%'],
    data: [{
        value: 335,
        name: '男'
      },
      {
        value: 310,
        name: '女'
      },
      {
        value: 274,
        name: '其他(未填写)'
      }
    ].sort(function (a, b) {
      return a.value - b.value;
    }),
    ...genderOptions
  }, {
    name: '作者性别分布',
    center: ['75%', '80%'],
    data: [{
        value: 335,
        name: '男'
      },
      {
        value: 310,
        name: '女'
      },
      {
        value: 274,
        name: '其他(未填写)'
      }
    ].sort(function (a, b) {
      return a.value - b.value;
    }),
    ...genderOptions
  }]
}

/**
 * 行业分布 图表配置
 */
var xData = function() {
  var data = [];
  for (var i = 1; i < 300; i++) {
      data.push("行业" + i);
  }
  return data;
}();

export var industry = {
  "title": {
    "text": "·评论者行业分布",
    x: "4%",

    textStyle: {
      color: '#fff',
      fontSize: '22'
    },
    subtextStyle: {
      color: '#90979c',
      fontSize: '16',

    },
  },
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
    x: '4%',
    top: '11%',
    textStyle: {
      color: '#90979c',
    },
    "data": ['评论者行业分布']
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
    "data": xData,
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
    "end": 10,
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
      "name": "评论者行业分布",
      "type": "bar",
      "stack": "总量",
      "barMaxWidth": 35,
      "barGap": "10%",
      "itemStyle": {
        "normal": {
          "color": "rgba(255,144,128,1)",
        }
      },
      "data": [
        8,
        7,
        8,
        7.51,
        7.1,
        6.91,
        7.53,
        7.47,
        7.48,
        7.03,
        6.23,
        6.54,
        7.54,
        6.5,
        7.18,
        6.12,
        7.87,
        6.73,
        6.55,
        6.23,
        6.31,
        6.74,
        5.95,
        6.13,
        6.04,
        5.56,
        5.91,
        4.29,
        4.72,
        5.38,
        4.92,
        4.61,
        3.62,
        5.35,
        5.28,
        4.63,
        4.72,

      ],
    }
  ]
}

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
    data: ['政治', '文化', '社会'],
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
  series: [{
    type: 'pie',
    center: ['50%', '50%'],
    radius: ['50%', '70%'],
    roseType: 'radius',
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
    data: [{
      value: 700,
      name: '政治',

    }, {
      value: 500,
      name: '文化',
    }, {
      value: 1000,
      name: '社会',

    }]
  }, {
    type: 'pie',
    center: ['50%', '50%'],
    radius: ['45%', '46%'],
    label: {
      show: false,
    },
    data: [{
      value: 0,
      itemStyle: {
        normal: {
          color: '#1C365E'
        }
      }
    }]
  }, {
    name: '',
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
 * 情感分析 图表配置
 */
var placeHolderStyle = {
  normal: {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    color: "rgba(0,0,0,0)",
    borderWidth: 0
  },
  emphasis: {
    color: "rgba(0,0,0,0)",
    borderWidth: 0
  }
}

var dataStyle = {
  normal: {
    formatter: function (c) {
      return (c.data.value * 4 / 3).toFixed(1) + "%";
    },
    position: 'center',
    show: true,
    textStyle: {
      fontSize: '28',
      fontWeight: 'normal',
    }
  }
}

export var sentiment = {
  title: [{
    text: '情感分析',
    x: 'center',
    y: '40',
    textStyle: {
      fontSize: 20
    }
  }, {
    text: '正面评论',
    left: '29.8%',
    top: '60%',
    textAlign: 'center',
    textStyle: {
      fontWeight: 'normal',
      fontSize: '20',
      textAlign: 'center',
    },
  }, {
    text: '负面评论',
    left: '70%',
    top: '60%',
    textAlign: 'center',
    textStyle: {
      fontWeight: 'normal',
      fontSize: '20',
      textAlign: 'center',
    },
  }],
  series: [{
      type: 'pie',
      radius: ['32%', '51%'],
      center: ['30%', '50%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: 56.3 * 3 / 4,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#99da69'
              }, {
                offset: 1,
                color: '#01babc'
              }]),
            }
          },
          label: dataStyle,
        }, {
          value: 43.7,
          itemStyle: placeHolderStyle,
        },

      ]
    },
    {
      type: 'pie',
      radius: ['31%', '51%'],
      center: ['70%', '50%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: 43.7 * 3 / 4,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#9f3edd'
              }, {
                offset: 1,
                color: '#4897f6'
              }]),
            }
          },
          label: dataStyle,
        }, {
          value: 56.3,
          itemStyle: placeHolderStyle,
        },

      ]
    },

    //外圈的边框
    {
      // name: '总人数',
      type: 'pie',
      hoverAnimation: false, //鼠标经过的特效
      radius: ['51%', '53%'],
      center: ['30%', '50%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: 75,
          itemStyle: {
            normal: {
              color: '#00FF99',
            }
          },
        }, {
          value: 25,
          itemStyle: placeHolderStyle,
        },

      ]
    },
    {
      type: 'pie',
      hoverAnimation: false,
      radius: ['51%', '53%'],
      center: ['70%', '50%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: 75,
          itemStyle: {
            normal: {
              color: '#6600CC',
            }
          },
        }, {
          value: 25,
          itemStyle: placeHolderStyle,
        },

      ]
    },
  ]
};
