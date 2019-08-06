define(["qlik", "text!./template.html", "./node_modules/jquery/dist/jquery.js", "css!./3D.css"],
    function(qlik, template) {

        return {
            template: template,
            support: {
                snapshot: true,
                export: true,
                exportData: false
            },
            paint: function() {
                return qlik.Promise.resolve();
            },
            controller: ['$scope', function($scope) {
                //add your rendering code here
                $scope.name = "MA";
            }]
        };

    });