import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function PostPage(){
    const {id_post} = useParams();
    const [post, setPost] = useState({id_post:0, image:"", text:"", title:"", date:"", id_author:0});
    const [author, setAuthor] = useState({id_author:0, name:"", lastname:"", date_of_birth:"", email:"", phone_number:""});

    useEffect(() => {
        fetch('http://localhost:8000/posts/'+id_post)
        .then((res) => res.json())
        .then((data) => setPost(data));

        fetch('http://localhost:8000/authors/'+post.id_author)
        .then((res) => res.json())
        .then((data) => setAuthor(data));
    }, [id_post, post.id_author])

    return(
        <div>
            <h1>{post.title}</h1>
            {post.image && <img src={require(`../images/${post.image}`)} alt=""></img>}
            <Link to={"/blog/author/"+post.id_author}>
                <h2>{'Author: '+author.name+' '+author.lastname}</h2>
            </Link>
            <h2>{post.date}</h2>
            <p>{post.text}</p>
        </div>
    );
}