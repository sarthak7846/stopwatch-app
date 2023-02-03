
const Display = (props) => {
    return <div >
        <span>{(props.time.m >=10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
        <span>{(props.time.s >=10) ? props.time.s : "0" + props.time.s}</span>&nbsp;:&nbsp;
        <span>{(props.time.ms >=10) ? props.time.ms : "0" + props.time.ms}</span>&nbsp;&nbsp;

        <p id="time">{(props.time.m >=10) ? props.time.m : "0" + props.time.m}&nbsp;:&nbsp;
        {(props.time.s >=10) ? props.time.s : "0" + props.time.s}&nbsp;:&nbsp;
        {(props.time.ms >=10) ? props.time.ms : "0" + props.time.ms}</p>&nbsp;&nbsp;
    </div>;
};

export default Display;
