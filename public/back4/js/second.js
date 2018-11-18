

$(function(){
  var currentPage = 1;
  var pageSize = 5;

  render();

  function render() {
    $.ajax({
      type: "get",
      url: "/category/querySecondCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: "json",
      success: function( info ) {
        // console.log( info );
        var htmlStr = template("secondTpl", info );
        $('tbody').html( htmlStr );

        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion: 3,
          totalPages: Math.ceil(info.total/info.size),
          currentPage: info.page,
          onPageClicked: function(a,b,c,page){
            currentPage = page;
            render();
          }


        });
        
      }
    })
  };


   // 2. 点击添加按钮, 显示添加模态框
   $('#addBtn').click(function(){
    $('#addModal').modal('show');

    $.ajax({
      type: 'get',
      url: '/category/queryTopCategoryPaging',
      data: {
        page: 1,
        pageSize: 100
      },
      dataType: 'json',
      success: function(info){
        var htmlStr = template('dropdownTpl',info);
        $('.dropdown-menu').html(htmlStr);

      }


    });


   });


   // 3. 给下拉菜单的所有 a 添加点击事件, 通过事件委托注册
   $('.dropdown-menu').on("click", "a", function() {
    // 获取 a 的文本
    var txt = $(this).text();
    // 将文本设置给 按钮
    $('#dropdownText').text( txt );

    // 获取 id, 设置给准备好的 input
    var id = $(this).data("id");
    $('[name="categoryId"]').val( id );

    // $('[name="categoryId"]').trigger("input");

    // 手动将 name="categoryId" 的校验状态, 改成 VALID 校验成功
    $('#form').data("bootstrapValidator").updateStatus("categoryId", "VALID")
  });




// 4. 进行文件上传初始化
$('#fileupload').fileupload({
  dataType: 'json',
  done: function(e,data){
    var result = data.result;
    var picUrl = result.picAddr;
    $('#imgBox img').attr('src', picUrl);
     // 将src路径, 实时设置给 input
     $('[name="brandLogo"]').val( picUrl );

     // 将 name="brandLogo" 的校验状态, 改成成功
     $('#form').data("bootstrapValidator").updateStatus("brandLogo", "VALID");

  }


})




 // 5. 配置表单校验
 $('#form').bootstrapValidator({

  // 配置排序项, 默认会对隐藏域进行排除, 我们需要对隐藏域进行校验
  excluded: [],

  // 配置校验图标
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',    // 校验成功
    invalid: 'glyphicon glyphicon-remove',  // 校验失败
    validating: 'glyphicon glyphicon-refresh'  // 校验中
  },

  // 校验字段
  fields: {
    categoryId: {
      validators: {
        notEmpty: {
          message: "请选择一级分类"
        }
      }
    },

    brandName: {
      validators: {
        notEmpty: {
          message: "请输入二级分类名称"
        }
      }
    },

    brandLogo: {
      validators: {
        notEmpty: {
          message: "请选择图片"
        }
      }
    }
  }
})


})
