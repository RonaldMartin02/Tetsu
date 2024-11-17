import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_POST } from '../utils/mutations';
import { GET_ALL_POSTS } from '../utils/queries';

import './scss/CreatePost.scss';
import Auth from '../utils/auth';

export default function CreatePost() {
    const navigate = useNavigate();
    const [postText, setPostText] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [postImgLink, setPostImgLink] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addPost, { error }] = useMutation(ADD_POST,
        {
            refetchQueries:
                [
                    GET_ALL_POSTS,
                    'getPosts'
                ]
        });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(postTitle, postText, postImgLink, Auth.getProfile().data.username);
        try {
            const { data } = await addPost({
                variables: {
                    title: postTitle,
                    body: postText,
                    imgLink: postImgLink,
                    username: Auth.getProfile().data.username,
                },
            });
            console.log(data);

            setPostText('');


        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'postTitle') {
            setPostTitle(value);
        } else if (name === 'postText' && value.length <= 280) {
            setPostText(value);
            setCharacterCount(value.length);
        } else if (name === 'postImgLink') {
            setPostImgLink(value);
        }
    }

    return (
        <div className='Submit'>
            <h1>Share your Build!</h1>

            {Auth.loggedIn() ? (
                <form className='Submit_form'
                    onSubmit={handleFormSubmit}>
                    <input
                        placeholder='Title'
                        value={postTitle}
                        className='Submit_form_title'
                        onChange={handleChange}
                        name='postTitle' />

                    <input
                        placeholder='Image Link'
                        value={postImgLink}
                        className='Submit_form_Img_Link'
                        onChange={handleChange}
                        name='postImgLink'
                         />
                    <textarea
                        id="postText"
                        className='Submit_form_text'
                        name="postText"
                        placeholder="This is where you Write stufffffffff"
                        rows="4"
                        onChange={handleChange}
                        required />
                    <div className='Submit_form_info'>
                        <p
                            className={`Submit_form_info_char-count ${characterCount === 280 || error ? 'text-danger' : ''}`}
                        >
                            Character Count: {characterCount}/280
                            {error && <span className='Submit_form_info_text-error'>Something went wrong...</span>}
                        </p>
                    </div>
                    <button className='Submit_form_btn' type='submit' >Add Build</button>
                </form>
            ) : (
                <p>
                    You need to be logged in to share your build. Please{' '}
                    <Link to='/login'>Login</Link> or <Link to='/signup'>Sign-up</Link>.
                </p>
            )}
        </div>
    );
}
