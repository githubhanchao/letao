
// 进度条=

$(document).ajaxStart(function(){

  // 开启进度条
  NProgress.start();
});
$(document).ajaxStop(function(){

  setTimeout(function(){
     // 关闭进度条
    NProgress.done();
  },500)
 
});



// jquery 入口函数, 等待 dom 结构加载完成之后, 就执行
$(function(){
  // 公共的功能
  // 功能1: 导航点击切换功能
  $('.lt_aside .category').click(function(){
    $(this).next().stop().slideToggle();
  });

  // 功能2: 左侧菜单列表切换功能
  $('.lt_main .icon_left').click(function(){
   $('.lt_aside').toggleClass('hidemenu')
   $('.lt_main').toggleClass('hidemenu')
   $('.lt_topbar').toggleClass('hidemenu')
  })


  // 功能3: 退出功能
  $('.lt_main .icon_right').click(function() {
    
    // 点击按钮, 显示模态框
    // $('#modal').modal("show") // 显示
    // $('#modal').modal("hide") // 隐藏
    $('#logoutModal').modal("show");
  });

  $('#logoutBtn').click(function(){
    $.ajax({
      type: 'get',
      url: '/employee/employeeLogout',
      dataType: 'json',
      success: function(info){
        if(info.success){
          location.href = "login.html";
        }
      }
    })
  });



})






