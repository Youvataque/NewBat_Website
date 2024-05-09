/////////////////////////////////////////////////////////////////

import InfoDrawer from "../Templates/InfoDrawer"

// args du composant
interface ElementProps {
    gifs:string[],
    titles:string[],
    texts:string[],
    bgColors:string[],
    textColors:string[],
    buttonColors:string[],
    drawerColors:string[],
    infosPoints:Array<string[]>
}

/////////////////////////////////////////////////////////////////
// composant générant des pages de rpésentation pour gif
const GifPresentator:React.FC<ElementProps> = ({gifs, titles, texts, bgColors, textColors, buttonColors, drawerColors, infosPoints}) => {

    /////////////////////////////////////////////////////////////////
    // partie gif
    function imgEl(gif:string, index:number) {
        return <div className="relative h-160 w-130 max-2xl:h-150 max-2xl:w-110 flex justify-center max-md:w-full max-md:h-96">
            <div className={`w-130 h-80 max-2xl:w-110 max-2xl:h-68 max-xl:w-96 max-xl:h-56 rounded-2xl mt-[50%] max-2xl:mt-[55%] max-xl:mt-[35%] ${bgColors[index]} max-md:hidden`}/>
            <img className="absolute h-160 max-2xl:h-150 max-xl:h-110 max-md:h-96 top-0" src={gif}/>
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // partie text
    function textEl(text:string, title:string, index:number) {
        return <div className={`h-160 max-2xl:h-150 max-md:h-96 flex flex-col justify-center max-md:items-center w-130 max-2xl:w-110 max-md:w-full`}>
            <h2 className={`font-semibold text-3.5xl max-md:text-2xl ${textColors[index]} max-md:text-center mb-2`}>{title}</h2>
            <p className={`text-lg font-light max-md:text-xs max-md:text-center`}>{text}</p>
            <InfoDrawer buttonColor={buttonColors[index]} drawerStyle={drawerColors[index]} infoPoint={infosPoints[index]}/>
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return <div className="flex flex-col justify-center items-center w-full max-xl:w-[95%] max-md:w-[98%]">
        {gifs.map((value, index) => {
            return <div className={`${index % 2 == 0? 'flex' : 'flex flex-row-reverse'} w-full justify-center items-start mb-10`}>
                {imgEl(value, index)}
                <div  className="w-[15%] max-xl:w-[10%] max-md:w-0"/>
                {textEl(texts[index], titles[index], index)}
            </div>
        })}
    </div>
}

export default GifPresentator;