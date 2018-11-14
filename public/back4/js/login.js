

$(function(){

  // 表单校验
  $('#form').bootstrapValidator({

    //2. 指定校验时的图标显示，默认是bootstrap风格
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    //3. 指定校验字段
    fields: {
      //校验用户名，对应name表单的name属性
      username: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          //长度校验
          stringLength: {
            min: 2,
            max: 10,
            message: '用户名长度必须在6到10之间'
          },
          //正则校验
          regexp: {
            regexp: /^[a-zA-Z0-9_\.]+$/,
            message: '用户名由数字字母下划线和.组成'
          },
          callback: {
            message:  "用户名不存在"
          }
        }
      },

      password: {
        validators: {
          //不能为空
          notEmpty: {
            message: '密码不能为空'
          },
          //长度校验
          stringLength: {
            min: 6,
            max: 10,
            message: '密码长度必须在6到10之间'
          },
          //正则校验
          regexp: {
            regexp: /^[a-zA-Z0-9_\.]+$/,
            message: '密码由数字字母下划线和.组成'
          },
          callback: {
            message:  "密码错误"
          }
        }
      }



    }




  });


  /*
  * 2. 表单校验需要在表单提交时, 进行校验, 需要submit按钮
  *    可以注册一个表单校验成功事件, 表单校验成功之后, 默认会提交
  *    可以在成功事件中, 阻止默认的表单提交, 通过 ajax 提交, 就不会跳转了
  *
  * 思路: 1. 注册表单校验成功事件
  *      2. 在事件中, 阻止默认的表单提交, 通过 ajax 提交即可
  * */
 $("#form").on('success.form.bv', function (e) {
  e.preventDefault();
  //使用ajax提交逻辑
  $.ajax({
    type: 'post',
    url: '/employee/employeeLogin',
    data: $('#form').serialize(),
    dataType: 'json',
    success: function(info){
      console.log(info);
      
      if(info.success ){
        location.href = "index.html";
      }

      if(info.error === 1000){
        $('#form').data('bootstrapValidator').updateStatus('username', 'INVALID', 'callback');
      }
      if(info.error === 1001){
        $('#form').data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback');
      }

    }
  });

});


 // 重置
 $('[type="reset"]').click(function(){
  $('#form').data("bootstrapValidator").resetForm();
})








});