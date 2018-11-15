$(function () {
  // 基于准备好的dom，初始化echarts实例
  var echarts_left = echarts.init(document.querySelector('.echarts_left'));

  // 指定图表的配置项和数据
  var option1 = {
    // 大标题
    title: {
      text: '2018年注册人数'
    },
    // 提示框组件
    tooltip: {
      // 表示坐标轴触发
      //trigger: "axis"
      trigger: "item"
    },
    // 图例
    legend: {
      data: ['人数', '销量']
    },
    xAxis: {
      data: ["1月", "2月", "3月", "4月", "5月", "6月"]
    },
    yAxis: {},
    series: [{
      name: '人数',
      // bar 表示柱状图,  line 表示折线图,  pie 表示饼图
      type: 'bar',
      data: [500, 1200, 390, 580, 800, 600]
    }, {
      name: '销量',
      type: 'bar',
      data: [700, 1300, 490, 680, 700, 800]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  echarts_left.setOption(option1);



  // 基于准备好的dom，初始化echarts实例
  var echarts_right = echarts.init(document.querySelector('.echarts_right'));

  // 指定图表的配置项和数据
  var option2 = {
    title: {
      text: '热门品牌销售',
      // 副标题
      subtext: '2018年11月',
      // 设置位置
      x: 'center',
       // 配置文本样式
       textStyle: {
         color: "#e92322",
         fontSize: 20
       }
    },
    // 提示框组件
    tooltip: {
      // 数据项图形触发
      trigger: 'item',
      // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 图例
    legend: {
      // vertical 表示垂直, horizontal 水平的
      orient: 'vertical',
      // 控制水平方向位置
      left: 'left',
      data: ['耐克','阿迪','特步','李宁','安踏']
    },
    series: [
      {
        name: '品牌销量',
        type: 'pie',  // 饼图
        // 相对于容器, 直径的大小, 配置圆的大小
        radius: '55%',
        // 圆心位置
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '耐克' },
          { value: 310, name: '阿迪' },
          { value: 234, name: '特步' },
          { value: 135, name: '李宁' },
          { value: 1548, name: '安踏' }
        ],
         // 额外的阴影效果
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  echarts_right.setOption(option2);





})