import React from 'react'
import './article.css'; // Import the article css file from the same folder

/* Send imgUrl as an argument to the functional component through props */
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src= {imgUrl} alt="blog" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Listen to the full song here.</p>
      </div>
    </div>
  )
}

export default Article
