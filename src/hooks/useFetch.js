import { useEffect, useState } from "react";

export const useFetch = ( urlInfo, urlDescription ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const respInfo = await fetch(urlInfo);
        const dataInfo = await respInfo.json();

        const respDescription = await fetch(urlDescription);
        const { flavor_text_entries } = await respDescription.json();

        setState({
            ...state,
            data: {...dataInfo, ...flavor_text_entries[0]},
            isLoading: false
        })
    }

    useEffect(() => {
        getFetch();
    }, [urlInfo, urlDescription])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}