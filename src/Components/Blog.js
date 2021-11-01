
const Blog = (props) => {
    return ( 
        <>
            <div className={`blog ${props.id}`} key={props.id}>
            <h3>{props.title}</h3>
            <h4>{props.rating}</h4>
            <p>{props.content}</p>
            <button onClick={()=>props.handleDel(props.id)}>Delete</button>
          </div>
        </>     
    );
}
 
export default Blog;