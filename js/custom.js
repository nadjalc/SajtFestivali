$(document).ready(function(){
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },6000);
    });
});
$(document).ready(function(){
    $('#exit').click(function(){
        $.get("exit.html", function(data){
            $("#exitDiv").html(data);
            $("#exitDiv").show();
            $('#wackenDiv').hide();
            $('#tomorrowDiv').hide();
            $('#ultraDiv').hide();
        });
        
    });
    $('#wacken').click(function(){
        $.get("wacken.html", function(data){
            $("#wackenDiv").html(data);
            $("#exitDiv").hide();
            $('#wackenDiv').show();
            $('#tomorrowDiv').hide();
            $('#ultraDiv').hide();
        });
    });
    $('#tomorrow').click(function(){
        $.get("tomorrowland.html", function(data){
            $("#tomorrowDiv").html(data);
            $("#exitDiv").hide();
            $('#wackenDiv').hide();
            $('#tomorrowDiv').show();
            $('#ultraDiv').hide();
        });
    });
    $('#ultra').click(function(){
        $.get("ultra.html", function(data){
            $("#ultraDiv").html(data);
            $("#exitDiv").hide();
            $('#wackenDiv').hide();
            $('#tomorrowDiv').hide();
            $('#ultraDiv').show();
        });
    });
});
