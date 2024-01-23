

import ListDetails from "./listdata"
function ListLi(){
    const{listName,age,phoneNumber}=ListDetails
    return(
        <div>
        <ol>
            <li>{listName}</li>
            <li>{age}</li>
            <li>{phoneNumber}</li>
            
            
        </ol>
        <ul>
       <li>{listName}</li>
       <li>{age}</li>
       <li>{phoneNumber}</li>
        </ul>
        </div>
    )
}
export default ListLi