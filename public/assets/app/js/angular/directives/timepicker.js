app.directive('tiTimePicker', function () {
    return {
        replace: false,
        require: "ngModel",
        restrict: "A",
        link: function (scope, element, attr, ngModel) {
            element.ptTimeSelect({
                zIndex: 100000,
                onClose: function (input) {
                    ngModel.$setViewValue(input.val());
                    ngModel.$render();
                }
            });
            //Prevent data removal of date inputs while using popup
            $('#ptTimeSelectCntr').unbind('click').bind('click', function () {
                return false;
            });
        }
    }
});