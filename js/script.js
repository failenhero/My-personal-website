//jshint esversion: 6

$(document).ready(function () {

    //upButton
    
    let upperScroll = 0; 

    $(window).scroll( () => { 
        let scroll = $(this).scrollTop(); 

        if (scroll > upperScroll){
            $('.upbtn').show();
        } else {
            $('.upbtn').hide();} 
    }); 


    $('.upbtn').click( () => { 
        document.documentElement.scrollTop = 0;  
    });    

    // Popup

    // open by clicking the button
    $('.popupButton').click( () => { 
      $('main').css('filter','blur(5px)');
      $("#myModalBox").css('display', 'block');
      $("html,body").css("overflow","hidden");
    });
    //closing by close-btn
    $('.close').click( () => { 
        $('main').css('filter','none');
        $("#myModalBox").css('display', 'none');
        $("html,body").css("overflow","auto");      
    });
    //closing by secondary-btn
    $('.btn-secondary').click( () => { 
        $('main').css('filter','none');
        $("#myModalBox").css('display', 'none');
        $("html,body").css("overflow","auto");      
    });

});
