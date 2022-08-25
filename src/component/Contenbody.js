import React from 'react';
import '../css/Contenbody.css';
// import Itemlistconten from './Itemlistconten';
import Listnav from './List-nav.js';
import { useParams } from 'react-router'
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../client';
import { useSelector, useDispatch } from 'react-redux'

export default function Contenbody(props) {
     console.log("dd",props)
  const { Idintroduction } = useParams();
  console.log("tb: ",Idintroduction)
  const{Idtree}= useParams();
  console.log("ta: ",Idtree)
  const [Writedetails, setData] = useState([]);
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {

    const { data } = await supabase
      .from("Writedetails")
      .select("*,Introduction(Idintroduction,Nameconten,Author,Imageconten)")
      .eq("Idintroduction",Idintroduction)
      setData(data)
      console.log("data: ",data)
  }
  return (
   Writedetails.map((item,index)=>{
    return (
      
        <div key={item.Idintroduction}  className="container">    
          <Listnav /> 
        {/* <nav className="nav">
          <ul>
          <h3 className="conten-nav">Các chuyên mục</h3>
            <li><button>Cây cảnh</button></li>
            <li><button>Cây văn phòng</button></li>
            <li><button>Cây ăn quả</button></li>
            <li><button>Cây thuốc</button></li>
            <li><button>Cây làm gỗ</button></li>
            <li><button>Cây thiên nhiên</button></li>
          </ul>
        </nav> */}  
          {/* <Itemcontenbody  /> */}
          <article>
           <h3>{item.Introduction.Nameconten}</h3>
           <p className="tacgia">{item.Introduction.Author}</p>
           <p className="conten">Tham khảo</p>
           <p className="title">{item.Titlewrite}</p>
         </article>
         <article className="conten-container">
           <img src={item.Introduction.Imageconten}/>
           <p src='https: //www.phpbb.com' className="title-container" >{item.Contentitle}</p>
         </article> 
        </div>    
    )}) 
  ) 
}
