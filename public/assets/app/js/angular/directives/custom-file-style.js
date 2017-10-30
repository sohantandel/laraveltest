app.directive('tiFileStyle', function () {
    return {
        replace: false,
        restrict: "A",
        link: function (scope, element, attr, ngModel) {
            element.filestyle({buttonBefore: true});
        }
    }
});