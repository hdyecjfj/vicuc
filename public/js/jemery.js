$(function() {

    // var wi = $('.banner_zzj').outerHeight() + $('.s-nav').outerHeight() + 70;
    // $('.yidong').css({
    //     "margin-top": wi + "px"
    // });

    /***
     *  代码版权归华东交通大学董励强所有！！！
     *  盗用必究！！！
     * 联系方式：18279159663
     * e-mail：ecjtudongliqiang@163.com
     */

    $('#s-nav>li>a').hover(function() {
        $(this).children('.cntoen').css('display', 'block');
    }, function() {
        $('#s-nav>li .cntoen').css('display', 'none');
    })
    $('#li_core').hover(function() {
        $('#menu-show').css('display', 'block');
    }, function() {
        $('#menu-show').css('display', 'none');
    })



    if ($(window).width() <= 768) {
        $('.logo').attr('src', './img/logo_2.gif');
        $('#menu-show').css('display', 'none');
    } else {
        $('.logo').attr('src', './img/logo.gif');
    }
    /*调整窗口自动调整宽度*/
    $(window).resize(function() {
        if ($(window).width() <= 768) {
            $('.logo').attr('src', './img/logo_2.gif');
        } else {
            $('.logo').attr('src', './img/logo.gif');
        }
    });

    var count = 0;
    $('.nav-ss').on('click', function() {
        //banner_zzj  bannner 的类
        //.s-nav   导航栏的类

        count++;
        if (count % 2 == 1) {
            $('#accordion').css('left', '-5%');
            $('.contorl').css('left', '54%');
            $('#accordion').css('transition', 'all 1s');
            $('.contorl').css('transition', 'all 1.1s');
        } else {
            $('#accordion').css('left', '-65%');
            $('.contorl').css('left', '0%');
            $('#accordion').css('transition', 'all 1s');
            $('.contorl').css('transition', 'all 0.9s');
        }
    });
})