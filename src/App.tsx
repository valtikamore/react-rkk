import React from 'react';
import './App.css';
import Accordion from './components/accordion/Acordion';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/onOff/onOff";


//! function declaration
type pageTitlePropsType = {
    title: string
}

function PageTitle(props: pageTitlePropsType) {
    console.log('rendering PageTitle')
    return <h1>{props.title}</h1>
}

function App() {
    console.log('rendering App')
    return (
        <div>
            <OnOff on={false}/>
            <OnOff on={true}/>
            <OnOff on={false}/>
            {/*<PageTitle title={'Page title render`'}/>*/}
            {/*<Accordion titleValue={'Accordion title 1 '} collapsed={true}/>*/}
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
