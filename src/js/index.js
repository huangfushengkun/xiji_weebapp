$("#xj-top-btn").click(function(){
  $("html,body").scrollTo({
      toT:0,
      durTime:2000 //返回顶部的时间
  })
})
$(window).scroll(function(){
  console.log($(window).scrollTop())

  if($(window).scrollTop() > 10){
    $(".header-inner").css({position: 'fixed'})
    
  }else{
    $(".header-inner").css({position: 'relative'})

  }
  if($(window).scrollTop() > 97){
    // $(".header-inner").removeClass('del')
    $(".header-inner, #index_sratch_block, .logo img").addClass('hRipple')
  }else{
    // $(".header-inner").addClass('del')
    $(".header-inner, #index_sratch_block, .logo img").removeClass('hRipple')
  }
  
})


console.log("sfasf")