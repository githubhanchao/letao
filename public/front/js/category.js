$(function(){
  $.ajax({
    type:'get',
    url: '/category/queryTopCategory',
    dataType: 'json',
    success: function(info){
      var htmlStr = template('left_tpl', info);
      $('.lt_category_left ul').html(htmlStr);

      renderId(info.rows[0].id);
    }

  });


    // 2. 给左侧添加点击事件, 通过事件委托实现
    $('.lt_category_left').on('click','a',function(){
      // 高亮效果
      $(this).addClass('current').parent().siblings().find('a').removeClass('current');
      // 获取一级分类 id
      var id = $(this).data('id');
      // 根据id渲染二级分类
      renderId(id);



    });



    // 根据 一级分类的 id 渲染 二级分类
    function renderId(id){
      $.ajax({
        type: 'get',
        url: '/category/querySecondCategory',
        data: {
          id: id
        },
        dataType: 'json',
        success: function(info){
          var htmlStr = template('right_tpl', info);
          $('.lt_category_right ul').html(htmlStr);


        }



      });


    }




})