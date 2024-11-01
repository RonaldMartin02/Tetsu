// import Post from '../components/Post';
// import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import './scss/Post.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import Comment from '../components/Comment';

import { GET_POST } from '../utils/queries';
import { REMOVE_POST} from '../utils/mutations';
// 
export default function Post() {
    const navigate = useNavigate();

    const { postId } = useParams();
    const { loading, data } = useQuery(GET_POST, {
        variables: { postId: postId },
    });
    const post = data?.post || {};
    const comments = post.comments || [];
    // console.log(comments);
    const [removePost, { error }] = useMutation(REMOVE_POST,
        {
            refetchQueries:
                [
                    GET_POST,
                    'getPost'
                ]
        });
    const [comBody, setComBody] = useState('');
    const handleDelete = async (event) => {
        // event.preventDefault();
        console.log('delete');
        try {
            const { data } = await removePost({
                variables: {
                    postId: postId
                },
            });
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }
    const handleComment = async (event) => {
        event.preventDefault();
        console.log('comment');
        try {
            
        console.log(event.target[0].value);
            const comBody = event.target[0].value;
            // const username = Auth.getProfile().data.username;
            console.log(comBody);
            const { data } = await addComment({
                variables: {
                    postId: postId,
                    commentBody: comBody,
                    username: Auth.getProfile().data.username
                },
            });
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'commentBody') {
         setComBody
(value);
        } 
        // else if (name === 'genre') {
        //     setGenre(value);
        // }
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    const renderButtons = () => {
        if (!Auth.loggedIn()) {
            console.log('You are not logged in');
            return null;
        }
        else {
            if (post.username === Auth.getProfile().data.username) {

                return (
                    <div className='Post_Btns'>
                        <button className='Post_Btns_Edit' onClick={() => {navigate(`/Post/Edit/${postId}`)}}>Edit</button>
                        <button className='Post_Btns_Delete' onClick={handleDelete}>Delete</button>
                    </div>
                );
            }
        }

    }
    return (
        <div className='Post'>

        <div className='Post_Div'>
            <h1 className='Post_Div_Title'>
                {post.title}
                <span className='Post_Div_User'>Posted by: {post.username} {/*at {post.postDate}*/}</span>
            </h1>
            <img className='Post_Div_ImgLink' src={post.imgLink}/> 
            <div className='Post_Div_Body_Container'>
            <p className='Post_Div_Body_text'>{post.body}</p>
            </div>
            {renderButtons()}
        </div>
        </div>
    );
}