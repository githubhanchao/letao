$(function () {
  render();

  function getHistory() {
    var jsonStr = localStorage.getItem('search_list') || '[]';
    var arr = JSON.parse(jsonStr);
    return arr;
  }


  function render() {
    var arr = getHistory();
    var htmlStr = template('search_tpl', { list: arr });

    $('.lt_history').html(htmlStr);
  };

  /*
* 功能2: 清空所有历史
* (1) 给清空记录添加点击事件 (事件委托)
* (2) 清空所有的历史记录数据 localStorage.removeItem("search_list")
* (3) 页面重新渲染
* */
  $('.lt_history').on('click', '.btn_empty', function () {
    mui.confirm("你确定要清空历史记录嘛?", "文星提示", ["取消", "确认"], function (e) {
      if (e.index === 1) {
        localStorage.removeItem('search_list');

        render();
      }
    })
  });

  /*
 * 功能3: 删除单个历史记录
 * (1) 通过事件委托给所有删除按钮, 添加点击事件
 * (2) 获取需要删除的项的下标
 * (3) 根据下标从数组中删除该项
 * (4) 将修改后的数组, 转成 jsonStr, 存储到本地
 * (5) 重新渲染
 * */
  $('.lt_history').on('click','.btn_delete', function(){
    var index = $(this).data("index");

    var arr = getHistory();

    arr.splice(index,1);

    localStorage.setItem('search_list',JSON.stringify(arr));

    render();

  });
 /*
  * 功能4: 添加单个历史记录功能
  * (1) 给搜索按钮添加点击事件
  * (2) 获取搜索框的内容
  * (3) 添加到数组的最前面  unshift
  * (4) 转成 jsonStr, 存储到本地存储中
  * (5) 重新渲染
  * */
 $('.search_btn').click(function() {
  var key = $('.search_input').val().trim();

  if(key===""){
    mui.toast('请输入搜索关键字');
    return;

  }

  var arr = getHistory();

  var index = arr.indexOf(key);

  if(index!=-1){
    arr.splice(index,1);
  }

  if(arr.length>=10){
    arr.pop();
  }

  arr.unshift(key);

  localStorage.setItem('search_list',JSON.stringify(arr));

  render();

  $('.search_input').val("");

  localStorage.href ="searchList.html="+key;

 });











})