import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { EDIT_POST } from '../utils/mutations';
import { GET_POST } from '../utils/queries';
import { useParams } from 'react-router-dom';
import Auth from '../utils/auth';
import './scss/EditPost.scss';
export default function EditPost() {
    const navigate = useNavigate();
    console.log("EditPost");
    const { postId } = useParams();
    const { loading, data } = useQuery(GET_POST, {
        variables: { postId: postId },
    });
    // console.log(data);
    const [postText, setPostText] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [postImgLink, setImgLink] = useState('');

    
    // const [postGenre, setGenre] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [editPost, { error }] = useMutation(EDIT_POST,
        {
            refetchQueries:
                [
                    GET_POST,
                    'getPost'
                ]
        });
    // const post = data?.post || {};
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(postTitle, postText, postImgLink, Auth.getProfile().data.username);
        try {
            const { data } = await editPOST({
                variables: {
                    title: postTitle,
                    body: postText,
                    imgLink: postImgLink,
                    username: Auth.getProfile().data.username,
                    id: postId
                },
            });
            console.log(data);

            setPostText('');
            navigate('/')


        } catch (err) {
            console.error(err);
        }
    }

    // const handleEdit = async (event) => {
    //     event.preventDefault();
    //     setPostText(post.body);
    //     setPostTitle(post.title);
    //     setImgLink(post.imgLink);

    // }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'postTitle') {
            setPostTitle(value);
        } else if (name === 'postText' && value.length <= 580) {
            setPostText(value);
            setCharacterCount(value.length);
        } else if (name === 'imgLink') {
            setImgLink(value);
        }
        // else if (name === 'genre') {
        //     setGenre(value);
        // }
    }
    // handleEdit();
    return (
        <div className='Submit'>
            <h1>Share your Post!</h1>

            {Auth.loggedIn() ? (
                <form className='Submit_form'
                    onSubmit={handleFormSubmit}
                    >
                    <input
                        placeholder={data?.post.title}
                        value={postTitle}
                        className='Submit_form_title'
                        onChange={handleChange}
                        name='postTitle' />

                    <input
                        placeholder={data?.post.imgLink}
                        value={postImgLink}
                        className='Submit_form_Img_Link'
                        onChange={handleChange}
                        name='postImgLink'
                        />

                    <textarea
                        id="postText"
                        className='Submit_form_text'
                        name="postText"
                        placeholder={data?.post.body}
                        value={postText}
                        rows="4"
                        onChange={handleChange}
                        required />
                    <div className='Submit_form_info'>
                        <p
                            className={`Submit_form_info_char-count ${characterCount === 580 || error ? 'text-danger' : ''}`}
                        >
                            Character Count: {characterCount}/580
                            {error && <span className='Submit_form_info_text-error'>Something went wrong...</span>}
                        </p>
                    </div>
                    <button className='Submit_form_btn' type='submit' >Add Post</button>
                </form>
            ) : (
                <p>
                    You need to be logged in to share your post. Please{' '}
                    <Link to='/login'>Login</Link> or <Link to='/signup'>Sign-up</Link>.
                </p>
            )}
        </div>
    );
}
