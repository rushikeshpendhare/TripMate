import React from 'react'
import pic from '../assets/bg.jpg'
import { Link } from 'react-router-dom'
import { url } from '../url'
function Blog({post}) {
  const uploadLink = `${url}images/`
  return (
    <div className='sm:w-1/4 sm:h-[500px] h-[400px] w-full  flex flex-col border-2 border-solid border-sky-200 rounded-xl m-5 ring-2 ring-emerald-400 items-center bg-gradient-to-r from-sky-400 to-emerald-500 hover:from-emerald-500 hover:to-sky-400 font-serif text-white'>
        

      <img src={post.photo ? uploadLink+ post.photo : pic }  className='sm:h-2/3 h-1/2 w-full rounded-xl'/>
      <h4 >{post.username}</h4>
      <h4>{new Date(post.createdAt).toDateString()}</h4>
      <h2 className='text-[30px] font-extrabold'>{post.title}</h2>

      <p className='px-3 line-clamp-4'> {post.content}</p>
      <Link to={`/post/${post._id}`}>
      <button className='bg-pink-400 p-1 rounded hover:bg-pink-600 my-2'>Read more</button>
    </Link>

    </div>
  )
}

export default Blog
