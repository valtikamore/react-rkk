import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
export function Rating(props:RatingPropsType) {
    if(props.value === 0) {
        return (<div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>)
    }
    if(props.value === 1) {
        return (<div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>)
    }
    if(props.value === 2) {
        return (<div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>)
    }
    if(props.value === 3) {
        return (<div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>)
    }
    if(props.value === 4) {
        return (<div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>)
    }
        return (<div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>)
}

type StarPropsType = {
    selected:boolean
}

function Star(props:StarPropsType) {
    if(props.selected === true ) {
        return <span><b>666 Star 666|</b></span>
    } else {
        return (<span>666 Star 666|</span>)
    }
}