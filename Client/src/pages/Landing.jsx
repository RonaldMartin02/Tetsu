import { useQuery } from '@apollo/client';
import Post from '../components/Post';
import { Link } from 'react-router-dom'; 
import './scss/Landing.scss';

// import { GET_ALL_POSTS } from '../utils/queries.js';

const posts=[{
    title: "title",
    username: "username",
    body: "description",
    imgLink: "https://i.imgur.com/U7ypdLo.png",
    _id: "6"
},
{
    title: "title",
    username: "username",
    body: "description",
    // imgLink: "https://i.imgur.com/U7ypdLo.png",
    _id: "2"
}
]

export default function Landing() {
    console.log("Landing");
    return(

        <div className='post'>
           {

            posts.map((post, index) => (
                <Post title={post.title} username={post.username} body={post.body} _id={post._id} imgLink={post.imgLink} key={index} />
            ))
            }
                </div>
)
}
//         fetchPolicy: "no-cache"
//     const { loading, data } = useQuery(GET_ALL_POSTS, {
//     }
//     );
//     const posts = data?.builds || [];
//     // console.log(posts);
//     posts.reverse();


//     if (loading) {
//         return <div>Loading...</div>;
//     }
//     if (posts.length === 0) {
//         return (<>
//             <h1>No posts yet</h1>
//             <div>
//                 <Link to="/build/create">Create a new post</Link>
//             </div>
//         </>
//         );
//     }
//     return (
//         //future development 
//         <div className='posts'>
//             {posts.map((post, index) => (

//                 <Post title={post.title} username={post.username} game={post.game} description={post.body} _id={post._id} key={index} />
//             ))}
//         </div>
//     );
// }