app.directive('tiStatusMenu', function() {
    return {
        replace:false,
        link: function(scope, element, attr, controller) {

        },
        templateUrl: function(element, attr) {
            if(attr.type == 'bookit') {
                return '../assets/app/html/directives/ti-bookit-status-menu.html?v=0.0.1'
            } else {
                return '../assets/app/html/directives/ti-copyit-status-menu.html?v=0.0.1'
            }
        }
    };
});