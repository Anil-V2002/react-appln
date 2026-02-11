import "./Child2.css";
const Child2 = (props)=>{
    return(
        <>
            <h1>{props.num1}</h1>
            <h1>{props.str}</h1>
            {
                props.flag? <p>{props.num1}</p>: <p>{props.str}</p> 
            }
            {
                props.list.map((items,index)=>{
                    return <p key = {index}>{items}</p>
                })
            }
            <h1>{props.obj.name}</h1>
            <h1>{props.obj.age}</h1>
            <h1>{props.obj.city}</h1>
            
            <div className="parent">
                {
                    props.objs.map((elements,index)=>{
                        return(<div className = "child">
                            <img src = {elements.img} className = "img"></img>

                            <p>{elements.name}</p>
                            <p>{elements.pid}</p>

                        </div>)
                    })
                }
            </div>

           
        </>
    )
}
export default Child2;