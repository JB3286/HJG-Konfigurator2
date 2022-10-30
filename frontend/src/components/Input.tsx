import {ConfigurationPropertyView} from "../types/configuration";
import {Stack} from "@fluentui/react/lib/Stack";
import {TextField} from "@fluentui/react/lib/TextField";

export function Input({id, name, currentValue, onClick, unit, inputType}: ConfigurationPropertyView) {
    return <Stack.Item align="baseline">
        <TextField
            name="depth"
            type={inputType === "INPUT_NUMBER" ? "NUMBER" : "TEXT"}
            step="any"
            label={name}
            onBlur={event => onClick(id, event.currentTarget.value)}
            placeholder={unit ? unit : ""}
            value={currentValue}
            required
        />
    </Stack.Item>
}