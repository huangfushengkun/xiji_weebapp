// 导航栏滑动
function drag() {
    var box = new IScroll('.link_block_box', {
        scrollX: true,
        scrollY: false,
        snap: true
    })
};
drag();

// 页面初始化请求
 window.onload = function() {
    fun(0)
 }

// tab切换发起请求
function tab () {
    $('.swiper-wrapper').children().click(function (e) {
        e.preventDefault();
        console.log(this)
        $('.swiper-wrapper li a').removeClass("box8").children().removeClass("box9");
        $(this).children().addClass("box8").children().addClass("box9");
        var kind = $(this).index();
        fun (kind);
    });
}
tab ();

// 请求接收发起ajax
function fun(type) {
    $.ajax({
        type: 'get',
        url: 'api/teambuysquare.php',
        data: "kind="+type,
        dataType: 'json',
        success: function (data) {
            if(type == 0){
                $('.other-goods-box-box').html("");
                var osc = ejs.render($('#tpl').html(), { data: data });
                $('.recommend-box-box').html(osc);
                $(".recommend-box-box").css({diplay:"block"});
            }else{
                $('.other-goods-box-box').html("");
                $('.recommend-box-box').html("");
                var obj = ejs.render($('#tpt').html(), { data: data })
                $('.other-goods-box-box').html(obj);
            }
        }
    })
}

$(window).scroll(function(){
    if($(window).scrollTop() >= 42){
        $(".link_block_box").addClass('fxd').removeClass('rte').css({display:'block'})
    }else{
        $(".link_block_box").addClass('rte').removeClass('fxd')
    }
})


