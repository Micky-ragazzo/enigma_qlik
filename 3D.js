define(["./properties", "qlik", "text!./template.html"],
    function(properties, qlik, template) {

        return {
            definition: properties,
            template: template,
            initialProperties: {
                version: 1.0,
                qHyperCubeDef: { //hypercube can contain both dimensions and measures. If selections are applied to a hypercube, only the selected values are displayed.
                    qDimensions: [],
                    qMeasures: [],
                    qInterColumnSortOrder: [1, 0],
                    qInitialDataFetch: [{ //set at  point as it defines the size of the underlying data that the extension retrieves from the Qlik Engine.
                        qWidth: 2,
                        qHeight: 50
                    }]
                }
            },
            support: {
                snapshot: true,
                export: true,
                exportData: false
            },
            paint: function() {
                return qlik.Promise.resolve();
            },
            controller: ['$scope', function($scope) { //controller and template are the standard AngularJS components required to render an extension using AngularJS.
                //add your rendering code here
                $scope.firstName = "John";
                $scope.lastName = "Doe";
                console.log($scope.html);
            }]
        };

    });