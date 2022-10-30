import {IStackTokens, Stack} from "@fluentui/react/lib/Stack";
import {FormEvent, useState} from "react";
import {TextField} from "@fluentui/react/lib/TextField";
import {PrimaryButton} from "@fluentui/react/lib/Button";
import {ChoiceGroup, IChoiceGroupOption, mergeStyleSets, MessageBar} from "@fluentui/react";

export function Insektenschutz() {

    const style = mergeStyleSets({
        inputField: {
        },
        inputWrapper:{
            width: "100vh",
            display: "flex",
            flexDirection:"row",
        },
        message:{
            width: "75vh",
            justifyContent: "center",
        },
        detailList:{
            width:"40vh",
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


    function setLengthAndConvertToNumber(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>):void {
        const length = Number(e.currentTarget);
        setLength(length);
    }

    function setWidthAndConvertToNumber(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>):void {
        const width = Number(e.currentTarget);
        setWidth(width);
    }

    function setDepthAndConvertToNumber(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>):void {
        const depth = Number(e.currentTarget);
        setDepth(depth);
    }

    function setAsRollOrNot(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>):void{

        setAsRoll(asRoll);
    }

    function showAllInputs(e: FormEvent) {
    }

    return <><h4>Insektenschutz</h4>
        <MessageBar className={style.message}>
            <p>Konfigurieren Sie Sich ihren individuellen Insektenschutz!!!</p>
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
        </Stack>
        <Stack tokens={stackToken}>
            <Stack.Item>
                <ChoiceGroup options={options} defaultSelectedKey={'A'} label="Ausführung" required defaultValue={'A'}/>
            </Stack.Item>
            <Stack.Item>
                <PrimaryButton text="Hinzufügen" onClick={()=> {alert(length)}}/>
            </Stack.Item>
        </Stack>


    </>
}