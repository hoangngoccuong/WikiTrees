import React from 'react';
import '../css/Listconten.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../client';
import Itemlistconten from './Itemlistconten';
import { useParams } from 'react-router-dom';
import Searchitem from './Searchitem';

export default function Header(Tree ,props) {
  const {Idtree} =useParams();
  const{Nametree} =useParams();
  const{} =useParams();
  const{Searchitem} =useParams();
 
 // const[data]= useState([]);
  const [Introduction ,setIntroduction]= useState ([]);
  const [ data,setFilter] = useState([])
  useEffect (() =>{
    fetchPosts()
    fetch()
  },[])
  async function fetchPosts(){
    const { data } = await  supabase
    .from('Introduction')
    .select ('*')
    .eq('Idtree',Idtree)
    setIntroduction(data)
    console.log("data: ",data)
  }
  async function fetch(){
    const { data } = await  supabase
    .from('Tree')
    .select ('*')
    .textSearch('Nametree',Nametree)
    setFilter(data)
    console.log("da: ",data)
  }

  const filterProduct = (data)=>{
    const updateLisst = data.filter((x)=> x.Nametree === data )
   
    setIntroduction (updateLisst);
    console.log('b: ', Nametree)
  }


    return (
        <div className="container">
        <nav className="nav">
          <h3 className="conten-nav">Các chuyên mục</h3>  
          <ul>
            <li><button onClick={()=>filterProduct(data)}>Cây cảnh</button></li>
            <li><button onClick={()=>filterProduct('Cây xoài')}>Cây văn phòng</button></li>
            <li><button>Cây ăn quả</button></li>
            <li><button>Cây thuốc</button></li>
            <li><button>Cây làm gỗ</button></li>
            <li><button>Cây thiên nhiên</button></li>
          </ul>        
        </nav>
      { Introduction.map((item) => {
        return(
        // <a key={item.id}>
        //   <article className="conten-container">
        //     <img src="/../anhlist.png" />
        //     <div className="conten-list">
        //       <p className="title-container">{item.Nametree}</p>
        //       <div className="thongtin-list">
        //         <div className="luotxem">
        //           <i className="fa-solid fa-eye" />
        //           <p className="conten-p">3000 Lượt xem</p>
        //         </div>
        //         <div className="nguoiviet">
        //           <i className="fa-solid fa-award" />
        //           <p className="conten-p">Alex-sindra</p>
        //         </div>
        //       </div>
        //       <div className="thoigian">
        //         <i className="fa-solid fa-clock" />
        //         <p className="conten-p">Cập nhật 3 ngày trước</p>
        //       </div>
        //     </div>
        //   </article>
        // </a>)
        
        <Itemlistconten key={item.Idintroduction} id={item.Idtree} item={item} Tree={Tree} />
      
        )})}
      </div>
    )
}
