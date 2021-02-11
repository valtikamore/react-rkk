import React, {useState} from "react";

function OnOff() {


    let [on,setOn] = useState(false)

    let styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }
    let OnStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor:on ? 'green' : 'white'
    }
    let OffStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor:on ? 'white' : 'red'
    }
    let IndicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        alignSelf: 'center',
        backgroundColor:on ? 'green' : 'red'
    }
    return (
        <div style={styles}>
            <div style={OnStyle} onClick={() => setOn(true)}>on</div>
            <div style={OffStyle} onClick={() => setOn(false)}>off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}

export default OnOff