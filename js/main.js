angular.module('app', ['ui.bootstrap']).controller('handleController', ['$scope',
    function($scope) {
        Parse.initialize("fe50rfKZvPJARdcqFrDRRs77qaudvQGPU5JyMd0L", "Er5TBVwLJAOuSOaL6kjslLZTgVD6pSzNqWGGcEAe");
        $scope.Umzug = {
            Dienstleistungen: {
                Einpacken: "NEIN",
                Abbau: "NEIN",
                Transport: "JA",
                Aufbau: "NEIN",
                Auspacken: "NEIN"
            }
        };

        $scope.create = function(Umzug) {
            Umzug.site = "pickito.de";
            Umzug.subject = "Neuer Umzug";
            Umzug.sender = "Jens Laufer <jens.laufer@pickito.de>";

            Parse.Cloud.run("handle", Umzug, {
                success: function(object) {
                    $('#response').html('Email sent!').addClass('success').fadeIn('fast');
                },

                error: function(object, error) {
                    console.log(error);
                    $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
                }
            });
        }
    }
]);
