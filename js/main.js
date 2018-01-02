/**
 * Created by lenovo on 17/12/29 029.
 */
$(".header .header-right .header-r-img").click(function(){
    $(".header-list").show();
});

$(".header-list .header-list-r").click(function(){
    $(".header-list").hide()
});
$(".header .header-left .swiper-slide").click(function(){
    var s=$(this).index();
    $(".header .header-left .swiper-slide").eq(s).addClass("red").siblings().removeClass("red")
});



$(".shop-canshu ul li").click(function(){
    var s=$(this).index();
    $(".shop-canshu-neirong div").eq(s).show().siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
});