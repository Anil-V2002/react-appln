import {use, useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

const State =()=>{
    const [str,setStr] = useState("Hello World");
    const [num1,setNum1] = useState(200);
    const [num2,setNum2] = useState(100);
    const [flag,setFlag] =useState(true);
    const [list,setList] = useState([10,20,30,40,50]);
    const [obj,setObj] = useState({name:"John",age:30,city:"New York"});
    const [emps,setEmps] = useState([{eid:101,ename:"John",epic:"https://reqres.in/img/faces/1-image.jpg"}, 
                                     {eid:102,ename:"Jane",epic:"https://reqres.in/img/faces/2-image.jpg"}, 
                                     {eid:103,ename:"Bob",epic:"https://reqres.in/img/faces/3-image.jpg"}, 
                                     {eid:104,ename:"Alice",epic:"https://reqres.in/img/faces/4-image.jpg"}, 
                                     {eid:105,ename:"Charlie",epic:"https://reqres.in/img/faces/5-image.jpg"}])
    return(
        <>
            <hr></hr>
            <h1>{str}</h1>           
            <h1>Addition.{num1+num2}</h1>
            <h1>Subtraction.{num1-num2}</h1>
            <h1>Multiplication.{num1*num2}</h1>
            <h1>Division.{num1/num2}</h1>
            <hr />
            {
                flag? <h1>Addition.{num1+num2}</h1> : <h1>Subtraction.{num1-num2}</h1>
            }
            <hr />
            <hr />
            {
                flag? <Comp1></Comp1> : <Comp2></Comp2>
            }
            {
                !flag? <Comp1></Comp1> : <Comp2></Comp2>
            }
            {
                list.map((element,index)=>{
                    return(<h1 key = {index}>{element}</h1>)
                })
            }
            <h1>{obj.name}....{obj.age}...{obj.city}</h1>
            
            <table border = {1} cellPadding={10} cellSpacing={10} align="center">
                
                <thead >
                    <tr>
                    <th>eid</th>
                    <th>ename</th>
                    <th>epic</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map((element) => (
                    <tr key={element.eid}>
                        <td>{element.eid}</td>
                        <td>{element.ename}</td>
                        <td>
                        <img
                            src={element.epic}
                            alt={element.ename}
                            width="50"
                            height="50"
                        />
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
                
            
                
            
           
 
        </>
    )
}
export default State;