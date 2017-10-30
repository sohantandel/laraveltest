var stack_topright = {"dir1": "down", "dir2": "left", "firstpos1": 100, "firstpos2": 50};
var stack_bottomright = {"dir1": "up", "dir2": "left", "firstpos1": 50, "firstpos2": 50};

// To create notification for validation error message
function getPnotifySuccess(message) {
    PNotify.removeAll();
    new PNotify({
        title: 'Success!',
        text: message,
        type: 'success',
        animate_speed: 'fast',
        delay: 2000,
        animation: {
            effect_in: 'show',
            effect_out: 'slide'
        },
        buttons: {
            sticker: false,
            close: true
        },
        history: false,
        /*addclass: "stack-topright",
         stack: stack_topright*/
        addclass: "stack-bottomright",
        stack: stack_bottomright
    });
    closePnotify();
}


// To create notification for seuccess message
function getPnotifyError(errorText) {
    PNotify.removeAll();
    new PNotify({
        title: 'Attention!',
        text: errorText,
        type: 'error',
        animate_speed: 'fast',
        buttons: {
            sticker: false,
            close: true
        },
        text_escape: false,
        addclass: "stack-topright",
        stack: stack_topright
    });
    closePnotify();
}

function removeModalPnotify() {
    $(document).on('hide.bs.modal', '#myModal', function () {
        PNotify.removeAll();
    });
}

function closePnotify() {
    $('.ui-pnotify-closer').click(function () {
        $('.ui-pnotify').remove();
    });
}

function readyNotification(action) {
    // X=1 : Insert, X=2 : Update, X=3 : Delete
    document.cookie = "action=" + action + "; ";
}

function showNotification() {
        var x = getCookie("action");
        // X=1 : Insert, X=2 : Update, X=3 : Delete, X=4 Denied for delete
        if (x != "") {
            if (x == 1) {
                message = 'Record Added Successfully';
                getPnotifySuccess(message);
            } else if (x == 2) {
                message = 'Record Updated Successfully';
                getPnotifySuccess(message);
            } else if (x == 3) {
                message = 'Record Deleted Successfully';
                getPnotifySuccess(message);
            } else if (x == 4) {
                message = 'Sorry, you cannot delete this record. It is already in use';
                getPnotifyError(message);
            }
            closePnotify();
            // remove cookie
            document.cookie = "action=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        }

}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function validateClientId() {
    alert('Please select a Client in order to access this interface.');
}

$(function () {
    showNotification();
    closePnotify();
});

$(document).ready(function() {

});