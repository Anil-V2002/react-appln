import axios from "axios";
import {useState,useEffect} from "react";

const GetEx1 = ()=>{
    
    const [users,setUsers] = useState([]);

    const getUsers = async ()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data);
        setUsers(data);
    }
    
    useEffect(()=>{
        getUsers();
    })

    return(
        <>
            <table border = {1} align="center" cellPadding={10} cellSpacing={10}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((element,index)=>{
                        return(<tr key = {index}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                        </tr>)
                    })}
                </tbody>
                <tfoot></tfoot>

            </table>
        </>
    )
}
export default GetEx1;