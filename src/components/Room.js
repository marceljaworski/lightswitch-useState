import { useState } from "react";
// export default function Room() {
//     const [stateMode, setStateMode] = useState(false);
//     const lit = "The room is light";
//     const dark = "The room is dark";
//     const evenClick = () => {
//       setStateMode(!stateMode);
//     };
//     return (
//       <div className={stateMode ? lit : dark}>
//         <h1> {stateMode ? lit : dark}</h1>
//         <button onClick={evenClick}>{stateMode ? "Light" : "dark"}</button>
//       </div>
//     );
//   }
export default function Room() {
    const [lightStatus, setLight] = useState(false);
    const lit = 'The light is on';
    const dark = 'The room is dark';
    const toggle =()=>{
        setLight(!lightStatus);
    };
    return (    
        <div className={ lightStatus? lit: dark}>
            <h1>{lightStatus? lit : dark }</h1>
            <button onClick={toggle}>{ lightStatus? 'dark' : 'white' }</button> 
        </div>         
    );
}
