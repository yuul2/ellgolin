$(function(){

    $('.navi_box>ul>li>a').mouseover(function(){
        $('.navi_box_bg').stop().slideDown(300);
        $('.submenu_box').stop().slideDown(300);
        });
        $('.submenu_box').mouseleave(function(){
            $('.navi_box_bg').stop().slideUp(300);
            $('.submenu_box').stop().slideUp(300);
            });   
})
