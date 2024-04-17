import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import vid from "../assets/bgvideo.mp4";
import "./Homepage.css";
import Blogs from "../components/Blogs";
import oyo from "../assets/oyo.png";
import goib from "../assets/goibipng.png";
import mmt from "../assets/mmt.png";
import yatra from "../assets/yatra.png";
import Lottie from 'lottie-react'
import travel from '../assets/travel.json'
import traveller from '../assets/traveller.json'
import { useState } from "react";
import axios from 'axios'
import Footer from "../components/Footer";
import { url } from "../url";





function Homepage() {

  const[load,setLoad] = useState(false);
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const fetchPosts = async()=>{

      await axios.get(`${url}posts`).then((res)=>{
        setPosts(res.data);
        setLoad(true);
        // console.log(res)
      }).catch((err)=>
      alert(err.response.data)
      );
      // console.log(response); 
    } 
    fetchPosts();
  },[]) 
  return (
    <>
    <div className="flex flex-col w-full h-screen items-center ">
      <div>
        <span className="w-full left-0 right-0">
          <Navbar />
        </span>
        <div className="flex ">
          <video autoPlay loop muted className="w-screen   z-[-2]  videobg">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>

    <h1 className="font-serif font-black sm:text-[100px] text-[30px] text-center text-gray-500">travel the world with our partners</h1>
    <Lottie className="h-40 w-40 sm:h-50 sm:w-50" animationData={travel}></Lottie>
    <span className="flex flex-row justify-around mt-10 mb-10" >
      <img className="sm:h-20 sm:w-20 h-10 w-10 mx-5" src={mmt}alt="mmt" />
      <img className="sm:h-20 sm:w-20 h-10 w-10 mx-5" src={oyo}alt="oyo" />
      <img className="sm:h-20 sm:w-20 h-10 w-10 mx-5" src={yatra} alt="yatra"/>
      <img className="sm:h-20 sm:w-40 h-10 w-10 mx-5" src={goib}alt="gpibibo" />
    </span>
    <h1 className="font-serif font-black sm:text-[100px] text-[30px] text-center text-gray-500 mb-10">Share your stories</h1>
    <Lottie className="h-40 mb-10 w-40" animationData={traveller}></Lottie>

{
load?
      <Blogs posts={posts} />
      :
      <p className="flex justify-center font-serif text-xl mt-5 mb-10">Loading ...</p>
}
      
      <Footer/>
    </div>
    
    </>
  )
}

export default Homepage;
