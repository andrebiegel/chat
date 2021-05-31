import {useEffect, useState} from 'react'

const STORAGE_PREFIX = "io-github-andrebiegel-chat"
export default function useLocalStorage(key, intialValue) {
    const prefixedKey = STORAGE_PREFIX + key
    const [value, setValue] = useState(() =>{
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null ) return  JSON.parse(jsonValue)
        if( typeof intialValue === 'function'){
            return intialValue()
        }else{
            return intialValue
        }
    })
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
    return [value, setValue]
}
