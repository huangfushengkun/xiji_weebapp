    //密码 明密文切换
    $(".pwd-view").click(function(){
        if($(this).prev("input").attr("type") == "password"){
            $(this).addClass("view");
            $(this).prev("input").attr("type","text");
        }else{
            $(this).prev("input").attr("type","password");
            $(this).removeClass("view");
        }
    });
    //判断密码
    // 如果都符合条件,修改成功会跳转到登陆页面
    $('.passwd-re').blur(function(){
        var oldPwd = $('.old-password').val();
        var val1 =  $('.passwd').val();
        var val2 = $('.passwd-re').val();
        $.ajax({
            type: "post",
            url: "api/member-security.php",
            data: {
                pwd: oldPwd,
            },
        })
        // if(!oldPwd==pwd){
        //     alert('输入的旧密码与原密码不符!');
        // }
        if(val1==val2){
            window.location.href='#';
        }else{
            alert('两次输入的密码不一致');
        }
    })
    