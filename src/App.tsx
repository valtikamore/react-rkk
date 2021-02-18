import React, {useState} from 'react';
import './App.css';
import Accordion from './components/accordion/Acordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/onOff/onOff";
import UncontrolledAccordion from "./components/accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/uncontrolledRating";
import UncontrolledOnOff from './components/onOff/uncontrolledOnOff';



type pageTitlePropsType = {
    title: string
}

function PageTitle(props: pageTitlePropsType) {
    console.log('rendering PageTitle')
    return <h1>{props.title}</h1>
}

function App() {
    console.log('rendering App')


    let [ratingValue,setRatingValue] = useState<RatingValueType>(0)


    let [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false)

    let [on,setOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <Rating value={ratingValue} clickOnStar={setRatingValue} />
            <Accordion titleValue={'Accordion title 1 '} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            <UncontrolledOnOff
                on ={on}
                setOn={setOn}/>


            {/*<OnOff/>*/}

            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
            {/*<UncontrolledRating />*/}




            {/*<PageTitle title={'Page title render`'}/>*/}

            {/*<Accordion titleValue={'Accordion title 2 '} collapsed={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    )
}


export default App;
