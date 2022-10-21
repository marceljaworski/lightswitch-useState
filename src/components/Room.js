import { useState } from "react";

export default function Room() {
    const [lightStatus, setLight] = useState(false);
    const light = 'The light is on';
    const dunkel = 'The room is dark';
    const toggle =()=>{
        setLight(!lightStatus);
    };
    return (    
        <div className={lightStatus ? 'lit room': 'dark room'}>
            <h1> {lightStatus ? light : dunkel }</h1>
            <button onClick={toggle}>{ lightStatus? 'Dark' : 'Light'  }</button> 
        </div>         
    );
}
