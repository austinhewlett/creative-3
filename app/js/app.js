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
                    url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjLsbn6obbSAhUS22MKHSs1CAYQjRwIBw&url=http%3A%2F%2Fpopkey.co%2Fm%2Fxq1RX-elijah%2Bwood-lotr-lord%2Bof%2Bthe%2Brings&bvm=bv.148441817,d.cGc&psig=AFQjCNEghak7-3DS3UiX5fVQrK98IC8kfQ&ust=1488490651533952"
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

            $scope.addContact = function (contactForm) {
                if ($scope.name === '') {
                    return;
                }
                if (!isValid($scope.name) ||  !isValid($scope.mobile) || !isValid($scope.email) || !isValid($scope.url)) {
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

function isValid(formElement){
    return formElement.$valid;
}