import React from 'react'
import  Article  from '../../components/article/Article'
import "./blog.css"
import {blog01, blog02, blog03, blog04, blog05} from "./import"

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="" text=""/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="" text=""/>
          <Article imgUrl={blog03} date="" text=""/>
          <Article imgUrl={blog04} date="" text=""/>
          <Article imgUrl={blog05} date="" text=""/>
        </div>
      </div>
    </div> 
  )
}

export default Blog