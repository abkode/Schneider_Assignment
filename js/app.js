
angular.module('app', ['ngRoute']);



$(document).ready(function() {
    checkSize();
    $(window).resize(checkSize);

    // changing icons
    var timer = setInterval(function() {
        $('.icon_set img').each(function () {
            var new_src = $(this).attr('src').replace(/\Grey/g, 'Red');
            $(this).attr('src', new_src);
        });

    }, 5000);

    var pdc = setInterval(function() { 
        var pdcVal = $('#pdc').text();
        $('#pdc').text(Math.round(parseInt(pdcVal) + 1));

     }, 8000); 

     var pac = setInterval(function() { 
        var pacVal = $('#pac').text();
        $('#pac').text(Math.round(parseInt(pacVal) + 1));

     }, 8000);      


    // ---- Form validation
    $("#submit").on( "click", function() {
        if (!$('#login_form input:text').val()) {
            $('#summary_msg').text('');
            $('#username_msg').text('Insert your user name');
        };
        if (!$('#login_form input:password').val()) {
            $('#summary_msg').text('');
            $('#password_msg').text('Insert your user password');
        };

        if ($('#login_form input:text').val() && $('#login_form input:password').val()){
            var username = 'test';
            var password = 'test';
            if ($('#login_form input:text').val() == username && $('#login_form input:password').val() == password){
                $('#username_msg').text('');
                $('#password_msg').text('');
                $('#summary_msg').text('');
                window.location.href = "inverter.html";
            }else {
                $('#username_msg').text('');
                $('#password_msg').text('');
                $('#summary_msg').text('User name and password is invalid');
            }


        };
    });


});

function checkSize(){
    if ($(".mediaCheck").css("float") == "none" ){
        $('.logoContainer').css('padding-top','25px');
        $('.logo').css('width','120px');
        $('.logoContainer h1').css('font-size','25px');
        $('.logoContainer p').css('font-size','15px');
        $('.sps').css({'width': '100%', 'margin-left': '-5px'});
        $('.loginForm').css({'padding-right': '0', 'padding-left': '0', 'padding-top':'5px', 'margin-left':'15px'});
        $('.form').css({'width': '100%', 'margin-left': '-5px', 'padding-top':'20px'});
        $('.b1').css('height','100%');
        $('.b2').css('height','100%');
        
        $('.inventerContainer').css('width','100%');
    }
}

