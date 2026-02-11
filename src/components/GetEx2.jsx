import axios from "axios";
import {useState,useEffect} from "react";

const GetEx2 = ()=>{
    
    const [comments,setCommetns] = useState([]);
    
    const getComments = async ()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments/");
        console.log(data);
        setCommetns(data);  
    }

    useEffect(()=>{
        getComments();
    },[])
    
    return(
        <>
            <table border= {10} align ="center" cellPadding={10} cellSpacing={10}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        <th>POstID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map((element,index)=>{
                            return(<tr key = {index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.body}</td>
                                <td>{element.postId}</td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
export default GetEx2;
