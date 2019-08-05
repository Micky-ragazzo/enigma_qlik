define([],
    function() {
        return {
            type: "items",
            component: "accordion",
            items: {
                dimensions: {
                    uses: "dimensions"
                },
                measures: {
                    uses: "measures"
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
        }
    });