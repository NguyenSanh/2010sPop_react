import React from 'react'
import './blog.css'; // Import the blog css file from the same folder
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          < Article imgUrl ={blog01} date ="Sep 20, 2023" title="This is an example of a song that fully gives off early 2010s EDM Pop vibes."/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl ={blog02} date ="Sep 20, 2023" title="This is an example of a song that fully gives off early 2010s EDM Pop vibes."/>
          <Article imgUrl ={blog03} date ="Sep 20, 2023" title="This is an example of a song that fully gives off early 2010s EDM Pop vibes."/>
          <Article imgUrl ={blog04} date ="Sep 20, 2023" title="This is an example of a song that fully gives off early 2010s EDM Pop vibes."/>
          <Article imgUrl ={blog05} date ="Sep 20, 2023" title="This is an example of a song that fully gives off early 2010s EDM Pop vibes."/>
        </div>
      </div> ={blog01}
    </div>
  )
}

export default Blog
