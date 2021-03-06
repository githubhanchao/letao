$(function () {

  var echarts_left = echarts.init(document.querySelector('.echarts_left'));

  var option1 = {
    title: {
      text: "2018年注册人数"
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['人数', "销量"],
    },
    xAxis: {

      data: ["1月", "2月", "3月", "4月", "5月", "6月"]
    },
    yAxis: {},
    series: [{
      name: '人数',
      data: [500, 1000, 390, 580, 600, 900],
      type: 'bar'
    }, {
      name: '销量',
      data: [500, 1300, 490, 380, 900, 600],
      type: 'bar'
    }]
  };

  echarts_left.setOption(option1);


  var echarts_right = echarts.init(document.querySelector('.echarts_right'));

  var option2 = {
    title: {
      text: '热门品牌销售',
      subtext: '2018年11月',
      x: 'center',
      // 配置文本样式
      textStyle: {
        color: '#e92322',
        fontSize: 25
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['耐克','阿迪','阿迪王','回力','解放', "老北京"]
    },
    series: [
      {
        name: '品牌销量',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {value:335, name:'耐克'},   // 数据项
          {value:310, name:'阿迪'},
          {value:234, name:'阿迪王'},
          {value:135, name:'回力'},
          {value:800, name:'解放'},
          {value:600, name:'老北京'},
        ],
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


  echarts_right.setOption(option2);






})