$(function(){

    'use strict';

    $('input[type=text]').focus(function(){
        $('.input-div.one').addClass('focus');
    }).blur(function(){
        $('.input-div.one').removeClass('focus');
    });

    $('input[type=password]').focus(function(){
        $('.input-div.two').addClass('focus');
    }).blur(function(){
        $('.input-div.two').removeClass('focus');
    });


});
