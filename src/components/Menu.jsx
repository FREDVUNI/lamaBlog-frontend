import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Menu = ({cat}) =>{
    const [posts,setPosts] = useState([])

    useEffect(() =>{
        const getPosts = async() =>{
            try{
                const res = await axios.get(`/posts/?=${cat}`)
                setPosts(res.data)
            }
            catch(error){
                console.log(error)
            }
        }

        getPosts()
    },[cat])
    return(
        <div className="menu">
            <h1>You may also like</h1>
            {posts.map((post,index) =>(
                <div className="post" key={index}>  
                    <img src={`../uploads/${post?.img}`} alt="post"/>
                    <Link className="link" to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                </div>
            ))}

        </div>
    )
} 

export default Menu