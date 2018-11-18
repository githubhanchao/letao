$(function () {
  var currentPage = 1;
  var pageSize = 5;
  var currentId;
  var isDelete;

  render();

  function render() {
    $.ajax({
      type: "get",
      url: "/user/queryUser",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: "json",
      success: function (info) {
        // console.log(info);

        var htmlStr = template("tmp", info);

        $('tbody').html(htmlStr);

        // 进行分页初始化
        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion: 3,
          totalPages: Math.ceil(info.total / info.size),
          currentPage: info.page,
          onPageClicked: function (a, b, c, page) {
            currentPage = page;

            render();
          }


        });

      }


    })
  };


  // 给启用禁用按钮, 添加点击事件 (通过事件委托)
  // 事件委托: $('父元素').on("事件名称", "子元素", function() { .... })

  // 优点: 1. 可以给动态生成的元素, 绑定事件
  //       2. 可以进行批量注册事件, 性能效率更高
  $('.lt_content tbody').on('click','.btn',function(){
    $('#userModal').modal('show');

    currentId = $(this).parent().data('id');
    isDelete = $(this).hasClass('btn-danger')?0:1;

  });

  // 确认按钮被点击, 发送ajax请求, 改变用户状态
  $('#confirmBtn').click(function(){
    $.ajax({
      type:'post',
      url: '/user/updateUser',
      data: {
        id: currentId,
        isDelete: isDelete
      },
      dataType: 'json',
      success: function(info){
        if(info.success){
          $('#userModal').modal('hide');
          render();
        }
      }


    });



  });


})