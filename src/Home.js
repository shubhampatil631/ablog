import BlogsList from './BlogsList.js';
import useFetch from './useFetch.js';
const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/Blogs');
    return (
        <div className='Home'>
            {error && <div>{error}</div>}
            {isPending && <div>Lodding....</div>}
            {blogs && <BlogsList blogs={blogs} />}
        </div>
    );
}
export default Home;