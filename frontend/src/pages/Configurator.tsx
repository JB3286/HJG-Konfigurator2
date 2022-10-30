import {mergeStyleSets, Stack} from "@fluentui/react";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useConfiguration} from "./useConfiguration";
import {map, equals, find} from "ramda";

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


export function Configurator() {
    const {product} = useParams<{ product: string }>();
    const {configuration} = useConfiguration(product!);
    const [tabSet, setTabSet] = useState<string>()

    useEffect(() => {
        if (configuration) {
            setTabSet(configuration[0].name || "");
        }
    }, [configuration]);

    if (configuration) {
        return <>
            <div>
                <Stack horizontal className={style.root}>
                    {map(({name}) =>
                            <Stack.Item
                                key={name}
                                style={{fontWeight: equals(name, tabSet) ? "bold": "normal"}}
                                className={style.tabItem}
                                onClick={() => setTabSet(name)}
                            >
                                {name}
                            </Stack.Item>,
                        configuration)}
                </Stack>
                <Stack>
                    {find(conf => equals(conf.name, tabSet), configuration)?.name}
                </Stack>
            </div>
        </>
    }

    return <>Loading...</>
}