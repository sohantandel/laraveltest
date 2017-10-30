app.factory('resUser', function ($resource) {
    var route = $resource('users', {}, {
        getUserJson: {
            method: 'GET',
            url: 'getUserJson',
            params: {}
        },
        createUser: {
            method: 'POST',
            url: '',
            params: {}
        },
        updateUser: {
            method: 'PATCH',
            url: 'users/:id',
            params: {
                id: '@id'
            }
        },
        getUser: {
            method: 'GET',
            url: 'users/:id',
            params: {
                id: '@id'
            }
        },
        updateSettings: {
            method: 'POST',
            url: 'updateSettings',
            params: {}
        },
        destroyUser: {
            method: 'DELETE',
            url: 'users/:id',
            params: {
                id: '@id'
            }
        },
        removeUserProfile: {
            method: 'POST',
            url: 'removeUserProfile',
            params: {}
        }
    });

    return route;
});