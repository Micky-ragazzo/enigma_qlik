define([
        './properties',
        './initialproperties',
        'text!./template.html'
    ],
    function(props, initProps, ngTemplate) {
        'use strict';

        return {
            definition: props,
            initialProperties: initProps,
            snapshot: { canTakeSnapshot: true },
            template: ngTemplate,
            controller: ['$scope', function($scope) {
                $scope.myTitle = 'This is my AngularJS table';
            }]
        };
    });