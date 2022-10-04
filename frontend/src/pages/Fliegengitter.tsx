import {Stack, IStackTokens} from "@fluentui/react/lib/Stack";
import {FormEvent, useState} from "react";
import {TextField} from "@fluentui/react/lib/TextField";
import {PrimaryButton} from "@fluentui/react/lib/Button";
import {MessageBar} from "@fluentui/react";

export function Fliegengitter() {

    const [length, setLength] = useState<number>();
    const [width, setWidth] = useState<number>();
    const [depth, setDepth] = useState<number>();

    interface IExampleProps {
        resetChoice?: () => void;
    }

    const stacktoken : IStackTokens = {childrenGap: 10};

    function setLengthAndConvertToNumber(e: FormEvent<HTMLInputElement|HTMLTextAreaElement>) {
        const length = Number(e.currentTarget);
        return setLength(length);
    }

    function setWidthAndConvertToNumber(e: FormEvent<HTMLInputElement|HTMLTextAreaElement>){
        const width = Number(e.currentTarget);
        return setWidth(width);
    }

    function setDepthAndConvertToNumber(e: FormEvent<HTMLInputElement|HTMLTextAreaElement>){
        const depth = Number(e.currentTarget);
        return setDepth(depth);
    }

    return <> <p>Fliegengitter</p>

        <MessageBar>
            Konfigurieren Sie Sich ihren individuellen Insektenschutz!!!
        </MessageBar>
            <Stack tokens={stacktoken}>
            <Stack.Item align="baseline">
                <TextField name="length" type="number" step="any" label="Länge" onChange={setLengthAndConvertToNumber}  placeholder="cm" required />
            </Stack.Item>
            <Stack.Item align="baseline">
                <TextField name="width" type="number" step="any" label="Breite" onChange={setWidthAndConvertToNumber} placeholder="cm" required/>
            </Stack.Item>
            <Stack.Item align="baseline">
                <TextField name="depth" type="number" step="any" label="Tiefe" onChange={setDepthAndConvertToNumber} placeholder="cm" required/>
            </Stack.Item>
                <Stack.Item>
                    <PrimaryButton text="Klick wen anders!" onClick={() => alert(length)}/>
                </Stack.Item>
            </Stack>

    </>
}