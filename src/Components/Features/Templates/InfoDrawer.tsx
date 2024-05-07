import * as React from "react"

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../../ui/drawer"

/////////////////////////////////////////////////////////////////
// args du composant
interface InfoProps{
    buttonColor:string,
    drawerStyle:string,
    infoPoint:string[]
}

/////////////////////////////////////////////////////////////////
// composant bouton ouvrant un drawer custom 
const InfoDrawer:React.FC<InfoProps> = ({buttonColor, drawerStyle, infoPoint}) => {
    return <div>
        <Drawer>
            <DrawerTrigger asChild>
                <button className={`h-12 w-36 mt-10 max-md:h-10 max-md:mt-6 rounded-md font-semibold pt-1 max-md:pt-0 ${buttonColor} `}>Informations</button>
            </DrawerTrigger>
            <DrawerContent className={`h-110 ${drawerStyle} flex flex-col items-center`}>
                <div className="w-[25%] max-2xl:w-[35%] max-xl:w-[45%] max-md:w-[97%] flex flex-col pt-20">
                    {infoPoint.map((value) => {
                        return <div className="flex items-center">
                            <div className="h-3 w-3 bg-black rounded-full"/>
                            <div className="w-2 "/>
                            <p className=" w-full pt-2 pb-2 text-black font-medium text-lg max-md:text-sm">{value}</p>
                        </div>
                    })}
                </div>
            </DrawerContent>
        </Drawer>
    </div>
}

export default InfoDrawer;