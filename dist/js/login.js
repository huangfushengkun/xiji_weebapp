var tabs = (function() {
    function tabsSwiper() {
        /**
        *swiper拖拽滑动
        */
        var tabsSwiper = new Swiper("#tab", {
        speed: 500,
        on: {
          slideChangeTransitionStart: function() {
            $(".tabs .active").removeClass("active");
            $(".tabs li")
              .children("span")
              .css({
                fontSize: ".26rem"
              });
            $(".tabs li")
              .eq(this.activeIndex)
              .children("i")
              .addClass("active");
            $(".tabs li")
              .eq(this.activeIndex)
              .children("span")
              .css({
                fontSize: ".3rem"
              });
          }
        }
      });
      $(".tabs li").on("click", function(e) {
        e.preventDefault();
        $(".tabs .active").removeClass("active");
        $(this)
          .children("i")
          .addClass("active");
        tabsSwiper.slideTo($(this).index());
      });
    }
    function close() {
        /**
        * 关闭广告
        */
      $(".close-btn").on("click", function(e) {
        $("body")
          .children("article")
          .fadeOut();
      });
    }
    function clearinput() {
      /*
       *功能：点击清空输入框内容
       *input类名 text
       *x清空文本按钮类名 close-btn
       */
      $(".close-btn").on("click", function(e) {
        $(this)
          .parent()
          .children(".text")
          .val(null);
      });
    }
    function saveStorage() {
        /*
        *是否储存本地webStorage
        */
        // var i=2n;
      $("input[type='checkbox']").on("change", function() {
        $(this).toggle(
          function() {
            $(this).attr("checked",true);
          },
          function() {
            $(this).attr("checked", false);
          }
        );
      });
    }
    function errInfo(data) {
      /**
       * 数据处理
       */
      if (data.code == 0) {
        console.log("登录成功");
        howStorage();
        window.location.href = "index.html";
      } else if (data.code == 2) {
        $(".c-g-c .f-l").html("<p>用户密码错误</p>");
        focus();
      } else if (data.code == 1) {
        $(".c-g-c .f-l").html("<p>您尚未注册</p>");
        focus();
      }
    }
    function focus() {
      /**
       * 任意文本框获焦恢复原来样式
       */
      $("input").on("focus", function() {
        $(".c-g-c .f-l").html(
          '<input type="checkbox" name="is_remember"> 记住我'
        );
      });
    }
    function howStorage() {
      /**
       * 判断是sessionStorage
       * 还是localStorage
       */
      var user, str, isChecked;
      str =
        '{tel:"' +
        $(".a-account").val() +
        '",pass:"' +
        $(".a-password").val() +
        '"}';
      isChecked = $(".c-g-c .f-l input").is(':checked');
      if (isChecked == true) {
        webStorage.setlocal(user, str);
        console.log(0);
      } else {
        console.log(1);
        webStorage.setSession(user, str);
      }
    }
    return {
      tabsSwiper: tabsSwiper,
      close: close,
      clearinput: clearinput,
      saveStorage: saveStorage,
      errInfo:errInfo,
      focus:focus,
      howStorage:howStorage
    };
  })();
var sends = {
    checked: 1,
    send: function() {
      var numbers = /^1\d{10}$/;
      var val = $("#phone")
        .val()
        .replace(/\s+/g, ""); //获取输入手机号码
      if (
        $(".xj-sigin-new .tel").find(".error").length == 0 &&
        $("#get_vcode_btn").attr("class") == "send1"
      ) {
        if (!numbers.test(val) || val.length == 0) {
          $(".xj-sigin-new .tel").append(
            '<span class="error">手机格式错误</span>'
          );
          return false;
        }
      }
      if (numbers.test(val)) {
        var time = 30;
        $(".tel .error").remove();
        function timeCountDown() {
          if (time == 0) {
            clearInterval(timer);
            $("#get_vcode_btn")
              .addClass("send1")
              .removeClass("send0")
              .html("发送验证码");
            sends.checked = 1;
            return true;
          }
          $("#get_vcode_btn").html(time + "S后再次发送");
          time--;
          return false;
          sends.checked = 0;
        }
        $("#get_vcode_btn")
          .addClass("send0")
          .removeClass("send1");
        timeCountDown();
        var timer = setInterval(timeCountDown, 1000);
      }
    }
  };
var webStorage = (function() {
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

