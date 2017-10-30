'use strict';
$(document).ready(function(){

    $(document).on('click', '#menu-toggle-2', function(e) {
        var toggled2 = $(this).closest('#wrapper').hasClass('toggled-2');
        if (!toggled2) {
            $(".report-menu").hide();
            $('.report-menu-container .glyphicon-chevron-right').removeClass('glyphicon-chevron-down');
        }
        $("#wrapper").toggleClass("toggled-2");
        e.preventDefault();
    });

    $(document).on('click', '.report-menu-container', function() {
        var toggled2 = $(this).closest('#wrapper').hasClass('toggled-2');
        $(this).find('.glyphicon-chevron-right').toggleClass('glyphicon-chevron-down');
        if (toggled2) {
            $("#report-menu").toggle();
        } else {
            $("#report-menu").slideToggle("slow");
        }
    });

    $(document).on('click', '.right_container', function(e) {
        var toggled2 = $('#wrapper').hasClass('toggled-2');
        if (toggled2) {
           $("#report-menu").hide();
        }
    });

});

function bindFileBox(){    // for file style
    $("input[type=file]").filestyle({buttonBefore: true});
}