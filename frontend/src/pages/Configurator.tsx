import {mergeStyleSets, Stack} from "@fluentui/react";
import {useParams} from "react-router";
import {useConfiguration} from "./useConfiguration";
import {equals, map} from "ramda";
import {Configuration, ConfigurationInputType, ConfigurationProps} from "../types/configuration";
import {Input} from "../components/Input";
import {Dropdown} from "../components/Dropdown";
import {ImageSelect} from "../components/ImageSelect";

const style = mergeStyleSets({
        root: {
            alignItems: "center",
            justifyContent: "space-around",
        },
        tabItem: {
            cursor: "pointer",
            justifyContent: "left",
        }
    }
)

export const CONFIGURATOR_SETTINGS: ConfigurationInputType = {
    INPUT_NUMBER: Input,
    INPUT_STRING: Input,
    DROPDOWN: Dropdown,
    IMAGE_SELECT: ImageSelect,
}

export function ConfigurationField({
                                       configuration,
                                       onClick
                                   }: { configuration: Configuration | undefined, onClick: (id: string, value: string) => void }) {
    if (configuration) {
        return <>
            {map((properties) => {
                const Component: ConfigurationProps = CONFIGURATOR_SETTINGS[properties.inputType];
                return <Component {...{...properties, onClick, key: properties.id}} />
            }, configuration.properties)}
        </>
    }
    throw new Error("Configuration undefined")
}

export function Configurator() {
    const {product} = useParams<{ product: string }>();
    const {configuration, tabSet, setTabSet, currentConfiguration, onValue} = useConfiguration(product!);

    if (configuration && currentConfiguration) {
        return <>
            <div>
                <Stack horizontal className={style.root}>
                    {map(({name}) =>
                            <Stack.Item
                                key={name}
                                style={{fontWeight: equals(name, tabSet) ? "bold" : "normal"}}
                                className={style.tabItem}
                                onClick={() => setTabSet(name)}
                            >
                                {name}
                            </Stack.Item>,
                        configuration)}
                </Stack>
                <Stack>
                    <ConfigurationField configuration={currentConfiguration} onClick={onValue}/>
                </Stack>
            </div>
        </>
    }

    return <>Loading...</>
}