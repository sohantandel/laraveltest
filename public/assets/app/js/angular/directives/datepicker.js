app.directive('tiDatePicker', function () {
    return {
        replace: false,
        require: "ngModel",
        restrict: "A",
        link: function (scope, element, attr, ngModel) {
            var datePickerOpt = {
                'showOnFocus': false,
                'orientation': 'auto',
                'autoclose': true,
                'format': 'mm/dd/yyyy'
            };
            element.datepicker(datePickerOpt);
            $(element).unbind('click').bind('click', function () {
                element.datepicker('show');
            });
        }
    }
});