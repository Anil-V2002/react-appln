import {useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
const State =()=>{
    const [str,setStr] = usseState("Hello World");
    const [num,setNum] = useState(200);
    cosnt [flag,setFlag] = useState(true);
    const [list,setList] = useState([10,20,30,40,50]);
    const [obj,setObj] = useState({name:"John",age:30,city:"New York"});
    const [arrObj,setArrObj] = useState([{id:1,name:"John"},{id:2,name:"Jane"},{id:3,name:"Doe"}]);
    return(
        <>
        <h1>{str}</h1>
        <h2>{num}</h2>
        {
            flag ? <h3>Flag is true</h3> : <h3>Flag is false</h3>
        }
        {
            !flag ? <h3>Flag is false</h3> : <h3>Flag is true</h3>
        }
        {
            flag ? <Comp1></Comp1> : <Comp2></Comp2>
        }
        {
            !flag ? <Comp1></Comp1> : <Comp2></Comp2>
        }
        {
            list.map((element,index)=>{
                return <p key = {index}>{element}</p>
            })
        }

        </>
    )
}
export default State;