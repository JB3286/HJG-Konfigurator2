import {Stack} from "@fluentui/react/lib/Stack";
import {FormEvent, useState} from "react";
import {TextField} from "@fluentui/react/lib/TextField";
import {PrimaryButton} from "@fluentui/react/lib/Button";

export function Fliegengitter() {

    const [length, setLength] = useState<number>();

    function setLengthAndConvertToNumber(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const value = Number(e.currentTarget.value);
        if (isNaN(value)) {
            alert("Ihr Wert ist nicht valide");
        }
        setLength(value);
    }

    return <> <p>Fliegengitter</p>
        <Stack horizontal>
            <Stack.Item>
                <TextField type="text" label="Länge" onChange={setLengthAndConvertToNumber}/>
            </Stack.Item>
        </Stack>
        <Stack horizontal>
            <Stack.Item>
                <PrimaryButton text="Klick wen anders!" onClick={() => alert(length)}/>
            </Stack.Item>
        </Stack>
    </>
}