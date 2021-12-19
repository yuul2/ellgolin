$(function(){

    $('.navi_box>ul>li>a').mouseover(function(){
        $('.navi_box_bg').stop().slideDown(300);
        $('.submenu_box').stop().slideDown(300);
        });
        $('.submenu_box').mouseleave(function(){
            $('.navi_box_bg').stop().slideUp(300);
            $('.submenu_box').stop().slideUp(300);
            }); 
            
            
        // 네비게이션 end

     $('.bio-si').click(function(){
         $('div.bio-similar').css('display','block');
         $('div.pharmaceuticals').css('display','none');
         $('div.chemical').css('display','none');
     });

     $('.new-bio').click(function(){
        $('div.pharmaceuticals').css('display','block');
        $('div.bio-similar').css('display','none');
        $('div.chemical').css('display','none');
    });

    $('.chemi-gene').click(function(){
        $('div.chemical').css('display','block');
        $('div.bio-similar').css('display','none');
        $('div.pharmaceuticals').css('display','none');
    });

$('.bio-si').on('click',function(){
    $('ul.research>li:first-child').addClass('active');
    $('ul.research>li:last-child').removeClass('active');
    $('ul.research>li:nth-child(2)').removeClass('active')

});
$('.new-bio').on('click',function(){
    $('ul.research>li:first-child').removeClass('active');
    $('ul.research>li:last-child').removeClass('active');
    $('ul.research>li:nth-child(2)').addClass('active')

});
$('.chemi-gene').on('click',function(){
    $('ul.research>li:first-child').removeClass('active');
    $('ul.research>li:last-child').addClass('active');
    $('ul.research>li:nth-child(2)').removeClass('active')

});
   
        
        
        
       
});
