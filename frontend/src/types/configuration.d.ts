export type ConfigurationInputType = "INPUT_NUMBER" | "INPUT_STRING" | "DROPDOWN" | "IMAGE_SELECT"

export interface ConfigurationValue {
    value: string
    image: string | undefined
}

export interface ConfigurationProperty {
    name: string
    inputType: ConfigurationInputType
    values: ConfigurationValue[]
    unit: string | undefined
}

export interface ConfigurationRuleSet {
    condition: undefined | string
    rule: string
}

export interface ConfigurationRule {
    name: string,
    set: ConfigurationRuleSet[]
}

export interface Configuration {
    name: string,
    properties: ConfigurationProperty[],
    rules: ConfigurationRule[]
}