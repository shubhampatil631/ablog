import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(''); 
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/Blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsPending(false);
            history.push('/');
        })

    }
    return (
        <div className="Create">
            <form onSubmit={handleSubmit}>
                <label><h4>Blog Title</h4></label>
                <input className="blog-title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /><br></br>
                <label><h4>Blog Body</h4></label>
                <input
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                /><br></br>
                <label><h4>Blog Author</h4></label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                /><br></br>
                {!isPending && <button>add Blog</button>}
                {isPending && <button disabled>added...</button>}
            </form>

        </div>
    );
}

export default Create;