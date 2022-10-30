import {Stack} from "@fluentui/react/lib/Stack";
import {TextField} from "@fluentui/react/lib/TextField";
import {PrimaryButton} from "@fluentui/react/lib/Button";
import {ChoiceGroup, MessageBar} from "@fluentui/react";

export function Insektenschutz() {
    return <><h4>Insektenschutz</h4>
        <MessageBar>
            <p>Konfigurieren Sie Sich ihren individuellen Insektenschutz!!!</p>
        </MessageBar>
        <Stack >
            <Stack.Item align="baseline">
                <TextField name="length" type="number" step="any" label="Länge" onChange={() => null}
                           placeholder="cm" required/>
            </Stack.Item>
            <Stack.Item align="baseline">
                <TextField name="width" type="number" step="any" label="Breite" onChange={() => null}
                           placeholder="cm" required/>
            </Stack.Item>
            <Stack.Item align="baseline">
                <TextField name="depth" type="number" step="any" label="Tiefe" onChange={() => null}
                           placeholder="cm" required/>
            </Stack.Item>
        </Stack>
        <Stack >
            <Stack.Item>
                <ChoiceGroup defaultSelectedKey={'A'} label="Ausführung" required defaultValue={'A'}/>
            </Stack.Item>
            <Stack.Item>
                <PrimaryButton text="Hinzufügen" onClick={()=> {alert(length)}}/>
            </Stack.Item>
        </Stack>
    </>
}