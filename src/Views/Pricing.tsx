import AskTemplate from "@/Components/Features/Templates/AskTemplate";
import MainText from "@/Components/Features/Templates/MainText";
import ViewText from "@/Components/Features/Templates/ViewText";
import ViewTitle from "@/Components/Features/Templates/ViewTitle";
import OffreCard from "@/Components/Features/ViewsTemplates/OffreCard";
import Footer from "@/Components/FondamentalAppComp/Footer";

const Pricing:React.FC = () => {

    /////////////////////////////////////////////////////////////////
    // information des carte d'offre
    const cardData = {
        titles : ["Starter", "Professional", "Premium"],
        sousTitles : [
            "Entamez votre conversion au digital et facilitez vous la vie !",
            "Augmentez votre productivité grâce à l'ajout du digital dans vos taches quotidienne.",
            "Créez l'environnement numérique qui vous convient pour parfaire votre efficacité et votre confort."
        ],
        prices : [
            "69 €",
            "149 €",
            "3999 €"
        ],
        sousPrices : [
            "Par mois ramené à l'année",
            "Par mois ramené à l'année",
            "Ajustable en fonction des besoins"
        ]
    }

    /////////////////////////////////////////////////////////////////
    // information de la askZone
    const askData = {
        titles : [
            "Je ne me retrouve dans aucunes offres que proposez vous ?",
            "J'ai un Samsung ça fonctionne quand même ?",
            "J'ai vraiment besoin d'un tablette pour Devis ?",
            "Sommes-nous prévenu à l'anniversaire des entretiens ?",
        ],
        content : [
            "C'est là que cela devient fantastique. Nos applications sauvegarderont toutes les données sur votre téléphone en attendant de retrouver du réseau, puis les enverront automatiquement sur le serveur.",
            "Bien sur. Nos produits sont dotés d'une technologie puissante les rendants compatibles partout ! De Windows à Mac en passant par Android et iOS tout fonctionne.",
            "Non la tablette n'est pas obligatoire, vous pouvez tout à fait dessiner au doigt ou bien vous passer de schéma. Celle-ci permettra de pousser l'application au mieux de ce qu'elle propose.",
            "Malheureusement, Intervention n'offre pas encore de fonctionnalité permettant de prévenir le client ou vous-même qu'un entretien du matériel est nécessaire. Nous travaillons actuellement à développer cette fonctionnalité.",
        ]
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
                text="Retrouvez ce dessous les question les plus posés sur notre offre mais en cas de doute n'hésitez pas à nous contacter."
                style="text-Secondary"
            />
            <AskTemplate titles={askData.titles} content={askData.content}/>
        </div>
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return <div className="flex flex-col items-center w-screen">
        <div className="h-20"/>
        <ViewTitle
            title="Un besoin, une offre :" 
            style="text-Primary"
        />
        <MainText 
            text="Afin de nous adapter au mieux à vos besoins, nous avons mis au point 3 offres differentes. Vous n'avez plus qu'à faire votre choix !"
            style="text-Secondary"
        />
        <OffreCard titles={cardData.titles} sousTitles={cardData.sousTitles} prices={cardData.prices} sousPrices={cardData.sousPrices}/>
        <div className='h-20'/>
        {askZone()}
        <div className='h-40 max-md:h-20'/>
        <Footer/>
    </div>
}

export default Pricing;