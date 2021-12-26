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
        
        // 고부가가치 page tab-menu
        $('.food').on('click',function(){
            $('ul.high-tab > li:first-child').addClass('active2');
            $('ul.high-tab > li:last-child').removeClass('active2');
            $('.high-food-all-wrap').css('display','block');
            $('.daily-all-wrap').css('display','none');
        });
        $('.daily').on('click',function(){
            $('ul.high-tab > li:last-child').addClass('active2');
            $('ul.high-tab > li:first-child').removeClass('active2');
            $('.daily-all-wrap').css('display','block');
            $('.high-food-all-wrap').css('display','none');
        });

        // 비즈니스 page tab-menu 
        $('.add-content').on('click',function(){
            $('.s-medi-description').stop().slideDown(300);
            $('.add-content').css('display','none');
            $('.closed-content-wrap').css('display','block');
        });
     
        $('#closed').on('click',function(){
         $('.s-medi-description').stop().slideUp(300);
         $('.add-content').css('display','block');
         $('.closed-content-wrap').css('display','none');
     });

     $('.add-content2').on('click',function(){
        $('.s-medi-description').stop().slideDown(300);
        $('.add-content2').css('display','none');
        $('.closed-content-wrap2').css('display','block');
    });
 
    $('#closed2').on('click',function(){
     $('.s-medi-description').stop().slideUp(300);
     $('.add-content2').css('display','block');
     $('.closed-content-wrap2').css('display','none');
 });





     $('.g-medicine').on('click',function(){
         $('ul.business>li:nth-child(2)').addClass('active2');
         $('ul.business>li:first-child').removeClass('active2');
         $('ul.business>li:nth-child(3)').removeClass('active2');
         $('ul.business>li:last-child').removeClass('active2');
     });
     $('.h-food').on('click',function(){
        $('ul.business>li:nth-child(3)').addClass('active2');
        $('ul.business>li:first-child').removeClass('active2');
        $('ul.business>li:nth-child(2)').removeClass('active2');
        $('ul.business>li:last-child').removeClass('active2');
    });
    $('.n-medicine').on('click',function(){
        $('ul.business>li:last-child').addClass('active2');
        $('ul.business>li:first-child').removeClass('active2');
        $('ul.business>li:nth-child(2)').removeClass('active2');
        $('ul.business>li:nth-child(3)').removeClass('active2');
    });
    $('.s-medicine').on('click',function(){
        $('ul.business>li:first-child').addClass('active2');
        $('ul.business>li:nth-child(2)').removeClass('active2');
        $('ul.business>li:nth-child(3)').removeClass('active2');
        $('ul.business>li:last-child').removeClass('active2');
    });
    
    $('.h-food').click(function(){
        $('.meta-page').css('display','block');
        $('.detox-page').css('display','none');
        $('.detox-meta-wrap').css('display','block');
        $('.detox-intro-wrap').css('display','none');
        $('.meta-description-wrap').css('display','block');
        $('.detox-description-wrap').css('display','none');
    });
    $('.s-medicine').click(function(){
        $('.meta-page').css('display','none');
        $('.detox-page').css('display','block');
        $('.detox-meta-wrap').css('display','none');
        $('.detox-intro-wrap').css('display','block');
        $('.meta-description-wrap').css('display','none');
        $('.detox-description-wrap').css('display','block');
    });
        
  








// R&D 영역 탭화면 기능구현
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
    $('ul.research>li:first-child').addClass('active2');
    $('ul.research>li:last-child').removeClass('active2');
    $('ul.research>li:nth-child(2)').removeClass('active2')

});
$('.new-bio').on('click',function(){
    $('ul.research>li:first-child').removeClass('active2');
    $('ul.research>li:last-child').removeClass('active2');
    $('ul.research>li:nth-child(2)').addClass('active2')

});
$('.chemi-gene').on('click',function(){
    $('ul.research>li:first-child').removeClass('active2');
    $('ul.research>li:last-child').addClass('active2');
    $('ul.research>li:nth-child(2)').removeClass('active2')

});

// 팝업창
$(".close").click(function(){
    $(".thankyou_message").css("display", "none");
});
});   