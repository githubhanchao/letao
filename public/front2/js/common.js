//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
});

mui('.mui-scroll-wrapper').scroll({
  //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  deceleration: 0.0005,
  indicators: false   //是否显示滚动条
});


// 此方法专门用于解析获取地址栏参数
function getSearch(k){
  // 获取地址栏参数信息
  var str = location.search;
  // 对中文解码
  str = decodeURI(str);

  // 去掉问号
  str = str.slice(1);

  // str.split( 字符 ); 可以将字符串切割成数组
  var arr = str.split('&');

  var obj = {};

  arr.forEach(function(v,i){
    var key = v.split('=')[0];
    var value = v.split('=')[1];
    obj[key] = value;

  })

  return obj[k];

}