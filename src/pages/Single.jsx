import React,{useState,useEffect,useContext} from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import moment from 'moment'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import Menu from "../components/Menu"
import axios from 'axios'
import { AuthContext } from "../context/AuthContext"
import { toast } from 'react-toastify'

const Single = () => {

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html,"text/html")
        return doc.body.textContent
    }

    const postId = useLocation().pathname.split("/")[2]
    const [post,setPost] = useState({})
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() =>{
        const getPost = async() =>{
            try{
                const res = await axios.get(`/posts/${postId}`)
                setPost(res.data)
                window.scrollTo(0, 0)

            }
            catch(error){
                console.log(error)
            }
        }

        getPost()
    },[postId])

    const handleDelete = async() =>{
        try{
           const res = await axios.delete(`/posts/${postId}`)
           navigate("/")
           toast.success(res.data,{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
        }
        catch(error){
            toast.error(error.response.data,{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
            console.log(error)
        }
    }
    // console.log(post.uid)
    return (
        <div className="single">
            <div className="content">
                <img src={`../uploads/${post?.img}`} alt=""/>
                 <div className="user">
                    {post.userImg && <img src={post?.userImg} alt=""/>}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date_created).fromNow()}</p>
                    </div>
                    { currentUser.id === post.uid &&
                    <div className="edit">
                        <Link to={`/write?edit=${post.id}`} state={post}>
                            <img src={Edit} alt=""/>
                        </Link>
                        <img onClick={handleDelete} src={Delete} alt=""/>
                    </div>
                    }
                </div>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
            </div>
            <Menu cat={post.cat}/>
        </div>
    )
}

export default Single
