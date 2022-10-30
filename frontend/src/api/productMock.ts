import {Configuration} from "../types/configuration";

export const configuration = {
    name: "Fliegengitter",
    properties: {
        height: "40",
        width: "40",
        depth: "4",
        motor: true,
        color: "green",
    }
}

export const productMock: Configuration[] = [{
    name: "Fliegengitter",
    properties: [
        {
            name: "width",
            inputType: "INPUT_NUMBER",
            values: [],
            unit: "cm",
        },
        {
            name: "height",
            inputType: "INPUT_NUMBER",
            values: [],
            unit: "cm",
        },
        {
            name: "depth",
            inputType: "INPUT_NUMBER",
            values: [],
            unit: "cm",
        },
        {
            name: "motor",
            inputType: "DROPDOWN",
            values: [{
                value: "1",
                image: undefined,
            }, {
                value: "0",
                image: undefined,
            }],
            unit: undefined,
        }
    ],
    rules: [{
        name: "m2",
        set:
            [{
                condition: undefined,
                rule: "({c.height}+{c.width})"
            }]
    },
        {
            name: "Motor",
            set: [{
                condition: "{c.motor=1}",
                rule: "1"
            }]
        },
        {
            name: "Color",
            set: [
                {
                    condition: "{c.color}='yellow",
                    rule: "({c.height}+{c.width})"
                },
                {
                    condition: "{c.color}='brown",
                    rule: "({c.height}+{c.width})"
                }
            ]
        }
    ]
}]