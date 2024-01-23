const TableComponent=()=>{

    const TableDetails={
        TableHeader:"Company",
        TableData:"Alfreds Futterkiste"
    }

    return(
        <div>
         
       <table>
        <th>{TableDetails.TableHeader}</th>
        <td>{TableDetails.TableData}</td>
       </table>


        </div>
    )
}
export default TableComponent