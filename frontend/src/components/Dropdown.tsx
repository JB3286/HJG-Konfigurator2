import {useMemo} from "react";
import {map} from "ramda";
import {ConfigurationPropertyView} from "../types/configuration";
import {Stack} from "@fluentui/react/lib/Stack";
import {Dropdown as FluentDropdown} from "@fluentui/react/lib/Dropdown";

export function Dropdown({name, values, onClick}: ConfigurationPropertyView) {
    const options = useMemo(() => map(({value}) => ({key: value, text: value}), values), [values]);
    return <Stack>
        <FluentDropdown
            placeholder="Select an option"
            label={name}
            options={options}
            onChange={(e, item) => onClick(item?.text || "")}
        />
    </Stack>
}