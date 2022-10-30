import {useEffect, useMemo, useState} from "react";
import {Configuration} from "../types/configuration";
import axios from "axios";
import {equals, replace, findIndex, update} from "ramda";

export function useConfiguration(product: string) {
    const [tabSet, setTabSet] = useState<string>(product!);
    const [configuration, setConfiguration] = useState<Configuration[]>();
    const currentIdx = useMemo(() => findIndex(conf => equals(conf.name.toLowerCase(), tabSet.toLowerCase()), configuration || []), [configuration, tabSet]);

    useEffect(() => {
        axios.get<Configuration[]>(`/${product.toLowerCase()}.json`)
            .then(({data}) => setConfiguration(data));
    }, []);

    function onValue(id: string, value: string) {
        if(configuration && configuration[currentIdx]) {
            const currentPropertyIdx = findIndex(prop => equals(prop.id,id), configuration[currentIdx].properties);
            setConfiguration(
                update(currentIdx, {
                ...configuration[currentIdx],
                    properties: update(currentPropertyIdx, {...configuration[currentIdx].properties[currentPropertyIdx], currentValue: value}, configuration[currentIdx].properties)
            }, configuration)
            );
        }
        throw new Error("Configuration undefined");
    }


    return {
        configuration,
        tabSet,
        setTabSet,
        currentConfiguration: configuration ? configuration[currentIdx] : undefined,
        onValue
    }
}