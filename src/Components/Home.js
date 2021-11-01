import Navbar from "./Navbar";
import {useState, useEffect} from "react";
import Blog from "./Blog";

const Home = () => {

  //    const [blogs, changeBlogs] = useState(
  //   [
  //     {id:1,title:"Death Note",idb_rating:"9.1", preface:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum vero consequuntur rerum repellendus optio corporis odit rem magni voluptates eum fugit nemo, cum recusandae perspiciatis in eligendi quasi numquam?", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque nobis enim nisi eum error voluptas nemo, repellendus rerum dolor veniam suscipit, officia, dolorem quis? Iure tenetur veniam suscipit quaerat."},
  //     {id:2,title:"Demon Slayer",idb_rating:"9.1", preface:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum vero consequuntur rerum repellendus optio corporis odit rem magni voluptates eum fugit nemo, cum recusandae perspiciatis in eligendi quasi numquam?", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque nobis enim nisi eum error voluptas nemo, repellendus rerum dolor veniam suscipit, officia, dolorem quis? Iure tenetur veniam suscipit quaerat."},
  //     {id:3,title:"Tokyo Revengers",idb_rating:"9.1", preface:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum vero consequuntur rerum repellendus optio corporis odit rem magni voluptates eum fugit nemo, cum recusandae perspiciatis in eligendi quasi numquam?", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque nobis enim nisi eum error voluptas nemo, repellendus rerum dolor veniam suscipit, officia, dolorem quis? Iure tenetur veniam suscipit quaerat."},
  //     {id:4,title:"Jujutsu Kaisen",idb_rating:"9.1", preface:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum vero consequuntur rerum repellendus optio corporis odit rem magni voluptates eum fugit nemo, cum recusandae perspiciatis in eligendi quasi numquam?", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque nobis enim nisi eum error voluptas nemo, repellendus rerum dolor veniam suscipit, officia, dolorem quis? Iure tenetur veniam suscipit quaerat."}
  //   ]
  // )


  // UNCOMMENT STARTS
  const [blogs, changeBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/Anime')
      .then(response=>{
        return response.json()
      })
      .then((data)=>{console.log(data);
        changeBlogs(data)
        console.log("This is ", blogs)
      })
   },[])

   useEffect(() => {
     
   }, [])
  // UNCOMMENT ENDS
  const handleDel = (id)=>
  {
    const reBlogged = blogs.filter((b)=>b.id!==id);
    console.log(reBlogged);
    changeBlogs(reBlogged);
  } 

  // array_name.filter()
  // map
// array_name
  
  
    return ( 

        <div>
                 <Navbar/>
                 {/* {blogs.map((blog)=><Blog id={blog.id} 
                    title={blog.title} 
                    rating={blog.idb_rating}
                    content={blog.content}
                    handleDel={handleDel}/>
                    )
                } */}

                 {/* <img src="./Images/demon slayer.jfif" alt="" /> */}
                {/* {  blogs && blogs.map((blog)=><Blog id={blog.id} 
                    title={blog.title} 
                    rating={blog.idb_rating}
                    content={blog.content}
                    handleDel={handleDel}/>
                    )
                } */}
                {  blogs===null?(<div>loading</div>): (blogs.map((blog)=><Blog id={blog.id} 
                    title={blog.title} 
                    rating={blog.idb_rating}
                    content={blog.content}
                    handleDel={handleDel}/>)
                    )
                }
{/* 

  a===2?<div>2</div>:<div>not 2</div> 
 */}

        </div>
       
     );
    }
 
export default Home;




// Promises and Asynch Functions