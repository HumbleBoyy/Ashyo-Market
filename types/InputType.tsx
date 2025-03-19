import { ChangeEventHandler } from "react"

export interface InputType{
    name?:string,
    type:"text" | "email" | "password" | "number",
    value?:string
    placeholder:string
    extraClass?:string
    onChange?:ChangeEventHandler<HTMLInputElement>
}