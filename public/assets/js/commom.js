/**
 * Created by ADMIN on 12/14/2016.
 */
$(document).ready(function(){
    $('body').css('display', 'block');
    /*$('#changeNavbarClass').on('click', function(){
        if ($('.navbar-default').length > 0) {
            $('.navbar').removeClass('navbar-default');
            $('.navbar').addClass('navbar-inverse');
        } else {
            $('.navbar').removeClass('navbar-inverse');
            $('.navbar').addClass('navbar-default');
        }
    });
    $('#togglePosition').on('click', function(){
        if ($('.radim-fixed').length > 0) {
            $('.navbar').removeClass('radim-fixed');
        } else {
            $('.navbar').addClass('radim-fixed');
        }
    });*/

//    for tool tip
    $('[data-toggle="tooltip"]').tooltip();

    //js for menu toggle show

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });
    initMenu();

    $(document).on('click', '.report-menu-container', function() {
        $("#report-menu").slideToggle("slow");
        console.log($("#report-menu"));
    });

    $('#arrow-effect').click( function(){
        $(this).find('i').toggleClass('glyphicon-chevron-right').toggleClass('glyphicon-chevron-down');
    });  


});

function bindFileBox(){    // for file style
    $("input[type=file]").filestyle({buttonBefore: true});
}

function initMenu() {
    /*$('#menu ul').hide();
    $('#menu ul').children('.current').parent().show();
    //$('#menu ul:first').show();
    $('#menu li a').click(
        function() {
            var checkElement = $(this).next();
            if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                return false;
            }
            if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#menu ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
                return false;
            }
        }
    );*/
}

