import { createContext } from "react";

const SearchContext=createContext<{
    sort?:string,
    category?:string,
    freeTextSearch?:string,
    range?:number[]
}>({})
export default SearchContext;