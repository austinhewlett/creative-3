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
                    url: "https://www.drupal.org/files/issues/default-avatar.png" // TODO: VALIDATOR ON IMAGE URL

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

            $scope.addContact = function () {
                if ($scope.name === '') {
                    return;
                }
                $scope.contacts.push({
                    name: name,
                    mobile: mobile,
                    email: email,
                    url: url
                });
            }
        }
    ]);