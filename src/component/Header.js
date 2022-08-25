import React, { useState } from 'react';
import '../css/Header.css'
import { useParams } from 'react-router-dom'; 
import { Link } from "react-router-dom";
import { supabase } from '../client';
import { useEffect } from "react";
import Searchitem from './Searchitem';
import Itemlistconten from './Itemlistconten';
export default function Header(props) {

  // const {} =useParams();
  function handlesearchitem(newfilter){
    console.log('new:', newfilter);

  }
  
    const [Tree ,setTree]= useState ([]);
    const [post, setPost] = useState({ Idtree: "", Nametree: ""})
    useEffect (() =>{
      fetchPosts()
     
    },[])
    async function fetchPosts(){
      const { data } = await  supabase
      .from('Tree')
      .select ('*')
      //.eq('Idtree')
      setTree(data)
      console.log("da: ",data)
    }
    const filterProduct = (data)=>{
      const updateLisst = data.filter((x)=> x.Nametree === handlesearchitem)

      setTree (updateLisst);
      console.log('b: ', updateLisst)
    }
    const rows = Tree.map((post) => ({
      id: post.Idtree,
      Nametree: post.Nametree
  }));

  
    return (
        <header id="header" className="container user_flex">
        <div className="user_flex header__left">
          <div className="logo">
            <h3 className="logo-text"><span>wiki</span>Trees</h3>
          </div>
          <Searchitem  onSubmit ={handlesearchitem} />
          {/* <button onSubmit={handlesearchitem} className="btn btn-search"><i className="fa-solid fa-magnifying-glass" /></button> */}
          {/* <form action="#" className="user_flex form-search">
           <input type="text" placeholder="Tìm kiếm bất cứ loài cây nào" className="input-search" />
            <button className="btn btn-search"><i className="fa-solid fa-magnifying-glass" /></button>
          </form> */}
          
        </div>
        <div className="menu-right">
          <a><i className="fa-solid fa-user" /></a>
          <a><i className="fa-solid fa-cart-shopping" /></a>
          <a><i className="fa-solid fa-message" /></a>
        </div>
        {/* { Tree.map((item) => {
        return(
        <h3 >helo</h3>
        )})} */}
      </header>
    )
}
