import React from 'react'
import '../css/Itemcontenbody.css';
import { useParams } from 'react-router'
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../client';
import { useSelector, useDispatch } from 'react-redux'
export default function Itemcontenbody(props) {
  const { Idintroduction } = useParams();
  const [Writedetails, setData] = useState([]);
  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {

    const { data } = await supabase
      .from('Writedetails')
      .select('*')
       .eq('Idintroduction', Idintroduction)
    setData(data)
    console.log("data", data)

  }
  Writedetails.map((item,index)=>{
  return (
    <div>
   <article>
    <h3>{item.Nametree}</h3>
    <p className="tacgia">Cùng viết bởi Andrew Carberry, MPH</p>
    <p className="conten">Tham khảo</p>
    <p className="title">{item.Contentitle}</p>
    </article>
    <article className="conten-container">
      <h3 className="title-container">{item.Contentitle}</h3>
    </article>
    </div>
  
  )
  })
}
