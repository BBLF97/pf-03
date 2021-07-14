$(function(){
             // 개별메뉴 
                                // .mouseenter > 마우스가 선택한 요소에 들어왔을때
                                // .slideDown > 선택 요소를 말아내리듯 노출
                                $('nav>ul>li').mouseenter(function(){
                                    $('nav>ul>li>ul>li').slideDown(100);
                                });
                                // .mouseleave > 마우스가 선택한 요소에서 나갔을때 
                                // .slideUp > 선택 요소를 말아올리듯 숨김
                                $('nav>ul>li').mouseleave(function(){
                                    $('nav>ul>li>ul>li').slideUp(100); 
                                });
   
      var x = 0;
      setInterval(function(){
     if(x<2){
      x++; 
     }else {
      x = 0;
     }
     var sliderPosition = x*(-300)+"px";
                                       
     $(".sliderList").animate({top:sliderPosition},400);     
     console.log(x);  
     },2000);
                                   
  
     $(".layerPopup").on('click',function(e){
     e.preventDefault();
     $("#popup").fadeIn();
     });
   
     $(".close").on('click',function(e){               
     $("#popup").fadeOut();
               });
   });