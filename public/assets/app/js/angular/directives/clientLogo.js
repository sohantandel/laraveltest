app.directive('tiClientLogo', ['ngNotifyProvider',function (notify) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('change', function  (evt) {
                scope.ready =false;
                var files = evt.target.files;
                var reader = new FileReader();
                reader.onload = function (e) {
                    var arrayBufferView = new Uint8Array(e.target.result);
                    var blob = new Blob( [ arrayBufferView ]);
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL( blob );
                    if(attrs.logotype == 'small'){
                        scope.newClient.logoSmallUrl = imageUrl;
                        $('#logoSmallContainer')
                            .attr('src', imageUrl );
                    }else{
                        scope.newClient.logoLargeUrl = imageUrl;
                        $('#logoLargeContainer')
                            .attr('src', imageUrl );
                    }
                    scope.ready =true;
                };
                scope.ready =true;
                reader.readAsArrayBuffer(files[0]);
            });
        }
    };
}]);