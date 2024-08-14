import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    let pips
    switch (props.value) {
        case 1:
            pips = (
                <div className="die first-face" onClick={props.hold} style={styles}>
                    <span className="dot"></span>
                </div>
            )
            break
        case 2:
            pips = (
            <div className="die second-face" onClick={props.hold} style={styles}>
                <span className="dot"></span>
                <span className="dot"></span>
           </div>
            )
            break
        case 3:
            pips = (
            <div className="die third-face" onClick={props.hold} style={styles}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            )
            break
        case 4:
            pips = (
            <div className="die fourth-face" onClick={props.hold} style={styles}>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            )
            break
        case 5:
            pips = (
            <div className="die fifth-place" onClick={props.hold} style={styles}>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            )
            break
        case 6:
            pips = (
            <div className="die fourth-face" onClick={props.hold} style={styles}>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            )   
            break
        default: 
            pips = <div></div>
            break
    }

    return (
        <div>
            {pips}
        </div>
    )
}