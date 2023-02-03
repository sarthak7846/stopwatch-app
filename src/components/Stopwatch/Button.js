import { useState } from "react";

const Button = (props) => {
    

    return <div>
        {(props.status === 0) ? <button name="start" id="start" onClick={props.start}>Start</button> : ''}
        {(props.status === 1) ? <button name="pause" id="pause" onClick={props.pause}>Pause</button> : ''}
        {(props.status === 2) ? <button name="resume" id="resume" onClick={props.start}>Resume</button> : ''}

        
        <button name="reset" id="reset" disabled={props.disabled} onClick={props.reset}>Reset</button>
    </div>;
};

export default Button;
