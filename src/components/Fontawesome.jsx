const Fontawesome = ()=>{
    return (
        <>
            <thead>
                <tr><th>SNO</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td> <i className="fa fa-inr"> </i>25</td>
                    <td><i className = "fa fa-edit"></i></td>
                    <td><i className = "fa fa-trash"></i></td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </>
    )
}
export default Fontawesome;