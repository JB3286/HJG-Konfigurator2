import {mergeStyles, mergeStyleSets, Stack} from "@fluentui/react";
import {useState} from "react";
import {Insektenschutz} from "./Insektenschutz";
import {Rollladen} from "./Rollladen";
import {Markisen} from "./Markisen";

const style = mergeStyleSets({
    root: {

        alignItems: "center",
        justifyContent: "space-around",

    },
    tabItem: {
        justifyContent: "left",


    }

})

enum tabs{
    fliegengitter,
    rolllaeden,
    markisen
}

export function Configurator() {

    const [tabSet,setTabSet] = useState<tabs>(tabs.fliegengitter)

    return<>
            <Stack horizontal className={style.root}>
                <Stack.Item className={style.tabItem} onClick={()=>setTabSet(tabs.fliegengitter)}>Fliegengitter</Stack.Item>
                <Stack.Item className={style.tabItem} onClick={()=>setTabSet(tabs.rolllaeden)}>Rollladen</Stack.Item>
                <Stack.Item className={style.tabItem} onClick={()=>setTabSet(tabs.markisen)}>Markisen</Stack.Item>
            </Stack>
            <Stack>
                {tabSet===tabs.fliegengitter && <Insektenschutz/>}
                {tabSet===tabs.rolllaeden && <Rollladen/>}
                {tabSet===tabs.markisen && <Markisen/>}
            </Stack>
        </>
}