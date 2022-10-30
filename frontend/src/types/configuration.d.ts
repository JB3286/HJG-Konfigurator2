export type ConfigurationInputType = {
    INPUT_NUMBER(ConfigurationPropertyView): JSX.Element
    INPUT_STRING(ConfigurationPropertyView): JSX.Element
    DROPDOWN(ConfigurationPropertyView): JSX.Element
    IMAGE_SELECT(ConfigurationPropertyView): JSX.Element
}

export type ConfigurationProps = (ConfigurationPropertyView: ConfigurationPropertyView) => JSX.Element

export interface ConfigurationValue {
    value: string
    image: string | undefined
}

export interface ConfigurationProperty {
    id: string,
    name: string
    inputType: keyof ConfigurationInputType
    values: ConfigurationValue[]
    currentValue: string | undefined,
    unit: string | undefined,
}

export interface ConfigurationPropertyView extends ConfigurationProperty {
    onClick(id: string, value: string): void,
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