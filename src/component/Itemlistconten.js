import React from 'react'
import '../css/Itemlistconten.css'
import { Link } from 'react-router-dom'
export default function Itemlistconten({item, Tree}) {
    const {Idintroduction,Idtree,Imageconten,Nameconten,View,Author,Writedate} = item
    const numbers = [Idintroduction,Idtree];
  return (
    <Link key={item.numbers} to={`${item.Idintroduction}`} >
    <article key={item.Idintroduction} className="conten-container-2">
      <img src={item.Imageconten}/>
      <div className="conten-list">
        <p className="title-container-2">{item.Nameconten}</p>
        <div className="thongtin-list">
          <div className="luotxem">
            <i className="fa-solid fa-eye" />
            <p className="conten-p">{item.View} lượt xem</p>
          </div>
          <div className="nguoiviet">
            <i className="fa-solid fa-award" />
            <p className="conten-p">{item.Author}</p>
          </div>
        </div>
        <div className="thoigian">
          <i className="fa-solid fa-clock" />
          <p className="conten-p">Cập nhật ngày {item.Writedate}</p>
        </div>
      </div>
    </article>
  </Link>
  )
}
