// 表单校验

$(function(){

  $('#form').bootstrapValidator({
    fields: {

      //2. 指定校验时的图标显示，默认是bootstrap风格
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },

      username: {
        validators: {
          // 非空
          notEmpty: {
            message: '用户名不能为空'
          },
          //长度校验
          stringLength: {
            min: 2,
            max: 6,
            message: '用户名长度必须在2到6之间'
          },
          //正则校验
          regexp: {
            regexp: /^[a-zA-Z0-9_\.]+$/,
            message: '用户名由数字字母下划线和.组成'
          },
          callback:{
            message: "用户名不存在"
          }
        },
      },

      password: {

        validators: {
          // 非空
          notEmpty: {
            message: '密码不能为空'
          },
          //长度校验
          stringLength: {
            min: 6,
            max: 12,
            message: '密码长度必须在6到12之间'
          },
          //正则校验
          regexp: {
            regexp: /^[a-zA-Z0-9_\.]+$/,
            message: '密码由数字字母下划线和.组成'
          },
          callback: {
            message: "密码错误"
          }
        },
      }
    }
  });


  $("#form").on('success.form.bv', function (e) {
    e.preventDefault();   //阻止默认的表单提交
      //使用ajax提交逻辑

      $.ajax({
        type: "post",
        url: "/employee/employeeLogin",
        // 表单序列化
        data: $("#form").serialize(),
        dataType: "json",
        success: function(info) {
          console.log(info);

          if(info.success){
            location.href = "index.html"
          }
          if(info.error === 1000){
            $('#form').data("bootstrapValidator").updateStatus('username','INVALID','callback');
          }
          if(info.error === 1001){
            $('#form').data("bootstrapValidator").updateStatus('password','INVALID','callback');
          }

        }
      })




  });


  // 重置功能
  $('[type="reset"]').click(function(){
    $('#form').data('bootstrapValidator').resetForm(true);
  })


});





