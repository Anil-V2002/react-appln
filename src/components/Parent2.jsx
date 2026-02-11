import Child2 from "./Child2.jsx";
import { useState } from "react";

const Parent2 = ()=>{
    const [num1,setNum1] = useState(100);
    const [str,setStr] = useState("Hello");
    const [flag,setFlag] = useState(false);
    const [list,setList] = useState([1,2,3,4,5]);
    const [obj,setObj] = useState({name:"John",age:30,city:"New York"});
    const [objs,setobjs] = useState([{pid:11,pname:"dell",img:"https://images.pexels.com/photos/18105/pexels-photo.jpg"} ,
                                     {pid:12,pname:"hp",img:"https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"} ,
                                     {pid:13,pname:"lenovo",img:"https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"}, 
                                     {pid:14,pname:"asus",img:"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"} ,
                                     {pid:15,pname:"acer",img:"https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"}]);        
    return(
        <>
            <Child2 num1={num1} str={str} flag={flag} list={list} obj={obj} objs={objs}></Child2>
            
        </>  
    )
}
export default Parent2;