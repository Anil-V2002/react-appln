import Child1 from "./Child1.jsx"

const Parent1 = ()=>{
    return(
        <>
            <Child1 key1 = {"Hello"}
                    key2 = {200}                    
                    key3 = {true}
                    key4 = {["React","Angular","Vue"]}
                    key5 = {{name:"John",age:30,city:"New York"}}
                    key6 = {[{name:"John",age:30,city:"New York"},{name:"Jane",age:25,city:"Los Angeles"},{name:"Bob",age:35,city:"Chicago"}]}
            >
                       </Child1>
        </>
    )
}
export default Parent1;