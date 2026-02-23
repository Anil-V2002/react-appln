import axios from 'axios'
import {useEffect,useState} from 'react'

const Delete_Ex = ()=>{
    const [data,setData] = useState({});
    const delete_ex = async()=>{
        const {data} = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
        console.log(data)    
    
    }
    useEffect(()=>{
        delete_ex(); 
        },[]);
    return(
        <>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}
export default Delete_Ex;
