// Write your JS code here

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogList} = this.props

    return (
      <ul className="unorder-list-container">
        {blogList.map(each => (
          <BlogItem each={each} key={uuidv4()} />
        ))}
      </ul>
    )
  }
}

export default BlogList
