import {useNavigate} from 'react-router-dom';
import './scss/item.scss';
export default function Item(props) {
    const navigate = useNavigate();
    return (
        <div className='hexagon'>
        <div className="item" key={props._id} >
            <div className="item_img" onClick={()=>navigate(`/build/${props._id}`)}>
                <h2 className="item_title">{props.title}</h2>
                <h4 className="item_price">{props.price}</h4>
                {/* <p className="">{props.description}</p> */}
            </div>
        </div>
        </div>
    );
}