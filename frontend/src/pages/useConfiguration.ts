import {useEffect, useState} from "react";
import {Configuration} from "../types/configuration";
import axios from "axios";

export function useConfiguration(product: string) {
    const [configuration, setConfiguration] = useState<Configuration[]>();
    useEffect(() => {
        axios.get<Configuration[]>(`/${product.toLowerCase()}.json`)
            .then(({data}) => setConfiguration(data));
    }, []);

    return {configuration}
}