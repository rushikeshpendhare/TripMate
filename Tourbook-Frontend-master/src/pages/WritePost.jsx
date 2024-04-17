import React, { useContext, useState } from 'react'
import { PenAdd,AddSquare, ArrowCircleLeft2} from 'iconsax-react'
// import pic from '../assets/bg.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Context } from '../context/Context';
import { url } from '../url';


function WritePost() {
  const[post,setPost] = useState();
  const[title,setTitle] = useState();
  const [file,setFile] = useState(null)
  const {user} =  useContext(Context)

  const handlePost = async(e)=>{
    e.preventDefault();
    const newPost = {
      title:title,
      content:post,
      username:user,
      
    }
    const data = new FormData();
    if(file){
      const fileName = Date.now()+file.name;
      data.append("name",fileName);
      data.append("file",file);
      newPost.photo = fileName;
    }
    try {
      await axios.post("/upload",data)
    } catch (error) {
      
    }
    try{

      const response = await axios.post(`${url}posts`,newPost);
      alert("Posted Succesfully")
      console.log(response)
    }catch(err){
      console.log(err);
    }
      
    window.location.replace("/")
  }

  return (
    <div className='flex flex-col items-center'>
      <span className='w-full justify-begin'>

        <Link to={"/"}>
        <ArrowCircleLeft2 size="32" color="#03C988" variant="Bold" />
      </Link>
      </span>
      <span className='flex flex-row justify-center text-xl font-bold mt-5'>
      
      Write a post  <PenAdd className='mx-5' size="25" color="#03C988" variant="Bold"/>
      </span>
      <button className='mt-5'>
      </button>
      { file && 
      (<img className='w-2/3 h-[400px] rounded-xl' src={URL.createObjectURL(file)} alt="" />)}
      <form className='w-2/3 h-full flex flex-col items-center' onSubmit={handlePost}>
        <label htmlFor="fileInput">

<AddSquare size = "35" color="#03C988" variant="Bold"/>
      <p>Add an image</p>
        </label>
<input type="file" id='fileInput' className='hidden' onChange={(e)=>setFile(e.target.files[0])} />

      <input type='text' placeholder='Title' className='p-2 mt-5 rounded text-xl outline-pink-400' onChange={(e)=>setTitle(e.target.value)} />
      <textarea placeholder="What's your story ?" className='mt-10 w-2/3  outline-blue-400 p-2 h-[200px]' onChange={(e)=>setPost(e.target.value)} />
      <button onClick={handlePost} className="rounded text-xl bg-emerald-400 hover:bg-emerald-600 text-white py-1 px-3 m-2">
          Post
        </button>
      </form>
    </div>
  )
}

export default WritePost
