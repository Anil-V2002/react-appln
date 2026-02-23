import axios from "axios"
import { useState,useEffect } from "react";
const GetEx4 = ()=>{
    const [num,setNum] = useState();
    const [arr,setArr] = useState([]);
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const get_data = async ()=>{
        const {data} = await axios.get("https://dummyjson.com/products",{headers:{
            "Authorization": "Bearer dummy_token_123",
            "Content-Type": "application/json",
            "X-Custom-Header": "MyTestHeader"
        }});
        const {limit,products,skip,total} = data;
        setNum(limit);
        setArr(products);   
        setNum1(skip);
        setNum2(total);
    }

    useEffect(()=>{
        get_data();
    },[]);
    
    return(
        <>
            <h1>{num}</h1>
            <h1>{num1}</h1>
            <h1>{num2}</h1>
            <table border = {1} cellPadding={10} cellSpacing={10} align = "center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Discount</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.discountPercentage}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
export default GetEx4;