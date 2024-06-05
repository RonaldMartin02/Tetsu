import {useNavigate} from 'react-router-dom';
export default function Post(props) {
    const navigate = useNavigate();
    return (
        <div className="post" key={props._id} >
            <div className="post_body" onClick={()=>navigate(`/build/${props._id}`)}>
                <h2 className="post_title">{props.title}</h2>
                <h4 className="post_username">Posted by: {props.username}</h4>
                <h4 className="post_game">{props.game}</h4>
                <p className="post_description">{props.description}</p>
            </div>
        </div>
    );
}