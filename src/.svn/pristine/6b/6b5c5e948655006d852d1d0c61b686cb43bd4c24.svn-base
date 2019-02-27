$(function () {
    // 初始样式
    $(".product .gallery-cat-list").eq(0).addClass("ga-active");
    $(".product .product-list-content").eq(0).addClass("content-active");
    $(".product .product-list-content").hide();
    $(".product .product-list-content").eq(0).show();

    //解决iscroll不支持固定定位的方法
    function loaded() {
        document.addEventListener("touchmove", function (e) {
            e.preventDefault();
        })
        var myScroll0 = new IScroll("#wrapper0", {
            bounce: false,
            scrollY: true,
            deceleration: 0.01,
            snap: false,
            probeType: 2
        })
        
        myScroll0.on('scrollEnd', function(){
            myScroll0.refresh();
        });
    }
    document.addEventListener("DOMContentLoaded", loaded, false);
    $(".content-active .filter-entries").eq(0).find(".banner").addClass("banner-active");


    //点击时候的样式
    function tab() {
        $(".product .gallery-cat-list").on("click", function () {
            // document.addEventListener("touchmove", function (e) {
            //     e.preventDefault();
            // })
            // tab切换
            var index = $(this).index()
            var $productNode = $(this).parents(".product").children(".product-list-content");
            $(this).addClass("ga-active").siblings().removeClass("ga-active");
            $productNode.eq(index).show().siblings(".product-list-content").hide();
            $productNode.eq(index).addClass("content-active").siblings(".product-list-content").removeClass("content-active");
            $(".content-active .filter-entries").eq(0).find(".banner").addClass("banner-active");

            //解决iscroll不支持固定定位的方法
            // $productNode.eq(index).addEventListener("touchmove",function(e){
            //     e.preventDefault();
            // })
           
            // document.addEventListener("touchmove", function (e) {
            //     e.preventDefault();
            // })

            // 生成wrapper的实例化对象
            var myScroll = "myScroll" + index;
            var wrapper = "#wrapper" + index;
            myScroll = new IScroll(wrapper, {
                bounce: false,
                scrollY: true,
                deceleration: 0.01,
                snap: false,
                probeType: 2
            })
            myScroll.on('scrollEnd', function(){
                myScroll.refresh();
            });
        })
        
    }
    tab()
    // document.addEventListener("DOMContentLoaded", tab, false);

    // 手指移动时
    $(".product").on("touchmove",".content-active",function(){
        scrollMove();
    })
    $(".product").on("scroll",".content-active",function(){
        scrollMove();
    })


    function scrollMove() {
        $(".content-active .filter-entries").each(function () {
            var ofset = $(this).position().top;
            if (ofset <= 0 && ofset >= -40) {
                $(this).find(".banner").addClass("banner-active");
                $(this).siblings().find(".banner").removeClass("banner-active");
            }

            if ($(this).find(".banner").hasClass("banner-active")) {
                $(this).find(".banner").css({
                    position: "fixed",
                    top: 128,
                    boxShadow: "rgb(153, 153, 153) 0px 4px 4px 0px"
                }).parents(".filter-entries").siblings().find(".banner").css({
                    position: "static",
                    top: 0,
                    boxShadow: "none"
                })
            }
            if (ofset > 0 && ofset <= 40) {
                $(this).prev().find(".banner").addClass("banner-active").parents(".filter-entries").siblings().find(".banner").removeClass("banner-active");
                $(this).prev().find(".banner").css({
                    top: ofset + 88,
                    boxShadow: "none"
                });
            }
        })
    }




    // 搜索框效果
    function search() {
        // 点击输入框时
        $(".search input").on("tap", function () {
            $(".search-box .searchLayer").show()
        })
        // 点击取消按钮时
        $(".searchLayer .cancel").on("tap", function () {
            $(".search-box .searchLayer").hide()
        })


        // 关键字搜索
        $(".key input").on('keyup', function () {
            if($(this).val()){
                $(this).next().show();
            }else{
                $(this).next().hide();
            }
            $.ajax({
                url: "https://sug.so.360.cn/suggest",
                type: "get",
                data: "word=" + $(".key input").val() + "&encodein=utf-8&encodeout=utf-8&pq=",
                dataType: "jsonp",
                success: function (data) {
                    console.log(data.s);
                    $(".search-list ul").html("");
                    //动态添加li标签
                    $.each(data.s, function (i, val) {
                        var $liNode = `<li><a href='/wap/gallery-index_new.html?scontent=n,${val}'><span class='association-product-name'>${val}</span></a></li>`;
                        $(".search-list ul").append($liNode);
                    })
                    //当点击每个li标签时跳转到相应的连接
                    $(".association-product-name").on("click", function (e) {
                        e.preventDefault();
                        var $searchVal = $(this).html();
                        location.href = "https://www.so.com/s?ie=utf-8&fr=none&src=sug-local&q="+$searchVal;
                    })
                }
            })
        })

        // 清空符号的点击事件
        $(".clearout").on("tap",function(){
            $(this).hide();
            $(this).prev().val("");
            $(".search-list ul").html("");
        })
        $(".submit").on("click",function(e){
            e.preventDefault();
            var keywords = $(".key input").val();
            if(keywords){
                location.href = "https://www.so.com/s?ie=utf-8&fr=none&src=sug-local&q="+keywords;
            }
        })
    }
    search()

})

