import {ConfigurationPropertyView} from "../types/configuration";
import {Stack} from "@fluentui/react/lib/Stack";
import {TextField} from "@fluentui/react/lib/TextField";

export function Input({name, onClick, unit, inputType}: ConfigurationPropertyView) {
    return <Stack.Item align="baseline">
        <TextField
            name="depth"
            type={inputType === "INPUT_NUMBER" ? "NUMBER" : "TEXT"}
            step="any"
            label={name}
            onChange={event => onClick(event.currentTarget.value)}
            placeholder={unit ? unit : ""}
            required
        />
    </Stack.Item>
}