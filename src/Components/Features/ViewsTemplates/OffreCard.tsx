import checkLogo from '../../../../assets/Img/check.webp';

interface CardProps{
    titles : string[],
    sousTitles : string[],
    prices : string[],
    sousPrices : string[],
    checks : string[][]
}

/////////////////////////////////////////////////////////////////
// composant de carte pour les offres
const OffreCard:React.FC<CardProps> = ({titles, sousTitles, prices, sousPrices, checks}) => {

    /////////////////////////////////////////////////////////////////
    // titre  
    function titleEl(title:string) {
        return <h2 className="text-xl max-xl:text-lg text-Primary font-semibold" >{title}</h2>
    }

    /////////////////////////////////////////////////////////////////
    // sous titre
    function sousTitlesEl(title:string) {
        return <h2 className="text-sm max-xl:text-xs text-Secondary font-normal" >{title}</h2>
    }

    /////////////////////////////////////////////////////////////////
    // prix
    function pricesEl(title:string) {
        return <h2 className="text-4xl max-xl:text-3xl text-center w-full h-16 max-xl:h-12 pt-3 overflow-hidden text-Primary font-normal" >{title}</h2>
    }

    /////////////////////////////////////////////////////////////////
    // détail de prix
    function sousPricesEl(title:string) {
        return <h2 className="w-full text-center text-xs text-Secondary font-normal max-md:font-light" >{title}</h2>
    }

    function checksEl(check:string) {
        return <h2 className="w-full text-xs text-Secondary font-normal max-md:font-light" >{check}</h2>
    }

    function checkZone(selectedChecks : string[]) {
        return <div className="flex flex-col">
            {selectedChecks.map((value) => {
                return <div className='flex items-center justify-start pt-1 pb-1 w-full overflow-hidden'>
                    <img className='h-4 w-4 max-md:h-3 max-md:w-3' src={checkLogo}/>
                    <div className='w-10'/>
                    {checksEl(value)}
                </div>
            })}
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return <div className="flex max-md:flex-col ">
        {titles.map((value, index) => {
            return <div className="pl-10 pr-10 max-xl:pl-5 max-xl:pr-5 max-xl:pt-4 pt-8 flex flex-col w-85 max-xl:w-60 h-110 max-xl:h-85 rounded-xl border border-solid border-borderColor bg-notBackGround ml-24 mr-24 max-2xl:ml-10 max-xl:ml-3 max-2xl:mr-10 max-xl:mr-3 max-md:m-auto max-md:mt-2 max-md:mb-2">
                {titleEl(value)}
                {sousTitlesEl(sousTitles[index])}
                <div className="h-4 max-xl:h-2" />
                {pricesEl(prices[index])}
                {sousPricesEl(sousPrices[index])}
                <div className='h-8 max-xl:h-4'/>
                {checkZone(checks[index])}
            </div>
        })}
    </div>
}

export default OffreCard;