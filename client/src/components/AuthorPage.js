import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function AuthorPage(){
    const {id_author} = useParams();
    const [author, setAuthor] = useState({id_author:0, name:"", lastname:"", date_of_birth:"", email:"", phone_number:""});

    useEffect(() => {
        fetch('http://localhost:8000/authors/'+id_author)
        .then((res) => res.json())
        .then((data) => setAuthor(data));
    }, [id_author])

    return(
        <div className="post">
            <h2>{author.name+' '+author.lastname}</h2>
            <br/>
            <h4>{'Date of Birth: '+author.date_of_birth}</h4>
            <h5>{'Email: '+author.email}</h5>
            <h5>{'Phone Number: '+author.phone_number}</h5>
        </div>
    );
}