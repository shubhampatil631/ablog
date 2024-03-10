import { useParams } from 'react-router-dom';
import useFetch from './useFetch.js';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/Blogs/' + id);
    const handelClick = () => {
        fetch('http://localhost:8000/Blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return (
        <div className='Blog-details'>
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h1>{blogs.title}</h1>
                    <p>Written by {blogs.author}</p>
                    <div>
                        {blogs.body}
                    </div>
                    <div className='delete-blog'>
                        <button onClick={handelClick}>delete</button>
                    </div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;