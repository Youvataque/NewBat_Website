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
        <Accordion type="single" collapsible className="w-1/3">
        {titles.map((value, index) => {
            return <AccordionItem value={`item-${index + 1}`}>
            <AccordionTrigger>{value}</AccordionTrigger>
            <AccordionContent>
                {content[index]}
            </AccordionContent>
            </AccordionItem>
        })}
        </Accordion>
    )
}

  export default AskTemplate;
  