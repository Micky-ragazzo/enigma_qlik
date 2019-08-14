define([],
        function() {
            return {
                type: "items",
                component: "accordion",
                items: {
                    dimensions: {
                        uses: "dimensions",
                        min: 1,
                        max: 1
                    },
                    measures: {
                        uses: "measures",
                        min: 1,
                        max: 1
                    },
                    sorting: {
                        uses: "sorting"
                    },
                    addons: {
                        uses: "addons"
                    },
                    settings: {
                        uses: "settings",
                        items: {
                            barColor: {
                                label: "Bar Color",
                                component: "color-picker",
                                type: "object",
                                dualOutput: true,
                                schemaIgnore: true,
                                ref: "barColor",
                                defaultValue: {
                                    index: -1,
                                    color: "#657dbc"
                                },
                                show: function(layout) {
                                    return true
                                },
                                horizontalReference: {
                                    type: "array",
                                    ref: "listItems",
                                    label: "Horizontal Reference Line",
                                    itemTitleRef: "reflabel",
                                    allowAdd: true,
                                    allowRemove: true,
                                    addTranslation: "Add Reference Line",
                                    items: {
                                        label: {
                                            type: "string",
                                            ref: "reflabel",
                                            label: "Reference Line Label",
                                            expression: "optional"
                                        },
                                        refvalue: {
                                            label: "Reference Value",
                                            type: "number",
                                            ref: "refvalue"
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
            });