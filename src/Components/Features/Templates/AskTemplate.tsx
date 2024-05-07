import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../ui/accordion"

/////////////////////////////////////////////////////////////////
// args des questions
interface AskProps {
    titles : string[],
    content : string[]
}

/////////////////////////////////////////////////////////////////
// composant générant des question animés
const AskTemplate:React.FC<AskProps> = ({titles, content}) => {
    return (
        <Accordion type="single" collapsible className="w-1/2 max-2xl:w-[55%] max-md:w-[90%]">
            {titles.map((value, index) => {
                return <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger className="text-Secondary font-semibold text-lg max-md:text-md text-start">{value}</AccordionTrigger>
                <AccordionContent className="font-medium text-md max-md:text-sm">{content[index]}</AccordionContent>
                </AccordionItem>
            })}
        </Accordion>
    )
}

  export default AskTemplate;
  