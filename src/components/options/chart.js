/**
 * 地区生产总值 柱状图配置
 */
export var total = {
  title: {
    text: '地区生产总值',
    subtext: '来源: 国家数据'
  },
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: ['2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年'],
    axisTick: {
      alignWithLabel: true
    }
  }],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: '直接访问',
    type: 'bar',
    barWidth: '60%',
    data: [341.43, 394.85, 441.36, 507.46, 605.83, 701.03, 815.67, 920.83, 1026.39, 1151.41]
  }]
}

/**
 * 工资 柱状+折线图配置
 */
export var salary = {
  title: {
    text: '城镇单位就业人员工资',
    subtext: '来源:\n国家数据'
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
    data: ['平均工资', '工资总额']
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
  },
  xAxis: [{
      type: 'category',
      boundaryGap: true,
      data: ['2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年']
    },
    {
      type: 'category',
      boundaryGap: true,
      data: ['2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年']
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
      data: [82.83, 88.72, 95.03, 108.90, 114.56, 128.50, 177.74, 198.39, 323.04, 320.89]
    },
    {
      name: '平均工资',
      type: 'line',
      data: [42820.00, 44055.00, 45347.00, 49898.00, 49464.00, 51705.00, 57773.00, 61235.00, 97849.00, 103232.00]
    }
  ]
}

/**
 * 投资 堆叠柱状图配置
 */
export var invest = {
  title: {
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
    data: ['全社会固定资产投资(亿元)', '房地产投资额(亿元)']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年']
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
      data: [270.34, 309.91, 378.28, 462.67, 516.31, 670.50, 876.00, 1069.23, 1295.68, 1596.05]
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
      data: [11.68, 13.74, 15.75, 8.96, 5.13, 6.87, 9.68, 52.91, 50.02, 48.54]
    }
  ]
}

/**
 * 财政收支 双柱状图配置
 */
export var income = {
  title: {
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
    data: ['一般预算收入(亿元)', '一般预算支出(亿元)']
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
    data: ['2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年']
  },
  series: [{
      name: '一般预算收入(亿元)',
      type: 'bar',
      data: [20.14, 24.88, 30.09, 36.65, 54.76, 86.58, 95.02, 124.27, 137.13, 155.99]
    },
    {
      name: '一般预算支出(亿元)',
      type: 'bar',
      data: [275.37, 380.66, 470.13, 551.04, 758.11, 905.34, 1014.31, 1185.51, 1381.46, 1587.98]
    }
  ]
}
