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
            "Entamez votre conversion au digital et simplifiez-vous la vie ! Tester le numérique, c’est l’adopter.",
            "Augmentez votre productivité grâce à l'intégration du digital dans vos tâches quotidiennes.",
            "Créez l'environnement numérique idéal pour parfaire votre efficacité et améliorer votre confort."
        ],
        prices : [
            "19€ / mois",
            "49€ / mois",
            "Sur devis"
        ],
        sousPrices : [
            "puis 10€ par utilisateur supplémentaire",
            "puis 7€ par utilisateur supplémentaire",
            "Achat d'une licence comptant"
        ],
        checks : [
            ["Accès à une application", "Un utilisateur par défaut", "Un serveur rapide compris", "Support technique rapide et efficace"],
            ["Accès aux trois applications", "Deux utilisateurs par défaut", "Un serveur rapide compris", "Support technique rapide et efficace"],
            ["Accès aux trois applications", "Aucune limite d'utilisateurs", "Le serveur le plus rapide" , "Ajout de fonctionnalité sans délai",  "Applications personnalisables"]
        ]
    }

    /////////////////////////////////////////////////////////////////
    // information de la askZone
    const askData = {
        titles : [
            "Je ne me retrouve dans aucunes offres, que proposez vous ?",
            "Proposez vous un prix dégressif sur le nombre d'utilisateur ?",
            "Je ne suis intéréssé que par deux applications comment faire ?",
            "Peut on personnaliser les applications ?",
        ],
        content : [
            "Contactez-nous et nous mettrons tout en œuvre pour trouver la meilleure solution à votre problème.",
            "À partir d'un certain nombre d'utilisateurs, nous sommes disposés à proposer un tarif dégressif. Nous vous invitons à nous contacter afin que nous puissions étudier ensemble votre situation.",
            "Vous pouvez actuellement opter pour la formule « Professional » ou « Premium » vous donnant accès aux 3 applications. Il n'y a cependant pas d'offre pour 2 applications seulement.",
            "Bien sûr ! Avec la formule « Premium », vous pourrez tout à fait demander des ajouts de fonctionnalités ou un changement de design. Pour de très légères modifications sur les autres formules, n’hésitez pas à nous contacter.",
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
                text="Retrouvez ci dessous les question les plus posés sur notre offre mais en cas de doute n'hésitez pas à nous contacter."
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
        <OffreCard titles={cardData.titles} sousTitles={cardData.sousTitles} prices={cardData.prices} sousPrices={cardData.sousPrices} checks={cardData.checks}/>
        <div className='h-20'/>
        {askZone()}
        <div className='h-40 max-md:h-20'/>
        <Footer/>
    </div>
}

export default Pricing;