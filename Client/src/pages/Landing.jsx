import { useQuery } from '@apollo/client';
import Post from '../components/Post.jsx';
import './scss/Landing.scss';
import { Link } from 'react-router-dom';
import { GET_ALL_POSTS } from '../utils/queries.js';

export default function Landing() {
    console.log("Landing")
        ; const { loading, data } = useQuery(GET_ALL_POSTS, {
            fetchPolicy: "no-cache"
        }
        );
        const posts = data?.posts || [];
    if (loading) {
        return <div>Loading...</div>;
    }
    if (posts.length === 0) {
        return (<>
            <h1>No posts yet</h1>
            <div>
                <Link to="/">Create a new post</Link>
            </div>
        </>
        );
    }
    
    console.log(posts);
    posts.reverse();
    return (

        <div className='post'>
            {

                posts.map((post, index) => (
                    <Post title={post.title} username={post.username} body={post.body} _id={post._id} imgLink={post.imgLink} key={index} />
                ))
            }
        </div>
    )
}