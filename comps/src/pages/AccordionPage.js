import Accordion from "../components/Accordion";

function AccordionPage() {
const items = [
  {
    id:'22',
    label: 'Syed Faaiz',
    content: 'i am faaiz is back to pool'
  },
  {
    id:'23',
    label: 'Syed Faaiz',
    content: 'i am faaiz is back to pool'
  },
  {
    id:'24',
    label: 'Syed Faaiz',
    content: 'i am faaiz is back to pool'
  },
  {
    id:'25',
    label: 'Syed Faaiz',
    content: 'i am faaiz is back to pool'
  },
]

  return(
    <Accordion items={items}/>
  );
}

export default AccordionPage;
