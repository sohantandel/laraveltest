/* http://stackoverflow.com/questions/24831323/angularjs-constants - to update */
angular.module('ngNotifyProvider', []).provider('ngNotifyProvider', [function () {
    this.$get = [function () {
        return {
            unsavedNotification: function () {
                return "Are you sure you want to navigate away from this record? \n This form contains uncommitted data.";
            },
            reloadConfirmation: function () {
                return 'Do you want to try again?';
            },
            editNotify: function () {
                getPnotifySuccess('Record Updated Successfully');
            },
            addNotify: function () {
                getPnotifySuccess('Record Added Successfully');
            },
            deleteNotify: function () {
                getPnotifySuccess('Record Deleted Successfully');
            },
            errorNotify: function (errors, containerid) {
                var error = '<ul>';
                $.each(errors, function (key, value) {
                    if (containerid) {
                        var errElement = key;
                        if ((key.indexOf(".") > -1)) {
                            var dataArray = key.split('.');
                            var inputname = dataArray[2];
                            var id = dataArray[1];
                            errElement = inputname + '_' + id;
                        }
                        if ($('#' + containerid + ' [name=' + errElement + ']').length > 0) {
                            $('#' + containerid + ' [name=' + errElement + ']').parents('.form-group').addClass('has-error');
                        }
                    } else {
                        var dataArray = key.split('.');
                        var inputname = dataArray[0];
                        $('[name=' + inputname + ']').parents('.form-group').addClass('has-error');
                    }
                    error += '<li>' + value + '</li>';
                });
                error += '</ul>';
                getPnotifyError(error);
            },
            customErrorNotify: function (message) {
                getPnotifyError(message);
            },
            customSuccessNotify: function (message) {
                getPnotifySuccess(message);
            },
            customSuccessNotify2: function (message) {
                getPnotifySuccess(message);
            },
            removeNotify: function () {
                PNotify.removeAll();
            },
            getreadyNotification: function (action) {
                readyNotification(action);
            },
            getshowNotification: function () {
                showNotification();
            }
        };
    }];
}]);