$(function(){

    'use strict';

    $('input[type=text]').focus(function(){
        $('.input-div.one').addClass('focus');
    }).blur(function(){
       
        if( $('input[type=text]').val() == ''){
            $('.input-div.one').removeClass('focus');
        }
        
    });

    $('input[type=password]').focus(function(){
        $('.input-div.two').addClass('focus');
    }).blur(function(){
       
        if( $('input[type=password]').val() == ''){
            $('.input-div.two').removeClass('focus');
        }
        
    });


});
