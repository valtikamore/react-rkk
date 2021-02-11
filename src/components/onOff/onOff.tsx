import React from "react";

type PropsType = {
    on: boolean
}


function OnOff(props: PropsType) {
    let styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }
    let OnStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor:props.on ? 'green' : 'white'
    }
    let OffStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor:props.on ? 'white' : 'red'
    }
    let IndicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        alignSelf: 'center',
        backgroundColor:props.on ? 'green' : 'red'
    }
    return (
        <div style={styles}>
            <div style={OnStyle}>on</div>
            <div style={OffStyle}>off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}

export default OnOff