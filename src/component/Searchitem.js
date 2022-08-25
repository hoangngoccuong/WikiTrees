import React, { useRef, useState } from 'react';
import '../css/Header.css';
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
Searchitem.propTypes ={
  onSubmit: PropTypes.func,
};
Searchitem.defaultProps ={
  onSubmit: null,
}
export default function Searchitem(props) {
  const {onSubmit} = props;
  const {Idtree} =useParams();
  const [searchTerm,setSearchTerm] =useState('')
  const typingTimeoutRef = useRef(null);
  function handlesearchitem(e){
      const value =e.target.value
      setSearchTerm(e.target.value);
      if(!onSubmit) return;
      if(typingTimeoutRef.current){
          clearTimeout(typingTimeoutRef.current);
      };
      typingTimeoutRef.current = setTimeout(()=>{
      const formValue ={
          searchTerm: value,
      };
      onSubmit(formValue);
    },300);
  }

    return (
          <form action="#" className="user_flex form-search">
            <input value={searchTerm} onChange={handlesearchitem} type="text" placeholder="Tìm kiếm bất cứ loài cây nào" className="input-search" />
            <button onChange={handlesearchitem} className="btn btn-search"><i className="fa-solid fa-magnifying-glass" /></button>
          </form>
          
    )
}
