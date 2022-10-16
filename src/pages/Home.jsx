import React,{useState,useEffect} from 'react'
import { Link,useLocation } from "react-router-dom"
// import Sample from '../img/slide.png'
import axios from 'axios'

const Home = () => {

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html,"text/html")
        return doc.body.textContent
    }

    const [posts,setPosts] = useState([])
    const cat = useLocation().search

    useEffect(() =>{
        const getPosts = async() =>{
            try{
                const res = await axios.get(`/posts${cat}`)
                setPosts(res.data)
                window.scrollTo(0, 0)
            }
            catch(error){
                console.log(error)
            }
        }
        getPosts()
    },[cat])
    
    // console.log(posts)
  return (
    <div className="home">
        <div className="posts">

            {posts && posts.map((post,index) =>(
            <div className="post" key={index}>
                <div className="img">
                    <img src={`../uploads/${post?.img}`} alt=""/>
                </div>
                <div className="content">
                    <Link className="link">
                        <h1>{post.title}</h1>
                    </Link>
                    <p>
                        {getText(post.desc)}
                    </p>
                    <Link className="link" to={`/post/${post.id}`}>
                        <button>Read more</button>
                    </Link>
                </div>
            </div>
            ))}

        </div>
    </div>
  )
}

export default Home