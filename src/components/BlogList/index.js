// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(eachUser => (
        <BlogItem key={eachUser.id} BlogsDetail={eachUser} />
      ))}
    </ul>
  )
}

export default BlogList
