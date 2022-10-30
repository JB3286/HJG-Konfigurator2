import {mergeStyleSets, Stack} from "@fluentui/react";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useConfiguration} from "./useConfiguration";
import {equals, find, map} from "ramda";
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

export function ConfigurationField({configuration}: { configuration: Configuration | undefined }) {
    if (configuration) {
        return <>
            {map((properties) => {
                const Component: ConfigurationProps = CONFIGURATOR_SETTINGS[properties.inputType];
                return <Component {...{...properties, onClick: (value: string) => console.log(value)}} />
            }, configuration.properties)}
        </>
    }
    throw new Error("Configuration undefined")
}

export function Configurator() {
    const {product} = useParams<{ product: string }>();
    const {configuration} = useConfiguration(product!);
    const [tabSet, setTabSet] = useState<string>()

    useEffect(() => {
        if (configuration) {
            setTabSet(configuration[0].name || "");
        }
    }, [configuration]);
    console.log(configuration)
    if (configuration) {
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
                    <ConfigurationField configuration={find(conf => equals(conf.name, tabSet), configuration)}/>
                </Stack>
            </div>
        </>
    }

    return <>Loading...</>
}
