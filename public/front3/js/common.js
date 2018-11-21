mui('.mui-scroll-wrapper').scroll({
  deceleration: 0.0005,
  indicators: false

});

//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
});


// 此方法专门用于解析获取地址栏参数
function getSearch(k){
  var str = location.search;

  str = decodeURI(str);

  str = str.slice(1);

  var arr = str.split('&');

  var obj = {};

  arr.forEach(function(v,i){
    var key = v.split('=')[0];
    var value = v.split('=')[1];
    obj[key]=value;

  });

  return obj[k];

}








