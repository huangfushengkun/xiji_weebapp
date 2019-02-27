var mySwiper = new Swiper ('.swiper-container', {
    // loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
});

// $.ajax({
//   type: "get",
//   url: "../api/commodity-details.php",
//   success: function(data) {
//       console.log(data);
//   }
// })

$(".tableStyle").click(function(){
    $(".popup_buy_view_div").css({
      bottom:0
    });
    $(".xj-box-bc").show();
})
$(".closeBtn").click(function(){
  $(".popup_buy_view_div").css({
    bottom:-3000
  });
  $(".xj-box-bc").hide();
})