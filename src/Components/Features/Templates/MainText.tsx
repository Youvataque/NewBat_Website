interface TitleArgs {
    text:string,
    style:string
}

/////////////////////////////////////////////////////////////////
// composant de titre référencé
const MainText:React.FC<TitleArgs> = ({text, style}) => {
    return <h1 className={`w-2/4 max-md:w-[97%] font-light text-xl max-2xl:text-lg max-md:text-sm text-center pb-14 ${style}`}>{text}</h1>
}

 export default MainText;