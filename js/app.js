/**
 * Created by austinh on 2/28/17.
 */


angular.module('AddressBook', [])
    .factory('contactFactory', [function () {
        var o = {
            contacts: [
                {
                    name: "Austin",
                    mobile: "111-222-4444", // TODO: VALIDATOR ON MOBILE
                    email: "m3@byu.edu",
                    image_url: "http" // TODO: VALIDATOR ON IMAGE URL

                }
            ]
        };
        return o;
    }])
    .controller('MainCtrl', [
        '$scope',
        'contactFactory',
        function ($scope, contactFactory) {
            $scope.contacts = contactFactory.contacts;
        }
    ]);