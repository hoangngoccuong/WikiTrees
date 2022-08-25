import React, { Component } from 'react'
import '../css/homepage/Header.css'
import Searchitem from '../component/Searchitem';

export default class Header extends Component {
  
  render() {
    function handlesearchitem(newfilter){
      console.log('new:', newfilter);
    }
    return (
      <header id="header" className="container user_flex">
      <div className="user_flex header__left">
        <div className="logo">
          <a className="logo-text"><span>wiki</span>Trees</a>
        </div>
        <Searchitem onSubmit={handlesearchitem} />
        {/* <form action="#" className="user_flex form-search">
          <input onSubmit={handlesearchitem} type="text" placeholder="Tìm kiếm bất cứ loài cây nào" className="input-search" />
          <button onSubmit={handlesearchitem} className="btn btn-search"><i className="fa-solid fa-magnifying-glass" /></button>
        </form> */}
      </div>
      {/* <div className="menu-right">
        <div className="menu">
          <span className="menu-close">Close Button</span>
          <button className="menu-open-group">
            <span className="menu-open"> <i className="fa-solid fa-user" /></span>
            <div className="menu-panel">
              <div className="panel-item">HTML, CSS, JavaScript</div>
              <div className="panel-item">ReactJS, Redux</div>
              <div className="panel-item">NodeJS, Express</div>
            </div>
          </button>
        </div>
        <div className="menu">
          <span className="menu-close">Close Button</span>
          <button className="menu-open-group">
            <span className="menu-open"> <i className="fa-solid fa-cart-shopping" /></span>
            <div className="menu-panel">
              <div className="panel-item">HTML, CSS, JavaScript</div>
              <div className="panel-item">ReactJS, Redux</div>
              <div className="panel-item">NodeJS, Express</div>
              <input type="text" className="input-item" placeholder="Tìm kiếm khoá học" />
            </div>
          </button>
        </div> */}
        {/* <div className="menu">
          <span className="menu-close">Close Button</span>
          <button className="menu-open-group">
            <span className="menu-open"> <i className="fa-solid fa-message" /></span>
            <div className="menu-panel">
              <div className="panel-item">HTML, CSS, JavaScript</div>
              <div className="panel-item">ReactJS, Redux</div>
              <div className="panel-item">NodeJS, Express</div>
              <input type="text" className="input-item" placeholder="Tìm kiếm khoá học" />
            </div>
          </button>
        </div>
      </div> */}
    </header>
    )
  }
}
