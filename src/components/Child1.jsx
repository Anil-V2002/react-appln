const Child1 = (props)=>{
    return(
        <>
            <h1>{props.key1}</h1>
            <h1>{props.key2}</h1>
            <hr />
            {
            props.key3? <h1>{props.key2}</h1> :<h1>{props.key1}</h1>
            }
            {
                props.key4.map((element,index)=>{
                    return(<p key = {index}>{element}</p>)
                })
            }
            <p>{props.key5.name}</p>
            <p>{props.key5.age}</p>
            <p>{props.key5.city}</p>
            <table border = {1} cellPadding={10} cellSpacing={10} align="center">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                    {props.key6.map((element,index)=>{
                        return(
                            <tr key = {index}>
                                <td>{element.name}</td>
                                <td>{element.age}</td>
                                <td>{element.city}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    );
}

export default Child1;