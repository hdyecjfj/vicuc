$(function() {
        $(window).scroll(function() {
            $('.animation').each(function() {
                console.log($(this).offset().top - $(window).scrollTop());
                if (($(this).offset().top - $(window).scrollTop()) < window.innerHeight) {
                    $(this).addClass('animation2');
                }
            });
        });
    })
    /***
     *  代码版权归华东交通大学董励强所有！！！
     *  盗用必究！！！
     * 联系方式：18279159663
     * e-mail：ecjtudongliqiang@163.com
     */