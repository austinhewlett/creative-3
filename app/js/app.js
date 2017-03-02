/**
 * Created by austinh on 2/28/17.
 */


angular.module('AddressBook', [])
    .factory('contactFactory', [function () {
        var o = {
            contacts: [
                {
                    name: "Bilbo Baggins",
                    mobile: "", // TODO: VALIDATOR ON MOBILE
                    email: "bilbo@the.shire",
                    url: "https://www.drupal.org/files/issues/default-avatar.png" // TODO: VALIDATOR ON IMAGE URL
                }, {
                    name: "Frodo Baggins",
                    mobile: "",
                    email: "frodo@ofthe.shire",
                    url: "https://m.popkey.co/ee1ce5/xq1RX.gif"
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
            $scope.query = '';

            $scope.addContact = function () {
                if ($scope.name === '') {
                    return;
                }
                $scope.contacts.push({
                    name: $scope.name,
                    mobile: $scope.mobile,
                    email: $scope.email,
                    url: $scope.url
                });

                $scope.name = '';
                $scope.mobile = '';
                $scope.email = '';
                $scope.url = '';
            }
        }
    ]);
