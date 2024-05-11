import interGif from '../../assets/Img/Intervention.gif';
import chantierGif from '../../assets/Img/Chantier.gif';
import deviGif from '../../assets/Img/Devis.gif';
import GifPresentator from '../Components/Features/ViewsTemplates/GifPresentator';
import AskTemplate from '@/Components/Features/Templates/AskTemplate';
import Footer from '@/Components/FondamentalAppComp/Footer';
import ViewText from '@/Components/Features/Templates/ViewText';
import ViewTitle from '@/Components/Features/Templates/ViewTitle';
import MainText from '@/Components/Features/Templates/MainText';

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
        ],
        drawerStyles : [
            "bg-[#B9CCED]",
            "bg-[#FCC590]",
            "bg-[#B0D9B1]"
        ],
        infosPoints : [
            ["Always on, fonctionne en ligne comme hors ligne.", "Fast entry, vos informations sont pré-rentrées et vos fiches toujours à jour.", "Shareable, chaque interventions est partageable par sms ou mail au format pdf", "Easy use, vos salariés ne pourront plus faire d'erreur."],
            ["Always on, fonctionne en ligne comme hors ligne.", "Never forget, établissez votre liste d'achats, vos tâches ou le suivi de l'avancement pour chaque chantier.", "Collaborative, avancez sur vos taches en équipe grâce au partage instantané."],
            ["Always on, fonctionne en ligne comme hors ligne.", "Refreshing, ne passez plus vos soirées à traiter des devis grâce à la clarté des infos prises.", "Always here, ayez toujours sur vous l'outil pour accomplir le meilleur travail possible."]
        ]
    }

    /////////////////////////////////////////////////////////////////
    // information de la askZone
    const askData = {
        titles : [
            "Et si je n'ai pas internet ?",
            "J'ai un Samsung ça fonctionne quand même ?",
            "J'ai vraiment besoin d'une tablette pour Devis ?",
            "Sommes-nous prévenu à l'anniversaire des entretiens ?",
            "Il est ou le chantier ?"
        ],
        content : [
            "C'est là que cela devient fantastique. Nos applications sauvegarderont toutes les données sur votre téléphone en attendant de retrouver du réseau, puis les enverront automatiquement sur le serveur.",
            "Bien sur. Nos produits sont dotés d'une technologie puissante les rendants compatibles partout ! De Windows à Mac en passant par Android et iOS tout fonctionne.",
            "Non la tablette n'est pas obligatoire, vous pouvez tout à fait dessiner au doigt ou bien vous passer de schéma. Celle-ci permettra de pousser l'application au mieux de ce qu'elle propose.",
            "Malheureusement, Intervention n'offre pas encore de fonctionnalité permettant de prévenir le client ou vous-même qu'un entretien du matériel est nécessaire. Nous travaillons actuellement à développer cette fonctionnalité.",
            "Regardes sur ton application ! Investir dans l'informatique c'est se libérer l'esprit."
        ]
    }

    /////////////////////////////////////////////////////////////////
    // partie1 de home avec la description courte et la vidéo
    function videoZone() {
        return <div className="relative">
            <div className="w-screen h-210 max-2xl:h-190 max-xl:h-180 max-md:h-140">
                <div className="w-full h-[80%]  bg-Primary "></div>
                <div className="w-full h-[20%]  bg-backGround "></div>
            </div>
            <div className="absolute w-full flex flex-col justify-center items-center bottom-0">
                <ViewTitle
                    title="NewBat : L'informatique du batiment"
                    style="text-backGround"
                />
                <MainText 
                    text="Ne vous est il jamais arrivé de livrer un compte rendu d'intervention douteux au client ? D'avoir du mal à mener vos salariés la ou vous le souhaitiez ? De prendre les notes d'un devis puis de perdre la feuille ? Avec NewBat tout cela est terminé !"
                    style="text-backGround"
                />
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
            <ViewTitle
                title="Une démonstration ?"
                style="text-Primary"
            />
            <ViewText
                text="Voici un petit aperçu de ce que propose notre solution. Gagnez en organisation et en temps grâce à NewBat !" 
                style="text-Secondary"
            />
            <GifPresentator
                gifs={gifData.gifs} 
                titles={gifData.titles}
                texts={gifData.texts}
                bgColors={gifData.bgColors}
                textColors={gifData.textColors}
                buttonColors={gifData.buttonColors}
                drawerColors={gifData.drawerStyles}
                infosPoints={gifData.infosPoints}
            />
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // partie3 zone des questions
    function askZone() {
        return <div className='w-screen flex flex-col justify-center items-center'>
            <ViewTitle
                title="Des questions ?"
                style="text-Primary"
            />
            <ViewText
                text="Retrouvez ci dessous les question les plus posés sur notre solution mais en cas de doute n'hésitez pas à nous contacter."
                style="text-Secondary"
            />
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
        <div className='h-40 max-md:h-20'/>
        <Footer/>
    </div>
}

export default Home;
