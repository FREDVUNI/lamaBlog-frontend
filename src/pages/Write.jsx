import React,{useState} from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import axios from "axios"
import { useLocation,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Write = () => {
    const navigate = useNavigate()
    const state = useLocation().state 
    const [value,setValue] = useState(state?.desc || "")
    const [title,setTitle] = useState(state?.title || "")
    const [cat,setCat] = useState(state?.cat || "")
    const [file,setFile] = useState(null)

    const upload = async() =>{
        try{
            const data = new FormData()
            data.append("file",file)
            const res = await axios.post("/upload",data)
            return res.data;
            // console.log(res.data)
        }
        catch(error){
            toast.error(error.response.data,{
                position:toast.POSITION.BOTTOM_RIGHT
            })
            console.log(error)
        }
  }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const imgURL = await upload()

        try{
            const res = state ? await axios.put(`/posts/${state.id}`,{
                title,
                desc:value,
                cat,
                img:file?imgURL: ""
            }): await axios.post(`/posts`,{
                title,
                desc:value,
                cat,
                img:file?imgURL: ""
            })
            navigate("/")

            state ? toast.success(res.data,{
                position:toast.POSITION.BOTTOM_RIGHT
            }):toast.success(res.data,{
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
  return (
    <form encType="multipart/form-data">
    <div className="add">
        <div className="content">
            <label>Title</label>
            <input type="text" name="title" value={title} placeholder="Enter title" onChange={ e => setTitle(e.target.value) }/>
            <label>Description</label>
            <div className="editorContainer">
                <ReactQuill name="desc" className="editor" theme="snow" value={value} onChange={setValue}/>
            </div>
        </div>
        <div className="menu">
            <div className="item">
                <h1>Publish</h1> 
                <span>
                    <strong>Status: </strong>Draft
                </span>
                <span>
                    <strong>Visibility: </strong>Public
                </span>
                <input style={{display:"none"}} type="file" name="file" id="file" accept="image/*" onChange={ e => setFile(e.target.files[0])}/>
                <label className="file" htmlFor="file">upload image</label>
                <div className="buttons">
                    <button>Save as draft</button>
                    <button onClick={handleSubmit}>Publish</button>
                </div>
            </div>
            <div className="item">
                <h1>Category</h1>
                <div className="cat">
                    <input checked={cat === 'art' } type="radio" name="cat" value="art" id="art" onChange={ e => setCat(e.target.value)}/>
                    <label htmlFor="art">Art</label>
                </div>
                <div className="cat">
                    <input checked={cat === 'science' } type="radio" name="cat" value="science" id="science" onChange={ e => setCat(e.target.value)}/>
                    <label htmlFor="science">Science</label>
                </div>
                <div className="cat">
                    <input checked={cat === 'technology' } type="radio" name="cat" value="technology" id="technology" onChange={ e => setCat(e.target.value)}/>
                    <label htmlFor="technology">Technology</label>
                </div>
                <div className="cat">
                    <input checked={cat === 'cinema' } type="radio" name="cat" value="cinema" id="cinema" onChange={ e => setCat(e.target.value)}/>
                    <label htmlFor="cinema">Cinema</label>
                </div>
                <div className="cat">
                    <input checked={cat === 'design' } type="radio" name="cat" value="design" id="design" onChange={ e => setCat(e.target.value)}/>
                    <label htmlFor="design">Design</label>
                </div>
                <div className="cat">
                    <input checked={cat === 'food' } type="radio" name="cat" value="food" id="food" onChange={ e => setCat(e.target.value)}/>
                    <label htmlFor="food">Food</label>
                </div>

            </div>
        </div>
    </div>
    </form>

  )
}

export default Write