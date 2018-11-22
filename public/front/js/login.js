$(function(){
  $('#loginBtn').click(function(){
    var username = $('#username').val().trim();
    var password = $('#password').val().trim();

    if(username===""){
      mui.toast('请输入用户名');
      return;
    }

    if(password===""){
      mui.toast('请输入密码');
      return;
    }

    $.ajax({
      type:'post',
      url: '/user/login',
      data: {
        username: username,
        password: password
      },
      dataType: 'json',
      success: function(info){
        if(info.success){
           // 登录成功, 跳转到用户中心
          // (1) 地址栏传递了 retUrl, 获取, 并且跳回去
          // (2) 地址栏没有 retUrl, 正常跳转到 user.html
          if(location.search.indexOf('retUrl')!=-1){
            var retUrl = location.search.replace("?retUrl=", "");
            // 跳转到指定地址
            location.href = retUrl;
          }else{
            location.href = "user.html";

          }
        }
        if(info.error){
          mui.toast('用户名或者密码错误');
        }
      }
    });
  });

})