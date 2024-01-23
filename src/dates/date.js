


const ShowDate=(prop)=>{
    return(
        <div>
            <h3>{prop.Greeting}, Today is {prop.day} </h3>
            <h3>{prop.month} {prop.year} {prop.season}</h3>
        </div>
    )
}
export default ShowDate