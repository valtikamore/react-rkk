import React from "react";

type AccordionTitlePropsType = {
    title: string
}
type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {props.collapsed === false ? <AccordionBody/> : ''}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('rendering AccTitle')
    return (
        <h3>{props.title}
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
