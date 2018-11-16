// 需求: 如果当前用户是未登录的, 拦截到登录页
// 前后分离, 前端不知道当前用户是否登录, 但是后台知道,
// 需要发送ajax请求询问后台, 当前用户的登录状态
$.ajax({
  type: 'get',
  url: '/employee/checkRootLogin',
  dataType: 'json',
  success: function(info){
    if(info.success){

    }
    if(info.error){
      location.href = "login.html"
    }
  }
})