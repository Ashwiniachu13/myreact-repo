
import{Component} from 'react'
class ListComponent extends Component{
    render(){
        return(
            <div>
                <h3>Ordered List
                </h3>
                <ol>
                    <li>apple</li>
                    <li>mango</li>
                    <li>orange</li>
                </ol>
                <h3>Unordered list</h3>
                <ul>
                <li>blue</li>
                <li>black</li>
                <li>red</li>
                </ul>
            </div>
        )
    }
}
export default ListComponent