/*
 *  Project: cli
 *  Author: DarkCthulhu
 *  License: MIT
 */

$(function() {
    //document ready
    $('#interactive').focus();
    var cliInstance = $('#interactive').setupCli({
        resultDiv: "result",
        prompt: "~#&nbsp;",
        cssClass: "cli"
    });
    
    cliInstance.do_stuff();
    
    //body click handler: any click brings cli into focus
    $('html').click(function(e){
        $('#interactive').focus();
    });
    
    //execute intro
    $(function(){
        $('#interactive').text("intro");
        var e = jQuery.Event( 'keydown', { keyCode: 13 } );
        $('#interactive').trigger(e);
    });
});

function showInput(){
    $('#input').show();
}
function hideInput(){
    $('#input').hide();
}
