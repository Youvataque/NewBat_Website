import interGif from '../../assets/Img/Intervention.gif';
import chantierGif from '../../assets/Img/Chantier.gif';
import deviGif from '../../assets/Img/Devis.gif';
import GifPresentator from '../Components/Features/ViewsTemplates/GifPresentator';
import AskTemplate from '@/Components/Features/ViewsTemplates/AskTemplate';

const Home:React.FC = () => {

    /////////////////////////////////////////////////////////////////
    // information de la presZone
    const gifData = {
        titles : ["Intervention", "Chantier", "Devis"],
        texts : [
            "Première application de la suite, celle-ci vous permet de gérer éfficacements vos entretiens de climatisation et de pompe à chaleur. Entrez toutes les informations des les encarts prévus, validez les check-up, n'oubliez rien sans avoir à y penser ! Vous pouvez maintenant rendre un compte rendu propre, professionel, et détaillé à votre client par message ou email.",
            "L'organisation est l'élément primordiale de toute entreprise éfficace. Gardez un oeil attentif sur vos chantiers en cours grace à notre outil. Vous pourrez mettre en place pour chacun de vos sites des taches à accomplir, une liste de matériaux à acheter, assigner des chantiers à certains ouvrier, et enfin rester informé des difficultés rencontrés par vos salariés ! ",
            "Nous vous proposons une application directement connecté à votre base de client permettant de prendre toutes les informations sur le terrain rapidement. Un schéma ? Une longue liste de travaux ? Des détails à préciser ? Tout peut être enregistré de façon clair et concise. Vous n'aurrez plus qu'à faire \"copier coller\" et votre devis sera pret (nous recommendons l'achat d'une tablette avec stylet pour un confort optimal)."
        ],
        gifs : [interGif, chantierGif, deviGif],
        bgColors : ["bg-App1", "bg-App2", "bg-App3"],
        textColors : ["text-App1", "text-App2", "text-App3"],
        buttonColors : [
            "bg-App1 text-backGround rounded-md hover:bg-backGround border hover:border-solid hover:border-App1 hover:text-App1",
            "bg-App2 text-backGround rounded-md hover:bg-backGround border hover:border-solid hover:border-App2 hover:text-App2",
            "bg-App3 text-backGround rounded-md hover:bg-backGround border hover:border-solid hover:border-App3 hover:text-App3"
        ]
    }

    /////////////////////////////////////////////////////////////////
    // information de la askZone
    const askData = {
        titles : [
            "Et si je n'ai pas internet ?",
            "J'ai un Samsung ça fonctionne quand même ?",
            "J'ai vraiment besoin d'un tablette pour Devis ?",
            "Sommes-nous prévenu à l'anniversaire des entretiens ?"
        ],
        content : [
            "C'est là que cela devient fantastique. Nos applications sauvegarderont toutes les données sur votre téléphone en attendant de retrouver du réseau, puis les enverront automatiquement sur le serveur.",
            "Bien sur. Nos produits sont dotés d'une technologie puissante les rendants compatibles partout ! De Windows à Mac en passant par Android et Ios tout fonctionne.",
            "Non la tablette n'est pas obligatoire, vous pouvez tout à fait dessiner au doigt ou bien vous passer de schéma. Celle-ci permettra de pousser l'application au mieux de ce qu'elle propose.",
            "Malheureusement, Intervention n'offre pas encore de fonctionnalité permettant de prévenir le client ou vous-même qu'un entretien du matériel est nécessaire. Nous travaillons actuellement à développer cette fonctionnalité."
        ]
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

    /////////////////////////////////////////////////////////////////
    // partie 2 zone de présentation des gifs
    function presZone() {
        return <div className="w-screen flex flex-col justify-center items-center pt-14 max-2xl:pt-20 max-md:pt-0">
            {titleEl("Une démonstration ?", "text-Primary")}
            {textEl("Voici un petit aperçu de ce que propose notre solution. Gagnez en organisation et en temps grâce à NewBat !", "text-Secondary")}
            <GifPresentator gifs={gifData.gifs} titles={gifData.titles} texts={gifData.texts} bgColors={gifData.bgColors} textColors={gifData.textColors} buttonColors={gifData.buttonColors}/>
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // partie3 zone des questions
    function askZone() {
        return <div className='w-screen flex flex-col justify-center items-center'>
            {titleEl("Des questions", "text-Primary")}
            {textEl("Retrouvez ce dessous les question les plus posés sur notre solution mais en cas de doute n'hésitez pas à nous contacter.", "text-Secondary")}
            <AskTemplate titles={askData.titles} content={askData.content}/>
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return <div className="flex flex-col items-center w-screen">
        {videoZone()}
        <div className='h-10'/>
        {presZone()}
        <div className='h-20'/>
        {askZone()}
        
    </div>
}

export default Home;