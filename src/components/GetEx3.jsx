import axios from "axios";
import {useState,useRef} from "react";

const GetEx3 = ()=>{
    
    const ref1 = useRef();
    const [user,setUser] = useState({});
    const getUser = async ()=>{
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${ref1.current.value}`)
        console.log(data);
        setUser(data);
    }
    return(
        <>
            <input type = "text" ref= {ref1} placeholder = "enter user id"/>
            <button onClick={getUser}>Get User</button>
            <br />
            <b>{user.name}</b> <br></br>
            <b>{user.id}</b> <br></br>
            <b>{user.phone}</b> <br></br>
            <b>{user.username}</b> <br></br>
            <b>{user.website}</b> <br></br> 

        </>
    )
}
export default GetEx3;