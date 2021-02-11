import React, {useState} from "react";



export function UncontrolledRating() {
    let [stars,setStars]=useState(1)
    return (<div>
    <Star selected={stars > 1}/> <button onClick={() => setStars(1)}>1</button>
    <Star selected={stars > 2}/> <button onClick={() => setStars(2)}>2</button>
    <Star selected={stars > 3}/> <button onClick={() => setStars(3)}>3</button>
    <Star selected={stars > 4}/> <button onClick={() => setStars(4)}>4</button>
    <Star selected={stars > 5}/> <button onClick={() => setStars(5)}>5</button>

    </div>)
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star|</b></span>
    } else {
        return (<span> Star |</span>)
    }
}