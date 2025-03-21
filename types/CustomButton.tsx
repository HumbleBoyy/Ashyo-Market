import { FocusEventHandler, MouseEventHandler, ReactNode } from "react"

export interface CustomButtonType {
    extraClass?:string
    icon?:ReactNode
    children?:ReactNode
    iconPosition?:"left" | "right"
    onClick?:MouseEventHandler<HTMLButtonElement>
    bage?:number | null | undefined
    onBlur?:FocusEventHandler<HTMLButtonElement>
}