define(['./properties', 'text!./template.html'],
    function(properties, template) {
        return {
            definition: properties,
            paint: function($element) {
                //add your rendering code here
                $element.html("3D");
                //needed for export
                return qlik.Promise.resolve();
            },
            resize: function() {},
            template: template,
            definition: properties,
            dimportProperties: function() {},
            dshowRequirements: function() {},
            updateData: function() {}, //Feb 18'
            support: {
                snapshot: true,
                export: true,
                exportData: true
            },
            getExportRawDataOptions: function() {},
            controller: [],
            initialProperties: {
                version: 1.0,
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [{
                        qWidth: 2,
                        qHeight: 50
                    }]
                }
            },
            controller: ['$scope', '$element', function(scope, $element) {
                $element.html("3D");
            }]
        };
    });

/*define(["qlik"],
    function(qlik) {

        return {
            support: {
                snapshot: true,
                export: true,
                exportData: false
            },
            paint: function($element) {
                //add your rendering code here
                $element.html("3D");
                //needed for export
                return qlik.Promise.resolve();
            },
            resize: function($element, layout) {
                this.paint($element, layout);
            },
            initialProperties: {
                qHyperCubeDef: {
                    qDimensions: [], //the 
                    qMeasures: [],
                    qInitialDataFetch: [{
                        qWidth: 2,
                        qHeight: 50
                    }]
                }
            },
            updateData: function() {}, //Feb 18'
            //definition: properties,
            dimportProperties: function() {},
            dshowRequirements: function() {},
            support: {
                snapshot: true,
                export: true,
                exportData: true
            },
            getExportRawDataOptions: function() {},
            controller: []
                //template: HTMLtemplate,
        };

	});
*/