import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage(){
    const {id_post} = useParams();
    const [post, setPost] = useState({id_post:0, image:"", text:"", title:"", date:"", id_author:0});

    useEffect(() => {
        fetch('http://localhost:8000/posts/'+id_post)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }, [id_post])

    return(
        <div>
            <h1>{post.title}</h1>
            {post.image && <img src={require(`../images/${post.image}`)} alt=""></img>}
            <h2>{post.id_author}</h2>
            <h2>{post.date}</h2>
            <p>{post.text}</p>
        </div>
    );
}