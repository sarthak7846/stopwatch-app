import {useState} from 'react';
import Display from './Display';
import Button from './Button';


const Stopwatch = (props) => {
    const [time,setTime] = useState({m:0,s:0,ms:0});
    const [status,setStatus] = useState(0);
    const [interv, setInterv] = useState();
    const [disabledState,setDisabledState] = useState(true);
    let updatedM = time.m,updatedS=time.s,updatedMs=time.ms;

    const startHandler = () => {
        run();
        setStatus(1);
        setDisabledState(false);
        setInterv(setInterval(run, 10));
        // console.log('Start button clicked');
    };

    const run = () => {
        if(updatedMs === 100) {
            updatedS++;
            updatedMs=0;
        }
        if(updatedS === 60) {
            updatedM++;
            updatedS=0;
        }
        updatedMs++;
        return setTime({m:updatedM,s:updatedS,ms:updatedMs});
    }

    const pauseHandler = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const resetHandler = () => {
        clearInterval(interv);
        setStatus(0);
        setDisabledState(true);
        setTime({m:0,s:0,ms:0});
    };

    return <div>
        <Display time={time}/>
        <Button disabled={disabledState} start={startHandler} pause={pauseHandler} reset={resetHandler} status={status}/>
    </div>;
};

export default Stopwatch;