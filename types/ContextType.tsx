import React, { SetStateAction } from "react";

export interface ContextType {
    openCategory:boolean,
    setOpenCategory:React.Dispatch<SetStateAction<boolean>>
}