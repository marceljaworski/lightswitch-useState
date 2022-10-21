import { useState } from "react";

const [ light, setLight ] = useState(lit)
function Lightswitch () {
    return (
        <div className="button__container">
            <h1 className="text__lit">The room is lit</h1>
            <h1 className="text__dark">The room is dark</h1>
            
            <button type="button" onClick={()=> setLight("dark")}>Lightswitch</button>
        </div>         
    )
}
export default Lightswitch;