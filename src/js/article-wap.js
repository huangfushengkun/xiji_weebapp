var dom = (function () {
    function xhr(n, obj, obj1) {
        /**
         *数据请求
         */
        var pid = n,
            obj = obj,
            obj1 = obj1;
        $(function () {
            $.ajax({
                type: 'get',
                url: 'api/product.php',
                dataType: 'json',
                data: {
                    pid: n
                },
                success: function (data) {
                    // console.log(data);
                    html(data, obj, obj1);
                },
                error: function (err) {
                    console.log(err);
                }
            });
        })
    }

    function html(data, obj, obj1) {
        /**
         *页面渲染
         */
        var result = data.list;
        var html = ejs.render(document.getElementById(obj).innerHTML, {
            shop: result
        })
        $(obj1).html(html);
    }
    return {
        xhr: xhr
    }
})()
var webStorage = (function () {
    function agrs(A, a) {
        (A = A || "A"), (a = a || "a");
    }
    /*
     *设置/修改localStorage
     */
    function setlocal(A, a) {
        agrs(A, a);
        if (!window.localStorage) {
            alert("浏览器支持localstorage");
            return false;
        } else {
            var storage = window.localStorage;
            //写入a字段
            storage["A"] = a;
            console.log(typeof storage["A"]);
        }
    }
    /*
     *设置/修改sessionStorage
     */
    function setSession(A, a) {
        agrs(A, a);
        if (!window.sessionStorage) {
            alert("浏览器支持sessionStorage");
            return false;
        } else {
            var storage = window.sessionStorage;
            //写入a字段
            storage["A"] = a;
            console.log(typeof storage["A"]);
        }
    }
    /*
     *读取localStorage
     */
    function getlocal(A, a) {
        agrs(A, a);
        if (!window.localStorage) {
            alert("浏览器支持localstorage");
        } else {
            var storage = window.localStorage;
            //第一种方法读取
            var a = storage.a;
            console.log(a);
        }
    }
    /*
     *读取sessionStorage
     */
    function getSession(A, a) {
        agrs(A, a);
        if (!window.sessionStorage) {
            alert("浏览器支持localstorage");
        } else {
            var storage = window.sessionStorage;
            //第一种方法读取
            var a = storage.a;
            console.log(a);
        }
    }
    /*
     *删除localStorage
     */
    function dellocal(falg, a) {
        a = a || "a";
        var storage = window.localStorage;
        if (falg) {
            storage.clear();
        } else if (falg) {
            storage.removeItem(a);
        }
    }
    /*
     *删除sessionStorage
     */
    function delSession(falg, a) {
        a = a || "a";
        var storage = window.sessionStorage;
        if (falg) {
            storage.clear();
        } else if (falg) {
            storage.removeItem(a);
        }
    }
    return {
        setlocal: setlocal,
        getlocal: getlocal,
        dellocal: dellocal,
        setSession: setSession,
        getSession: getSession,
        delSession: delSession
    };
})();

function scrollTopFunc() {
    window.scrollTo(0, 1);
    if (navSwiper) {
        navSwiper.slideTo(0, 0, false);
        $('#link_block li.swiper-slide').removeClass("active");
        $('#link_block li.swiper-slide').eq(0).addClass("active");
    }
}
// scrollTopFunc();