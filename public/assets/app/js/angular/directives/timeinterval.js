app.directive('tiTimeInterval', ['timeFFilter', function (timeF) {
    return {
        replace: false,
        require: "ngModel",
        restrict: "A",
        link: function (scope, element, attr, ngModel) {
            ngModel.$formatters.push(function (value) {
                if (value != undefined && value !== '' && value >= 0) {
                    return getFormattedTime(value, 'hhh:mmm');
                }
                return '';
            });

            function getNumber(value) {
                return (isNaN(parseInt(value)) ? 0 : parseInt(value));
            }

            function getFormattedTime(value, format) {
                return timeF(value, 'mm', format, true, true);
            }

            // NOTE: It is important to use debounce with this directive, in order to provide a pause to be below mentioned parser function.
            ngModel.$parsers.push(function (value) {
                var duration, time;
                value = value.toString();
                var occ = (value.match(/:/g) || []).length;
                if (occ == 2) {
                    time = value.split(':');
                    if (time.length > 1) {
                        duration = (getNumber(time[0]) * 60 * 24) + (getNumber(time[1]) * 60) + getNumber(time[2]);
                    }
                } else if (occ == 1) {
                    time = value.split(':');
                    if (time.length > 1) {
                        duration = (getNumber(time[0]) * 60) + getNumber(time[1]);
                    }
                } else {
                    duration = getNumber(value);
                    if (duration < 0) {
                        return '';
                    }
                }
                duration = Math.round(duration / 5) * 5;

                ngModel.$setViewValue(getFormattedTime(duration, 'hhh:mmm'));
                ngModel.$render(); // update input value in the scope

                return duration;
            });
        }
    }
}]);