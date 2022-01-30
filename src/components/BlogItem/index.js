// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {BlogsDetail} = props
  const {title, description, publishedDate} = BlogsDetail

  return (
    <li className="list-container">
      <div className="title-time-container">
        <h1 className="title">{title}</h1>
        <p className="time">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
