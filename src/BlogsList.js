import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogsList = ({ blogs }) => {
    //const blogsm = props.blogs;  
    //const title = props.title;
    return (
        <div className="BlogList">
            {blogs.map((blog) => (
                <div className="blogpreview" key={blog.id}>

                    <div className="blogpreview1"><Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.author}</h2>
                        <h4>{blog.title}</h4>
                    </Link>
                  
                    </div>
                    <div className="blogpreview2"><Link to={`/blogs/${blog.id}`}>
                        <button>Read more..</button>
                    </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogsList;