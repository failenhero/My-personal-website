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
});
