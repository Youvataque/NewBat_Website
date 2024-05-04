import interGif from '../../assets/Img/Intervention.gif';
import chantierGif from '../../assets/Img/Chantier.gif';
import deviGif from '../../assets/Img/Devis.gif';
import GifPresentator from '../Components/Features/ViewsTemplates/GifPresentator';

const Home:React.FC = () => {

    /////////////////////////////////////////////////////////////////
    // information de la presZone
    const gifData = {
        titles : ["Intervention", "Chantier", "Devis"],
        texts : ["description1", "description2", "description3"],
        gifs : [interGif, chantierGif, deviGif],
        bgColors : ["bg-App1", "bg-App2", "bg-App3"],
        textColors : ["text-App1", "text-App2", "text-App3"]
    }

    /////////////////////////////////////////////////////////////////
    // composant de titre
    function titleEl(title:string, style:string) {
        return <h1 className={`pt-3 pb-0 font-bold text-4xl max-md:text-3xl text-center ${style}`}>{title}</h1>
    }

    function textEl(text:string, style:string) {
        return <h2 className={`w-2/4 max-md:w-[97%] font-medium text-xl text-center pb-14 ${style}`}>{text}</h2>
    }

    /////////////////////////////////////////////////////////////////
    // partie1 de home avec la description courte et la vidéo
    function videoZone() {
        return <div className="relative">
            <div className="w-screen h-210 max-2xl:h-180 max-md:h-160">
                <div className="w-full h-[80%] bg-Primary "></div>
                <div className="w-full h-[20%] bg-backGround "></div>
            </div>
            <div className="absolute w-full flex flex-col justify-center items-center top-20">
                {titleEl("NewBat : L'informatique du batiment", "text-backGround")}
                {textEl("Ne vous est il jamais arrivé de livrer un compte rendu d'intervention douteux au client ? D'avoir du mal à mener vos salariés la ou vous le souhaitiez ? De prendre les notes d'un devis puis de perdre la feuille ? Avec NewBat tout cela est terminé !", "text-backGround")}
                <iframe 
                    className="w-250 h-180 max-2xl:w-200 max-2xl:h-130 max-xl:w-180 max-xl:h-100 max-md:w-85 max-md:h-54 rounded-2xl"
                    src="https://www.youtube.com/embed/z0gpEHgiw-M"
                />
            </div>
        </div>
    }

    function presZone() {
        return <div className="w-screen flex flex-col justify-center items-center pt-14 max-md:pt-0">
            {titleEl("Une démonstration ?", "text-Primary")}
            {textEl("Voici un petit aperçu de ce que propose notre solution. Gagnez en organisation et en temps grâce à NewBat !", "text-Secondary")}
            <GifPresentator gifs={gifData.gifs} titles={gifData.titles} texts={gifData.texts} bgColors={gifData.bgColors} textColors={gifData.textColors}/>
        </div>
    }

    return <div className="flex flex-col items-center w-screen">
        {videoZone()}
        {presZone()}
        
    </div>
}

export default Home;
