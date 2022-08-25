import '../css/homepage/Hotsearch.css'
import React, { Component } from 'react'
import Button from '../component/ComponentsBtn'
import { useState,useEffect } from "react";
import { supabase } from "../client";
import { useParams } from 'react-router-dom';
function Hotsearch(){
  // const [Nametree] =useParams([])
  // console.log('a',Nametree);
const [posts,setposts] = useState([]);

//trả về bài đăng từ API supabase
//const [posts,setposts] = useState({Nametree: ""});
//const {Nametree} = useState;([])
//nạp bài đăng
useEffect(()=>{
    fetchPost()
    // filterProduct()
},[])
//từ supabase
async function fetchPost(){
    const {data} = await supabase
    .from('Tree')
    .select("*")
    //.textSearch('Nametree', Nametree)
   //.eq('Nametree', 'Cây xoài')
    //.eq('View','40.000')
setposts(data)
console.log('a: ', data)
}
const filterProduct = (data)=>{
  const updateLisst = posts.filter(x=> x.Nametree === data)
  setposts(updateLisst);
  console.log('b: ',updateLisst)
}
    return (
      
      <section className="container user-grid">
      <div className="hotsearch body1">
      {posts.map(posts=>(
        <div className="body1-item"  key={posts.id}>
          <img className="img_item" src={posts.Image} alt="hello" />
          <h4 className="descrep">Tìm hiểu về :</h4>
          <h3 className="title">{posts.Nametree}</h3>
        </div>
      ))}
      </div>
      <nav className="nav">
        <h3 className="conten-nav">Các chuyên mục</h3>
        <ul>
          <li>
          </li>
          <li><button onClick={()=>filterProduct()}>Cây cảnh</button></li>
            <li><button onClick={()=>filterProduct('Cây xoài')}>Cây văn phòng</button></li>
          <li><button >Cây văn phòng</button></li>
          <li><button>Cây ăn quả</button></li>
          <li><button>Cây thuốc</button></li>
          <li><button>Cây làm gỗ</button></li>
          <li><button>Cây thiên nhiên</button></li>
        </ul>
      </nav>
    </section>
    )
  }
export default Hotsearch;

