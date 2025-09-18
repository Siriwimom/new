import { useState } from "react";
import './Hello.css'
function Item({name,isPacked}){
    if(isPacked)
        return (<li>{name}✅</li>);
    else
        return(<li>{name}</li>);
}
export default function Hello(){
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("type here!");
    return(<>
    <ol>
        <Item name= "flashlight" isPacked={true}/>
        <Item name= "sunglasses" />
        <Item name= "towel" isPacked={true}/>

    </ol>
    <input type="text" value={value}
    onChange={event => setValue(event.target.value)}/>
    <p>you type {value.length} chars</p>
    <p>{parseFloat(value)}$ equal to {parseFloat(value)*(31.81).toFixed(2)}</p>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount(0)}>reset</button>
    <button onClick={()=>setCount(count+1)}>+</button>
    <p>you click {count} time</p>
    </>);
}