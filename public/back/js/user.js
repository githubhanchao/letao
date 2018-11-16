/**
 * Created by 54721 on 2018/11/15.
 */
$(function() {

  // 当前页
  var currentPage = 1;
  // 一页多少条
  var pageSize = 5;
  // 1. 一进入页面, 进行渲染
  render();

  var currentId;
  var isDelete;


  // 一进入页面, 发送ajax请求, 获取数据, 进行页面动态渲染
 function render() {
  $.ajax({
    type: "get",
    url: "/user/queryUser",
    data: {
      page: currentPage,
      pageSize: pageSize
    },
    dataType: "json",
    success: function( info ) {
      console.log( info );
      // 生成 htmlStr, 将来进行渲染
      // 参数1: 模板id, 参数2: 数据对象
      // 在模板中, 可以直接访问传进去对象中的所有属性
      var htmlStr = template("tmp", info );

      $('tbody').html( htmlStr );


      // 配置分页
      $('#paginator').bootstrapPaginator({
        // 指定bootstrap版本
        bootstrapMajorVersion: 3,
        // 当前页
        currentPage: info.page,
        // 总页数
        totalPages: Math.ceil( info.total / info.size ),

        // 当页面被点击时触发
        onPageClicked: function( a, b, c, page ) {
          // page 当前点击的页码
          currentPage = page;
          // 调用 render 重新渲染页面
          render();
        }
      });
    }
  })
 }


 // 2. 通过事件委托给 按钮注册点击事件
$('.lt_content tbody').on('click','.btn',function(){
  // alert(111);
  $('#userModal').modal("show");
  // 用户 id
  var id =$(this).parent().data('id');
  var isDelete = $(this).hasClass('btn-success') ? 1 : 0 ;

   // 先解绑, 再绑定事件, 可以保证只有一个事件绑定在 按钮上
   $('#confirmBtn').off('click').on('click',function(){

    $.ajax({
      type: 'post',
      url: '/user/updateUser',
      data: {
        id: id,
        isDelete: isDelete
      },
      success: function(info){
        if(info.success){
          $('#userModal').modal('hide');
          render();
        }
      }
    })

   });


})






})
