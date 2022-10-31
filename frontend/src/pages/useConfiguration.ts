import {useEffect, useMemo, useState} from "react";
import {Configuration} from "../types/configuration";
import axios from "axios";
import {equals, reduce, findIndex, update, map, replace, flatten} from "ramda";

export function useConfiguration(product: string) {
    const [tabSet, setTabSet] = useState<string>(product!);
    const [configuration, setConfiguration] = useState<Configuration[]>();
    const currentIdx = useMemo(() => findIndex(conf => equals(conf.name.toLowerCase(), tabSet.toLowerCase()), configuration || []), [configuration, tabSet]);
    const evaluatedRules = useMemo(() => {
        if (configuration && configuration[currentIdx]) {
            const currentValues = reduce((acc, ele)=>
                    ({...acc, [ele.name]: ele.currentValue ? ele.currentValue : "0"}),
                {}, configuration[currentIdx].properties);
            return flatten(map(({set, name}) => map(ruleSet => ({rule: evalRule(ruleSet.rule, currentValues), name}), set), configuration[currentIdx].rules))
        }
        return []
    }, [configuration]);

    useEffect(() => {
        axios.get<Configuration[]>(`/${product.toLowerCase()}.json`)
            .then(({data}) => setConfiguration(data));
    }, []);

    function evalRule(rule: string, evaluatedRules: {[key: string]: string}) {
        const vals = map(rule => rule[1], Array.from(rule.matchAll(/\{([\w\d_]+)\}/g)));
        const replacedRule = reduce((acc, name) => {
            if(evaluatedRules[name]) {
                return replace(new RegExp(`\{${name}\}`), evaluatedRules[name], acc)
            }
            throw new Error("Could not eval configuration rule: " + rule)
        }, rule, vals)

        return eval(replacedRule);
    }

    function onValue(id: string, value: string) {
        if (configuration && configuration[currentIdx]) {
            const currentConfiguration = configuration[currentIdx];
            const currentPropertyIdx = findIndex(prop => equals(prop.id, id), currentConfiguration.properties);
            const properties = update(currentPropertyIdx, {...currentConfiguration.properties[currentPropertyIdx], currentValue: value}, currentConfiguration.properties);
            return setConfiguration(update(currentIdx, {...currentConfiguration, properties},configuration));
        }
        throw new Error("Configuration undefined");
    }


    return {
        configuration,
        tabSet,
        setTabSet,
        currentConfiguration: configuration ? configuration[currentIdx] : undefined,
        onValue,
        evaluatedRules
    }
}