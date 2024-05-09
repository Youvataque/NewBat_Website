interface TitleArgs {
    text:string,
    style:string
}

/////////////////////////////////////////////////////////////////
// composant de text générale
const ViewText:React.FC<TitleArgs> = ({text, style}) => {
    return <p className={`w-2/4 max-md:w-[97%] font-light text-xl max-2xl:text-lg max-md:text-sm text-center pb-14 ${style}`}>{text}</p>
}

 export default ViewText;