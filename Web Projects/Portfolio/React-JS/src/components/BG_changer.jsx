
import { useRef } from "react"
import Button from "./Button"
import {context} from './Context.js'

export default function BG_changer(){
    const divRef=useRef(null)
    return(
        <div ref={divRef} className="rounded-full p-4 mx-auto my-[10%] bg-gray-700 border-4 border-white w-[55%] flex justify-around" >
            <context.Provider value={divRef}>
                <Button btn_color="red" />
                <Button btn_color="green" />
                <Button btn_color="blue" />
            </context.Provider>
        </div>        
    )
}