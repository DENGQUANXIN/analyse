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
  tooltip: {
    trigger: 'item',
    formatter: "{b} : {c} ({d}%)"
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
      value: 2200,
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
      value: 362,
      name: '男',
    }, {
      value: 97,
      name: '女',
    }, {
      value: 41,
      name: '未填写',
    }]
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
      value: 2200,
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
    data: [
      '评论数<10\n\n\n\n\n点赞数<100',
      '评论数10-50\n\n\n\n\n点赞数100-500',
      '评论数50-100\n\n\n\n\n点赞数500-1000',
      '评论数>100\n\n\n\n\n点赞数>1000'
    ]
  },
  series: [{
      name: '评论文章数量',
      type: 'bar',
      data: [240, 189, 134, 170]
    },
    {
      name: '点赞文章数量',
      type: 'bar',
      data: [93, 34, 10, 15]
    }
  ]
}

/**
 * 评论者位置分布 图表配置
 */
var data = [
  {
    "name": "北京",
    "value": 50
  }, {
    "name": "上海",
    "value": 27
  }, {
    "name": "成都",
    "value": 24
  }, {
    "name": "广州",
    "value": 20
  }, {
    "name": "深圳",
    "value": 20
  }, {
    "name": "杭州",
    "value": 19
  }, {
    "name": "乌鲁木齐",
    "value": 19
  }, {
    "name": "南京",
    "value": 16
  }, {
    "name": "武汉",
    "value": 13
  }, {
    "name": "西安",
    "value": 10
  }, {
    "name": "重庆",
    "value": 10
  }, {
    "name": "苏州",
    "value": 8
  }, {
    "name": "青岛",
    "value": 8
  }, {
    "name": "郑州",
    "value": 8
  }, {
    "name": "长沙",
    "value": 5
  }, {
    "name": "天津",
    "value": 4
  }, {
    "name": "南昌",
    "value": 4
  }, {
    "name": "海南",
    "value": 4
  }, {
    "name": "香港",
    "value": 4
  }, {
    "name": "烟台",
    "value": 4
  }, {
    "name": "合肥",
    "value": 4
  }, {
    "name": "厦门",
    "value": 3
  }, {
    "name": "石家庄",
    "value": 3
  }, {
    "name": "海口",
    "value": 3
  }, {
    "name": "保定",
    "value": 2
  }, {
    "name": "日照",
    "value": 2
  }, {
    "name": "贵阳",
    "value": 2
  }, {
    "name": "太原",
    "value": 2
  }, {
    "name": "克拉玛依",
    "value": 2
  }, {
    "name": "济南",
    "value": 2
  }, {
    "name": "沈阳",
    "value": 2
  }, {
    "name": "珠海",
    "value": 2
  }, {
    "name": "秦皇岛",
    "value": 2
  }, {
    "name": "阳泉",
    "value": 1
  }, {
    "name": "茂名",
    "value": 1
  }, {
    "name": "牡丹江",
    "value": 1
  }, {
    "name": "宿迁",
    "value": 1
  }, {
    "name": "咸阳",
    "value": 1
  }, {
    "name": "呼和浩特",
    "value": 1
  }, {
    "name": "绵阳",
    "value": 1
  }, {
    "name": "淮安",
    "value": 1
  }, {
    "name": "徐州",
    "value": 1
  }, {
    "name": "抚州",
    "value": 1
  }, {
    "name": "资阳",
    "value": 1
  }, {
    "name": "常州",
    "value": 1
  }, {
    "name": "惠州",
    "value": 1
  }, {
    "name": "阿克苏",
    "value": 1
  }, {
    "name": "昆明",
    "value": 1
  }, {
    "name": "北海",
    "value": 1
  }, {
    "name": "大理",
    "value": 1
  }, {
    "name": "泉州",
    "value": 1
  }, {
    "name": "无锡",
    "value": 1
  }, {
    "name": "中山",
    "value": 1
  }, {
    "name": "长春",
    "value": 1
  }, {
    "name": "南宁",
    "value": 1
  }, {
    "name": "黑河",
    "value": 1
  }, {
    "name": "银川",
    "value": 1
  }, {
    "name": "东莞",
    "value": 1
  }, {
    "name": "张掖",
    "value": 1
  }, {
    "name": "宜昌",
    "value": 1
  }, {
    "name": "唐山",
    "value": 1
  }, {
    "name": "宁波",
    "value": 1
  }, {
    "name": "桂林",
    "value": 1
  }, {
    "name": "拉萨",
    "value": 1
  }, {
    "name": "金华",
    "value": 1
  }, {
    "name": "伊犁哈萨克自治州",
    "value": 1
  }, {
    "name": "柳州",
    "value": 1
  }, {
    "name": "临沂",
    "value": 1
  }, {
    "name": "喀什",
    "value": 1
  }, {
    "name": "晋中",
    "value": 1
  }, {
    "name": "衢州",
    "value": 1
  }, {
    "name": "天水",
    "value": 1
  }, {
    "name": "昌吉",
    "value": 1
  }
];

var geoCoordMap = {
  "北京": [116.407526, 39.90403],
  "上海": [121.473701, 31.230416],
  "成都": [104.06, 30.67],
  "广州": [113.23, 23.16],
  "深圳": [114.07, 22.62],
  "杭州": [120.19, 30.26],
  "乌鲁木齐": [87.68, 43.77],
  "南京": [118.78, 32.04],
  "武汉": [114.31, 30.52],
  "西安": [108.95, 34.27],
  "重庆": [106.551556, 29.563009],
  "苏州": [120.62, 31.32],
  "青岛": [120.33, 36.07],
  "郑州": [113.65, 34.76],
  "长沙": [113, 28.21],
  "天津": [117.200983, 39.084158],
  "南昌": [115.89, 28.68],
  "海南": [110.349228, 20.017377],
  "香港": [114.173355, 22.320048],
  "烟台": [121.39, 37.52],
  "合肥": [117.27, 31.86],
  "厦门": [118.1, 24.46],
  "石家庄": [114.48, 38.03],
  "海口": [110.35, 20.02],
  "保定": [115.48, 38.85],
  "日照": [119.46, 35.42],
  "贵阳": [106.71, 26.57],
  "太原": [112.53, 37.87],
  "克拉玛依": [84.77, 45.59],
  "济南": [117, 36.65],
  "沈阳": [123.38, 41.8],
  "珠海": [113.52, 22.3],
  "秦皇岛": [119.57, 39.95],
  "阳泉": [113.57, 37.85],
  "茂名": [110.88, 21.68],
  "牡丹江": [129.58, 44.6],
  "宿迁": [118.3, 33.96],
  "咸阳": [108.72, 34.36],
  "呼和浩特": [111.65, 40.82],
  "绵阳": [104.73, 31.48],
  "淮安": [119.15, 33.5],
  "徐州": [117.2, 34.26],
  "抚州": [116.35, 28],
  "资阳": [104.38, 30.09],
  "常州": [119.95, 31.79],
  "惠州": [114.4, 23.09],
  "阿克苏": [80.19, 41.09],
  "昆明": [102.73, 25.04],
  "北海": [109.12, 21.49],
  "大理": [100.13, 25.34],
  "泉州": [118.58, 24.93],
  "无锡": [120.29, 31.59],
  "中山": [113.38, 22.52],
  "长春": [125.35, 43.88],
  "南宁": [108.33, 22.84],
  "黑河": [127.29, 50.14],
  "银川": [106.27, 38.47],
  "东莞": [113.75, 23.04],
  "张掖": [100.26, 38.56],
  "宜昌": [111.3, 30.7],
  "唐山": [118.02, 39.63],
  "宁波": [121.56, 29.86],
  "桂林": [110.28, 25.29],
  "拉萨": [91.11, 29.97],
  "金华": [119.64, 29.12],
  "伊犁哈萨克自治州": [81.32, 43.92],
  "柳州": [109.4, 24.33],
  "临沂": [118.35, 35.05],
  "喀什": [75.59, 39.3],
  "晋中": [112.75, 37.68],
  "衢州": [118.88, 28.97],
  "天水": [105.42, 34.37],
  "昌吉": [87.18, 44.02]
};
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};
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
      data: convertData(data),
      symbolSize: function (val) {
        if (val[2] / 2 < 10) {
          return 10;
        }
        return val[2];
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
      data: convertData(data.sort(function (a, b) {
        return b.value - a.value;
      }).slice(0, 10)),
      symbolSize: function (val) {
        return val[2];
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
      },
      zlevel: 1
    },
    {
      name: '文化类文章评论者分布',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),
      symbolSize: function (val) {
        if (val[2] / 2 < 10) {
          return 10;
        }
        return val[2];
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
      data: convertData(data.sort(function (a, b) {
        return b.value - a.value;
      }).slice(0, 10)),
      symbolSize: function (val) {
        return val[2];
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
      data: convertData(data),
      symbolSize: function (val) {
        if (val[2] / 2 < 10) {
          return 10;
        }
        return val[2];
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
      data: convertData(data.sort(function (a, b) {
        return b.value - a.value;
      }).slice(0, 10)),
      symbolSize: function (val) {
        return val[2];
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
    ],
    ...genderOptions
  }, {
    name: '性别分布',
    center: ['75%', '30%'],
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
    ],
    ...genderOptions
  }, {
    name: '性别分布',
    center: ['50%', '80%'],
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
    ],
    ...genderOptions
  }
]
}

/**
 * 行业分布 图表配置
 */
var xData = function () {
  var data = [];
  for (var i = 1; i < 300; i++) {
    data.push("行业" + i);
  }
  return data;
}();

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
      4.72
    ]
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
