import axios from 'axios'
import {useRef,useState} from 'react'
import Delete_Ex from './DeleteEx'

const DeleteEx1 = ()=>{
    
    const [data,setData] = useState({});
    const ref1 = useRef(null);
    const delete_ex = async()=>{
        const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${ref1.current.value}`);
        console.log(data)
        setData(data);
    }
    return(
        <>
            <input type="number" ref = {ref1} placeholder='enter number' />
            <button onClick={delete_ex}>Clickme</button>
        
            <h1>{JSON.stringify(data)}</h1>
        
        </>
    )
}
export default DeleteEx1;