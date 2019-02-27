$(".box-d").click(function() {
    var $user =  $(".text").val();
    var $pwd = $(".a-account").val();
    // console.log(user)
    $.ajax({
        type: "get",
        url: "api/register.php",
        // data:"name="+ user,
        data:{
            user:$user,
            pwd:$pwd
        },
        success: function(data) {
            console.log(data);
        }
    })
})