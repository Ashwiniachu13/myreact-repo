

const Tabledata=[{name:"ashwini",age:21 , gender:"female"},
{name:"archana",age:21 , gender:"female"},
{name:"soujanya",age:21 , gender:"female"},]

function Fun(prop){
    return(
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {Tabledata.map((prop,row)=>{
                    return(
                        <tr row={row}>
                            <td>{prop.name}</td>
                            <td>{prop.age}</td>
                            <td>{prop.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default Fun