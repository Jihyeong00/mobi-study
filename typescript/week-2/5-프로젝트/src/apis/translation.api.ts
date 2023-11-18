import useSWR from "swr";
import {fetcher} from "@apis/apis.ts";
import {END_POINT} from "../constants/api.ts";

const useTranslation = () => {
    const {mutate, data, isValidating} = useSWR(END_POINT.DEEPL, fetcher,{
        type:'get'
    })
    return {mutate, data, isValidating}
}

export default useTranslation