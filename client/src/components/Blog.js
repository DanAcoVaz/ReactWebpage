//import {data} from '../data.js';
import {React, useState, useEffect} from 'react';
import Post from './Post';

const Blog = () => {
    const [filterText, setFilterText] = useState("");
    const [data, setData] = useState([{id_post: 0, title: "", date: "", text: "", image: "", id_author: 0}]);

    function handleChange(e){
        setFilterText(e.target.value);
    }

    useEffect(() => {
        fetch('http://localhost:8000/posts')
            .then((res) => {
                if (!res.ok) { throw new Error('Network response was not ok') }
                return res.json();
            })
            .then((posts) => setData(posts))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return(
        <>
            <h1>Daniel's Best GoATs</h1>
            <div className="filter">
            <p>Search Title:</p> 
            <input type="text" value={filterText} onChange={handleChange}></input>
            </div>
            <div className="blog">
            {data.map((post) => (
                post.title.toLowerCase().includes(filterText.toLowerCase()) &&
                    <Post key={post.id_post} title={post.title} image={post.image} date={post.date} text={post.text} id_post={post.id_post}/>
            ))}
            </div>
        </>
    );
}

export default Blog;