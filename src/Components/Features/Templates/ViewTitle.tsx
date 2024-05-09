interface TitleArgs {
    title:string,
    style:string
}

/////////////////////////////////////////////////////////////////
// composant de titre générale
const ViewTitle:React.FC<TitleArgs> = ({title, style}) => {
    return <h2 className={`pt-3 pb-0 font-bold text-4xl max-md:text-3xl text-center w-[97%] ${style}`}>{title}</h2>
}

 export default ViewTitle;