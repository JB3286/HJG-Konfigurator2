import {IStackTokens, Stack} from "@fluentui/react/lib/Stack";
import {FormEvent, useState} from "react";
import {TextField} from "@fluentui/react/lib/TextField";
import {PrimaryButton} from "@fluentui/react/lib/Button";
import {ChoiceGroup, IChoiceGroupOption, mergeStyles, mergeStyleSets, MessageBar} from "@fluentui/react";

export function Insektenschutz() {

    const style = mergeStyleSets({
       inputField:{
           backgroundColor: "lightgrey",

       }
    })

    const [length, setLength] = useState<number>();
    const [width, setWidth] = useState<number>();
    const [depth, setDepth] = useState<number>();
    const [asRoll, setAsRoll] = useState<boolean>();

    const stackToken: IStackTokens = {childrenGap: 10};

    const options: IChoiceGroupOption[] = [
        {key: 'A', text: 'fest in den Rahmen verbaut'},
        {key: 'B', text: 'als Rollo'},
    ]



    function setLengthAndConvertToNumber(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const length = Number(e.currentTarget);
        return setLength(length);
    }

    function setWidthAndConvertToNumber(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const width = Number(e.currentTarget);
        return setWidth(width);
    }

    function setDepthAndConvertToNumber(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const depth = Number(e.currentTarget);
        return setDepth(depth);
    }

    function showAllInputs (e: Event){

    }

    return <> <h4>Insektenschutz</h4>
        <MessageBar>
            Konfigurieren Sie Sich ihren individuellen Insektenschutz!!!
        </MessageBar>
        <Stack tokens={stackToken} className={style.inputField}>
            <Stack.Item align="baseline">
                <TextField name="length" type="number" step="any" label="Länge" onChange={setLengthAndConvertToNumber}
                           placeholder="cm" required/>
            </Stack.Item>
            <Stack.Item align="baseline">
                <TextField name="width" type="number" step="any" label="Breite" onChange={setWidthAndConvertToNumber}
                           placeholder="cm" required/>
            </Stack.Item>
            <Stack.Item align="baseline">
                <TextField name="depth" type="number" step="any" label="Tiefe" onChange={setDepthAndConvertToNumber}
                           placeholder="cm" required/>
            </Stack.Item>
            <Stack.Item>
                <ChoiceGroup options={options} defaultSelectedKey={'A'} label="Ausführung" required/>
            </Stack.Item>
            <Stack.Item>
                <PrimaryButton text="Hinzufügen" onClick={() => alert(length)}/>
            </Stack.Item>
        </Stack>

    </>
}