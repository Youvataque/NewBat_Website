interface CardProps{
    titles : string[],
    sousTitles : string[],
    prices : string[],
    sousPrices : string[]
}

/////////////////////////////////////////////////////////////////
// composant de carte pour les offres
const OffreCard:React.FC<CardProps> = ({titles, sousTitles, prices, sousPrices}) => {

    /////////////////////////////////////////////////////////////////
    // titre  
    function titleEl(title:string) {
        return <h2 className="text-xl text-Primary font-semibold" >{title}</h2>
    }

    /////////////////////////////////////////////////////////////////
    // sous titre
    function sousTitlesEl(title:string) {
        return <h2 className="text-sm text-Secondary font-normal" >{title}</h2>
    }

    /////////////////////////////////////////////////////////////////
    // prix
    function pricesEl(title:string) {
        return <h2 className="text-4xl text-center w-full h-16 pt-3 overflow-hidden text-Primary font-normal" >{title}</h2>
    }

    /////////////////////////////////////////////////////////////////
    // détail de prix
    function sousPricesEl(title:string) {
        return <h2 className="w-full text-center text-xs text-Secondary font-normal" >{title}</h2>
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return <div className="flex">
        {titles.map((value, index) => {
            return <div className="pl-10 pr-10 pt-8 flex flex-col w-96 h-140 rounded-xl border border-solid border-borderColor bg-notBackGround ml-20 mr-20">
                {titleEl(value)}
                {sousTitlesEl(sousTitles[index])}
                <div className="h-4" />
                {pricesEl(prices[index])}
                {sousPricesEl(sousPrices[index])}
            </div>
        })}
    </div>
}

export default OffreCard;