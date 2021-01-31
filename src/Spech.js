import React from 'react';
import {useSpeechSynthesis} from "react-speech-kit"

const Speech =()=>{

    const [value,setvalue]=React.useState('');
    const {speak}=useSpeechSynthesis();
    return(
        <div className="Spech">
            <div className="group">
                <h2>Speech Synthesis App</h2>
            </div>
            <div className="group">
                <textarea rows="10" value={value} onChange={(e)=> setvalue(e.target.value)}></textarea>
            </div>

            <div className="group">
                <button onClick={() => speak ({text: value})}>Speech</button>
            </div>

        </div>
    )

}
export default Speech