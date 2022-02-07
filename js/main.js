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
        
        // 모바일 네비게이션 
        $(function(){
            $('.add-sub-menu').on('click',function(){
                $('.m-sub-menu').stop().slideDown(300);
                $('.add-sub-menu').css('display','none');
                $('.remove-menu').attr('style','display : block !important');
                $('.on-first').addClass('on');
            });
            $('.remove-menu').on('click',function(){
                $('.m-sub-menu').stop().slideUp(300);
                $('.remove-menu').css('display','none');
                $('.add-sub-menu').css('display','block');
                $('.on-first').removeClass('on');
            });
            // 회사소개 end
            $('.add-sub-menu2').on('click',function(){
                $('.m-sub-menu2').stop().slideDown(300);
                $('.add-sub-menu2').css('display','none');
                $('.remove-menu-2').attr('style','display : block !important');
                $('.on-sec').addClass('on');
            });
            $('.remove-menu-2').on('click',function(){
                $('.m-sub-menu2').stop().slideUp(300);
                $('.remove-menu-2').css('display','none');
                $('.add-sub-menu2').css('display','block');
                $('.on-sec').removeClass('on');
            });
            // 제품소개 end 
            $('.add-sub-menu3').on('click',function(){
                $('.m-sub-menu3').stop().slideDown(300);
                $('.add-sub-menu3').css('display','none');
                $('.remove-menu-3').attr('style','display : block !important');
                $('.on-3rd').addClass('on');
            });
            $('.remove-menu-3').on('click',function(){
                $('.m-sub-menu3').stop().slideUp(300);
                $('.remove-menu-3').css('display','none');
                $('.add-sub-menu3').css('display','block');
                $('.on-3rd').removeClass('on');
            });
            // 홍보관 end 
            $('.add-sub-menu4').on('click',function(){
                $('.m-sub-menu4').stop().slideDown(300);
                $('.add-sub-menu4').css('display','none');
                $('.remove-menu-4').attr('style','display : block !important');
                $('.on-4rd').addClass('on');
            });
            $('.remove-menu-4').on('click',function(){
                $('.m-sub-menu4').stop().slideUp(300);
                $('.remove-menu-4').css('display','none');
                $('.add-sub-menu4').css('display','block');
                $('.on-4rd').removeClass('on');
            });
            // 고객문의 end 

            $('.xi-bars').click(function(){
                $(".open").toggle("slide");
            });
            $('.closing').click(function(){
                $(".open").toggle("slide");
            });
            
        })
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
        $('.add-made-btn').on('click',function(){
            $('.made-noodle-wrap').css('display','block');
        });
        $('.xi-close').on('click',function(){
            $('.made-noodle-wrap').css('display','none')
        })
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