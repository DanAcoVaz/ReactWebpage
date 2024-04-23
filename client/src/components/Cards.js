export function Card({image, title, date}){
    return(
      <div className="card">
        <img src={require("../images/"+image)} alt=""></img>
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
    );
}
  
export function CardList({posts, text}){
    const list = posts.map(post =>
      post.title.includes(text) &&  
      <Card title= {post.title} date= {post.date} image= {post.image} key= {post.id}></Card>
    )
    return(
      <div>
        {list}
      </div>
    );
}