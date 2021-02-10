import React from 'react';
import './App.css';
import Accordion from './components/accordion/Acordion';
import {Rating} from "./components/Rating/Rating";


//! function declaration
type pageTitlePropsType = {
    title : string
}
function PageTitle(props: pageTitlePropsType) {
    console.log('rendering PageTitle')
    return <h1>{props.title}</h1>
}
function App() {
    console.log('rendering App')
    return (
        <div>
            <PageTitle title= {'Page title render`'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue={'Accordion title 1 '} collapsed={true}/>
            <Accordion titleValue={'Accordion title 2 '} collapsed={false}/>
        </div>
    )
}


export default App;
