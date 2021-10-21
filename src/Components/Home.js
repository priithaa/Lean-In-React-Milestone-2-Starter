import Navbar from "./Navbar";
import {useState} from "react";
import Blog from "./Blog";

const Home = () => {

     const [blogs, changeBlogs] = useState(
    [
      {id:1,title:"Death Note",idb_rating:"9.1", preface:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum vero consequuntur rerum repellendus optio corporis odit rem magni voluptates eum fugit nemo, cum recusandae perspiciatis in eligendi quasi numquam?", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque nobis enim nisi eum error voluptas nemo, repellendus rerum dolor veniam suscipit, officia, dolorem quis? Iure tenetur veniam suscipit quaerat."},
      {id:2,title:"Demon Slayer",idb_rating:"9.1", preface:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum vero consequuntur rerum repellendus optio corporis odit rem magni voluptates eum fugit nemo, cum recusandae perspiciatis in eligendi quasi numquam?", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque nobis enim nisi eum error voluptas nemo, repellendus rerum dolor veniam suscipit, officia, dolorem quis? Iure tenetur veniam suscipit quaerat."},
      {id:3,title:"Tokyo Revengers",idb_rating:"9.1", preface:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum vero consequuntur rerum repellendus optio corporis odit rem magni voluptates eum fugit nemo, cum recusandae perspiciatis in eligendi quasi numquam?", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque nobis enim nisi eum error voluptas nemo, repellendus rerum dolor veniam suscipit, officia, dolorem quis? Iure tenetur veniam suscipit quaerat."},
      {id:4,title:"Jujutsu Kaisen",idb_rating:"9.1", preface:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum vero consequuntur rerum repellendus optio corporis odit rem magni voluptates eum fugit nemo, cum recusandae perspiciatis in eligendi quasi numquam?", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque nobis enim nisi eum error voluptas nemo, repellendus rerum dolor veniam suscipit, officia, dolorem quis? Iure tenetur veniam suscipit quaerat."}
    ]
  )
    return ( 


        <div>
                 <Navbar/>

                 <img src="./Images/demon slayer.jfif" alt="" />

                {
                    blogs.map((blog)=><Blog id={blog.id} title={blog.title} rating={blog.idb_rating} content={blog.content}/>
                    )
                }
        </div>
       
     );
    }
 
export default Home;