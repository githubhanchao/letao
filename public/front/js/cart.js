$(function () {
  // 一进入页面, 发送ajax请求, 获取购物车列表数据, 并渲染
  // (1) 当前用户未登录,  后台返回 error,  跳转到登录页
  // (2) 当前用户已登录,  后台返回 购物车数据, 进行渲染
  render();

  function render(){
    $.ajax({
      type: 'get',
      url: '/cart/queryCart',
      dataType: 'json',
      success: function(info){
        if(info.error===400){

          location.href="login.html?retUrl="+location.href;
          return;
        }
        var htmlStr = template("cartTpl",{list:info});
        $('.lt_main .mui-scroll').html(htmlStr);
      }
    })
  }


  // 删除功能
  // (1) 通过事件委托给删除按钮, 添加点击事件
  // (2) 获取需要删除的当前 id, 发送请求
  // (3) 删除成功, 页面重新渲染
  $('.lt_main').on('click','.btn_delete',function(){
    // 获取需要删除的 id
    var id= $(this).data('id');

    // 发送删除请求
    $.ajax({
      type: 'get',
      url: '/cart/deleteCart',
      data: {
        id: [id]
      },
      dataType: 'json',
      success: function(info){
        if(info.success){
          render();
        }
      }


    })





  })





})