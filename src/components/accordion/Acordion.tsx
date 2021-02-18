import React from "react";



type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    setAccordionCollapsed:(value:boolean) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}        setAccordionCollapsed={props.setAccordionCollapsed} />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed:(value:boolean) => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('rendering AccTitle')
    return (
        <h3 onClick={()=>{
            props.setAccordionCollapsed(true)

        }}>{props.title}
        </h3>
    )
}

function AccordionBody() {
    console.log('rendering AccBody')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>

        </ul>)

}


export default Accordion;
