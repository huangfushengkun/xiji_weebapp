// 导航条 nav
function swipeTab() {
    // 导航条显示
    window.onscroll = function () {
        var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollT >= 310) {
            $('nav').show()
        } else {
            $('nav').hide()
        }
    }
var navSwiper;
$(document).ready(function (e) {

    //解决不可右划返回上一页问题
    // if (window.location.href.indexOf('apparticle') >= 0 && navigator.userAgent.toLowerCase().indexOf(
    //         'iphone') >= 0) {
    //     $(document).off('touchstart MSPointerDown pointerdown');
    //     $(document).off('touchmove MSPointerMove pointermove');
    //     $(document).off('touchend MSPointerUp pointerup');
    // }

    var slideNum;
    // if ($.fn.cookie('X[LANG]') == 'en_US') {
    //     slideNum = 3;
    // } else {
    slideNum = 4;
    // }
    //当显示的个数多于四个时，产生第五个menu
    if ($('#link_block .swiper-slide').length > 1) {
        $("#subject_tabnav").css("display", "block");

        if ($('#link_block .swiper-slide').length > slideNum) {
            swiperWSet();
            $("#shadow_right").css("display", "block");

            navSwiper = new Swiper('.xj-app-swiper-order', {
                pagination: '.swiper-pagination',
                slidesPerView: slideNum,
                paginationClickable: true,
                spaceBetween: 0
            });

        } else {
            if ($('#link_block .swiper-slide').length == 2) {
                $("#link_block .swiper-slide").css({
                    "width": "50%",
                    "float": "left"
                });
            } else if ($('#link_block .swiper-slide').length == 3) {
                $("#link_block .swiper-slide").css({
                    "width": "33.3%",
                    "float": "left"
                });
            } else if ($('#link_block .swiper-slide').length == 4) {
                $("#link_block .swiper-slide").css({
                    "width": "25%",
                    "float": "left"
                });
            }
        }
    }

    var menublocks = $('#link_block .swiper-slide');
    var openmenublocks = $('#nav_open_layer .swiper-slide');
    var contentblocks = $('.xj-content-product-wrap');
    var contentblocksTop = [];
    var displaceNum = 50;
    var articletop = $('.xj-content-product-wrap')[0];

    //添加menu的id;
    for (var i = 0; i < menublocks.length; i++) {
        menublocks.eq(i).attr('id', 'menu' + i);
    };
    // console.log(menublocks.length)
    for (var i = 0; i < openmenublocks.length; i++) {
        openmenublocks.eq(i).attr('id', 'openmenu' + i);
    };

    //添加content-block的id;
    for (var i = 0; i < contentblocks.length; i++) {
        contentblocks.eq(i).attr('id', 'item' + i);
        contentblocksTop.push(contentblocks[i].offsetTop - displaceNum);
    }
    // console.log(contentblocks.length)

    //链接到对应的content_block;
    contentblocks.each(function (idx, elem) {
        $("#menu" + idx).bind('click', function () {
            window.scrollTo(0, contentblocksTop[idx] + 1);
        });

        $("#openmenu" + idx).bind('click', function () {

            if (navSwiper) {
                if (((idx + 1) - (navSwiper.activeIndex + 1)) > 0 && ((idx + 1) - (
                        navSwiper.activeIndex + 1)) > 4) {
                    navSwiper.slideTo((idx - 4) + 1, 1000, false);
                } else if (((idx + 1) - (navSwiper.activeIndex + 1)) < 0) {
                    navSwiper.slideTo(idx + 1, 1000, false);
                }
            }
            window.scrollTo(0, contentblocksTop[idx] + 1);
            closeLayer();
            $(document.body).unbind("touchmove");
        });
    });

    var scrollTime;
    var prevPosNum = 0;
    var init_float_bar = function () {
        clearTimeout(scrollTime);
        //将每个文章模块的top位置存到数组里
        contentblocksTop = [];
        for (var i = 0; i < contentblocks.length; i++) {
            contentblocksTop.push(contentblocks[i].offsetTop - displaceNum);
        }
        //解决商品详细页面模块预加载问题
        var floorBtns = $('#link_block .swiper-slide');
        var openfloorBtns = $('#nav_open_layer .swiper-slide');
        var scrollTop = $("body").scrollTop() || $("html").scrollTop();
        var floorNum = getArticleFloor(scrollTop);

        //导航条固定在页面顶部
        if (scrollTop >= articletop.offsetTop - displaceNum) {
            $('#link_block').addClass("open");
        } else {
            $('#link_block').removeClass("open");
        }

        if (floorNum > 0) {
            for (var i = 0; i < floorBtns.length; i++) {
                $('li.swiper-slide').removeClass("active");
            }
            floorBtns.eq(floorNum - 1).addClass("active");
            openfloorBtns.eq(floorNum - 1).addClass("active");

            if (navSwiper) {
                if ((floorNum - 1) - navSwiper.activeIndex >= slideNum) {
                    navSwiper.slideTo(navSwiper.activeIndex + 1, 1000, false);
                } else if ((floorNum - 1) < navSwiper.activeIndex) {
                    navSwiper.slideTo(navSwiper.activeIndex - 1, 1000, false);
                }
            }

            //解决疯狂向下滑导航定不到位的问题
            scrollTime = setTimeout(function () {
                if (navSwiper) {
                    if ((floorNum - 1) - prevPosNum >= slideNum) {
                        navSwiper.slideTo(floorNum - 4, 1000, false);
                    } else if ((floorNum - 1) < prevPosNum) {
                        navSwiper.slideTo(floorNum - 1, 1000, false);
                    }
                }
                prevPosNum = floorNum - 1; //记住楼层号
            }, 1500);
        };
    }

    setTimeout(function () {
        init_float_bar();
    }, 600);
    $(window).scroll(init_float_bar);
    $(window).resize(function () {
        if (navSwiper) {
            swiperWSet();
            navSwiper.update();
        }
    });

    //取得滚轮到达那个文章楼层
    function getArticleFloor(scrollTopNum) {

        if (scrollTopNum < contentblocksTop[0]) return 0;

        for (var i = 0; i < contentblocksTop.length; i++) {

            if (i < contentblocksTop.length - 1) {
                if (scrollTopNum >= contentblocksTop[i] && scrollTopNum <= contentblocksTop[i + 1]) {
                    return i + 1;
                }
            } else {
                if (scrollTopNum >= contentblocksTop[i]) {
                    return i + 1;
                }
            }
        }
    }
});
function scrollTopFunc() {
    window.scrollTo(0, 1);
    if (navSwiper) {
        navSwiper.slideTo(0, 0, false);
        $('#link_block li.swiper-slide').removeClass("active");
        $('#link_block li.swiper-slide').eq(0).addClass("active");
    }
}
scrollTopFunc();
}
swipeTab()

// 返回顶部
$(function () {
    $(window).scroll(function () {
        // console.log(1);
        var scrollT = $(window).scrollTop();
        if (scrollT > 800) {
            $(".top-btn-link").show();
        } else {
            $(".top-btn-link").hide();
        }
    });
    $(".top-btn-link").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 16.7);
        return false;
    });
});
// 判断是否存在localStorage
