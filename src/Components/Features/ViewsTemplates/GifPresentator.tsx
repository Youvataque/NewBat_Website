/////////////////////////////////////////////////////////////////
// args du composant
interface ElementProps {
    gifs:string[],
    titles:string[],
    texts:string[],
    bgColors:string[],
    textColors:string[]
}

/////////////////////////////////////////////////////////////////
// composant générant des pages de rpésentation pour gif
const GifPresentator:React.FC<ElementProps> = ({gifs, titles, texts, bgColors, textColors}) => {

    /////////////////////////////////////////////////////////////////
    // partie gif
    function imgEl(gif:string, index:number) {
        return <div className="relative h-160 w-130 max-2xl:h-150 max-2x:w-110 flex justify-center">
            <div className={`w-130 h-80 max-2xl:w-110 max-2xl:h-72 rounded-2xl mt-[50%] max-2xl:mt-[55%] ${bgColors[index]}`}/>
            <img className="absolute h-160 max-2xl:h-150 top-0 rounded-4xl shadow-sm shadow-black" src={gif}/>
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // partie text
    function textEl(text:string, title:string, index:number) {
        return <div className={`h-full pt-10 flex flex-col w-130 max-2xl:w-110 ${index % 2 == 0? 'justfy-start' : 'justify-end'}`}>
            <h2 className={`font-semibold text-3xl ${textColors[index]}`}>{title}</h2>
            <p>{text}</p>
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return <div className="flex flex-col justify-center items-center w-full">
        {gifs.map((value, index) => {
            return <div className={`${index % 2 == 0? 'flex' : 'flex flex-row-reverse'} w-full justify-center items-start mb-10`}>
                {imgEl(value, index)}
                <div  className="w-[10%]"/>
                {textEl(texts[index], titles[index], index)}
            </div>
        })}
    </div>
}

export default GifPresentator;