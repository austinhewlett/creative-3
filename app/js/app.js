/**
 * Created by austinh on 2/28/17.
 */


angular.module('AddressBook', [])
    .factory('contactFactory', [function () {
        var o = {
            contacts: [
                {
                    name: "Bilbo Baggins",
                    mobile: "(801) 375-5133",
                    email: "bilbo@the.shire",
                    url: "https://www.drupal.org/files/issues/default-avatar.png"
                }, {
                    name: "Frodo Baggins",
                    mobile: "(801) 377-8063",
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
                if (!$scope.url) {
                    $scope.url = "https://www.drupal.org/files/issues/default-avatar.png";
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
