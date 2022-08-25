import '../css/homepage/Body1.css'
import React from "react";
// import {supabase} from "./supabase";
// import {useState, useEffect, useContext, createContext} from "react";
// import AddPost from '../addPost/AddPost';
import { useState,useEffect } from "react";
import { supabase } from "../client";
import { Link } from 'react-router-dom';
function Body1(){
  //mảng bài đăng sẽ xử lý
  const [posts,setposts] = useState([]);
  //trả về bài đăng từ API supabase
  const [post,setpost] = useState({Nametree: "" , link: "", describe:"", Image:""});
  const {Nametree,link,describe,Image} = post;
  
  //nạp bài đăng
  useEffect(()=>{
      fetchPost()
  },[])
  //từ supabase
  async function fetchPost(){
      const {data} = await supabase
      .from('Tree')
      .select()

  setposts(data)
  console.log('data: ', data)
  }
  //tạo post mới
 
  return(

    <section className="body1 container">
            { 
              posts.map(post=>( 
              <a key={post.Idtree} href={post.Idtree} >
              <div className="body1-item" key={post.id}>
              <img className="img_item" src={post.Image}  alt="img" />
              <h4 className="descrep">Tìm hiểu về :</h4>
              <h3 className="title" >{post.Nametree}</h3>
              </div>
              </a>
              ))
            }
          </section> 
  )
}
export default Body1;
