"use client"

import { useEffect, useState } from "react"


const debounce = (value:string | undefined, delay:number) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(()=> {
        const timer = setTimeout(()=> {
            setDebounceValue(value)
        }, delay)

      return() => {
        clearTimeout(timer)
      }
    }, [value, delay])

    return debounceValue;
}